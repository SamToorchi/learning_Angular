import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
    console.log(" OnInit for UserName");
  }

  ngDoCheck(){
    console.log(" DoCheck for UserName");
  }

}
