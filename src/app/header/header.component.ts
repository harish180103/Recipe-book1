import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'appHeader',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class headerComponent implements  OnDestroy{
    private userSub : Subscription;
    isAuthenticated= false;
    Admin= false;
    
    
    constructor(private dataStorageService: DataStorageService, private authService: AuthService){}
    // ngOnInit() {
    //     this.userSub = this.authService.userObj.subscribe(user => {
    //       this.isAuthenticated = !!user;
    //       console.log(!user);
    //       console.log(!!user);
    //     });
    //   }

    
    onSaveData(){
        this.dataStorageService.storeRecipe();

    }

    onFetchData(){
        this.dataStorageService.fetchRecipe();
    }
    // onLogout(){
    //     this.authService.logout();
    // }
    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }

    
    
}