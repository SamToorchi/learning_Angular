import { Component } from '@angular/core';
import { UserType } from './user/user-type.enum';
import { User } from './user/user.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LinkedIn';
  showUserInfo = true;

  constructor() {
    console.log( UserType.User);
    console.log( User.User);
  }
}
