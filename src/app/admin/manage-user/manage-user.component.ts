import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserList } from 'src/app/shared/user.Listmodel';
import { UserServices } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit , OnDestroy{

  userItems : UserList[];
  private sub : Subscription
  constructor ( private userService : UserServices ){}
  
  ngOnInit(): void {
    this.userItems = this.userService.getUserItems();
    this.sub = this.userService.userAdded.subscribe(
      (user: UserList[])=> {
        this.userItems = user
      }
    );
  }
  
  
  editItem(index: number){
    this.userService.userEdited.next(index);
  }
  
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  
}
