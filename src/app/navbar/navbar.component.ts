import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { currentUser } from '../currentUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser = currentUser;

  logoutClick() {
    currentUser.userName = "";
    currentUser.password = "";
    currentUser.displayName = "";
    currentUser.handle = "";
    currentUser.displayImg = "assets/profile-img.jpg";
  }
}
