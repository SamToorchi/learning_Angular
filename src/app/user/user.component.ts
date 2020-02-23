import { Component, OnInit, AfterViewInit, DoCheck, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,  AfterViewInit, DoCheck, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log(" OnInit for User");
  }
  ngAfterViewInit(){
    console.log(" AfterViewInit for UserChildren");
  }
  ngDoCheck(){
    console.log(" DoCheck for User");
  }

  ngAfterViewChecked(){
    console.log(" AfterViewChecked for User");
  }

  ngOnDestroy(){
    console.log(" OnDestroy for User");
  }

  name = 'Björn A.'

chgName(){
  this.name = 'Sam T.'
}


}
