import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { currentUser } from '../currentUser';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  currentUser = currentUser;
  signedUp: boolean;

  getSignupStatus() {
    if (currentUser.displayName === "") {
      this.signedUp = false;
    } else {
      this.signedUp = true;
    }
  }

  ngOnInit(){
    this.getSignupStatus();
  }
}
