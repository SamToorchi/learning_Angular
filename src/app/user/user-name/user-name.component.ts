import {Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit, DoCheck {

  constructor() {
    let div: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    div.innerHTML = '<h1> my div </h1>';
    document.body.appendChild(div);
  }

  ngOnInit(): void {
    console.log(' OnInit for UserName');
  }

  ngDoCheck() {
    console.log(' DoCheck for UserName');
  }

  /* name = "Sam T." */
  /* ODER */
  private _name = 'Sam T.';


  get name(): string {

  ​	/* return "Herr " + this._name; */
    /* ODER */
    return `Herr ${this._name}`;

  }

  set name(value: string) {

  ​	this._name = value;

  }

  getName() {
    return this._name;
  }

  htmlContent = `<p>lorem ipsum dolor sit</p>`;
  imgPath = '/assets/img/logo.png';
  private _altLabel = 'logo';

  getAltLabel(): string {
    return this._altLabel;
  }

  desc = 'Inhalt für ScreenReader';
  fontColor = 'red';
  fontSize = 1.2;
  userNameStyleClass = 'user-name';

  get isAdminUser(): boolean {
    return this._name === 'Sam T.';
  }

  chgName(event: MouseEvent) {
    debugger;
    if (this._name != 'Peter Müller') {
      this._name = 'Peter Müller';
    } else {
      this._name = 'Sam T.';
    }

  }

}
