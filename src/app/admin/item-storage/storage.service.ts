import { Subject } from "rxjs";
import { Storage } from "src/app/shared/storage.model";
export class storageService{
    storageAdded = new Subject<Storage[]>();
    storageEdited = new Subject<number>();
    private storageItems : Storage[]=[
        new Storage('Apples',5),
        new Storage('Tomatoes',10)
    ];

    getStorageItems(){
        return this.storageItems.slice();
    }

    getIndex(index: number){
        return this.storageItems[index];
    }

    addStorageItems(storageItems: Storage){
        this.storageItems.push(storageItems);
        this.storageAdded.next(this.storageItems.slice());
    }

    updateStorageItems( index: number, newItem: Storage ){
        this.storageItems[index] = newItem;
        this.storageAdded.next(this.storageItems.slice())
    }
    deleteStorageItems(index: number){
        this.storageItems.splice(index,1);
        this.storageAdded.next(this.storageItems.slice())
    }
}