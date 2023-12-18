import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { UserList } from "src/app/shared/user.Listmodel";

@Injectable()

export class UserServices{

    userAdded = new Subject<UserList[]>();
    userEdited = new Subject<number>();
    private userItems: UserList[] = [
        new UserList('test@gmail.com','123456')
    ];

    getUserItems(){
        return this.userItems.slice();
    }

    getIndex(index: number){
        return this.userItems[index];
    }


    addStorageItems(userItems: UserList){
        this.userItems.push(userItems);
        this.userAdded.next(this.userItems.slice());
    }

    updateUserItems( index: number, newItem: UserList ){
        this.userItems[index] = newItem;
        this.userAdded.next(this.userItems.slice())
    }
    deleteUserItems(index: number){
        this.userItems.splice(index,1);
        this.userAdded.next(this.userItems.slice())
    }
}