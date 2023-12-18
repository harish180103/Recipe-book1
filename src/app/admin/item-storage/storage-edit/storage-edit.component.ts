import { Component, OnDestroy, OnInit, ViewChild,} from '@angular/core';
import { Storage } from 'src/app/shared/storage.model';
import { storageService } from '../storage.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-storage-edit',
  templateUrl: './storage-edit.component.html',
  styleUrls: ['./storage-edit.component.css']
})
export class StorageEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') storageForm : NgForm;
  sub: Subscription;
  editMode = false;
  editedIndex : number;
  editedItem: Storage

  constructor( private storageService : storageService  ){}

  ngOnInit(): void {
    this.sub = this.storageService.storageEdited.subscribe(
      (index: number) => {
        this.editedIndex = index;
        this.editMode = true;
        this.editedItem = this.storageService.getIndex(index);
        this.storageForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }


  submit( form: NgForm ){
    const value = form.value;
    const storageItems = new Storage(value.name,value.amount );
    if(this.editMode){
      this.storageService.updateStorageItems(this.editedIndex, storageItems);
    }else{
      this.storageService.addStorageItems(storageItems);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete(){
    this.storageService.deleteStorageItems(this.editedIndex);
    this.onClear();
  }

  onClear(){
    this.storageForm.reset()
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
