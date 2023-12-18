import { Component, OnDestroy, OnInit } from '@angular/core';
import { Storage } from 'src/app/shared/storage.model';
import { storageService } from './storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-storage',
  templateUrl: './item-storage.component.html',
  styleUrls: ['./item-storage.component.css']
})
export class ItemStorageComponent implements OnInit, OnDestroy{
  storageItems : Storage[];
  private sub : Subscription
  constructor ( private storageService : storageService ){}
  
  ngOnInit(): void {
    this.storageItems = this.storageService.getStorageItems();
    this.sub = this.storageService.storageAdded.subscribe(
      (storage: Storage[])=> {
        this.storageItems = storage
      }
    );
  }
  editItem(index: number){
    this.storageService.storageEdited.next(index);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
