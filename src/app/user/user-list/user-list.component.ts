import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';

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

  constructor() {
    console.log("constructor for UserList");
  }

  ngOnInit(): void {
    console.log(" OnInit for UserList");
  }

  ngDoCheck(){
    console.log(" DoCheck for UserList");
  }

}
