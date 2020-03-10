import {Component, OnInit, DoCheck, HostListener, HostBinding, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit, DoCheck, OnChanges {

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

  ngOnChanges(changes: SimpleChanges): void{
    console.log( changes );
  }

  @HostListener('click')
  chgName() {
    if (this.name != 'Peter Müller') {
      this.name = 'Peter Müller';
      this.isAdminUser = false;
      this.nameChanged.emit("Peter Müller");
    } else {
      this.name = 'Sam T.';
      this.isAdminUser = true;
      this.nameChanged.emit("Sam T.");
    }

  }

  @Input('name')
  name = 'Sam T.';

  @Output()
  nameChanged: EventEmitter<string> = new EventEmitter();


  /* ODER */
  /* ersetzt durch @Input */
  /*
  private _name = 'Sam T.';


  get name(): string {

  ​	/* return "Herr " + this._name; */
    /* ODER */
  /*
    return `Herr ${this._name}`;

  }

  set name(value: string) {
  ​	this._name = value;
  }

  getName() {
    return this._name;
  }
*/
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


  /*ersetzt durch HostBinder */
  /*
  get isAdminUser(): boolean {
    return this._name === 'Sam T.';
  }
 */
  @HostBinding('class.user-name')
  isAdminUser = false;
}
