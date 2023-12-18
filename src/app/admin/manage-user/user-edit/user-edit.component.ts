import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserServices } from '../user.service';
import { Subscription } from 'rxjs';
import { UserList } from 'src/app/shared/user.Listmodel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') userForm : NgForm;
  sub: Subscription;
  editMode = false;
  editedIndex : number;
  editedItem: UserList

  constructor( private userService: UserServices) {}

  ngOnInit(): void {
    this.sub = this.userService.userEdited.subscribe(
      (index: number) => {
        this.editedIndex = index;
        this.editMode = true;
        this.editedItem = this.userService.getIndex(index);
        this.userForm.setValue({
          email: this.editedItem.email,
          password: this.editedItem.role
        })
      }
    );
  }

  submit( form: NgForm ){

    const value = form.value;
    const userItems = new UserList(value.email,value.password );
    if(this.editMode){
      this.userService.updateUserItems(this.editedIndex, userItems);
    }else{
      this.userService.addStorageItems(userItems);
    }
    this.editMode = false;
    form.reset();

  }

  Delete(){
    this.userService.deleteUserItems(this.editedIndex);
    this.Clear();
  }

  Clear(){
    this.userForm.reset()
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }



}
