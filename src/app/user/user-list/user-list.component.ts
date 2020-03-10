import {Component, OnInit, ViewEncapsulation, DoCheck, Input} from '@angular/core';
import { User } from '../user.enum';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [`
    ul{
    	list-style: none;
    }
`],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent implements OnInit, DoCheck {
  currentUser3: string;

  constructor() {
    console.log("constructor for UserList");
  }

  ngOnInit(): void {
    console.log(" OnInit for UserList");
  }

  ngDoCheck(){
    console.log(" DoCheck for UserList");
  }

  user_1 = User[0];
  user_2 = User[1];
  user_3 = User[2];
  user1 = "Max Mustermann";
  user2 = "Maxi Mustermann";
  user3 = "Sam T.";

  onNameChanged( newName: string){
    console.log('newNamae ', newName);
    this.currentUser3 = newName;
  }
}
