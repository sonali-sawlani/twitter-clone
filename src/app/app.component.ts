import { Component } from '@angular/core';
import { User } from './models/user.model';
import { Tweet } from './models/tweet.model';
import { TweetListComponent } from './tweet-list/tweet-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Twitter Clone';
	
}
