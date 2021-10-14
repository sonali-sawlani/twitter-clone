import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { TweetService } from '../tweet.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { currentUser } from '../currentUser';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
	providers: [TweetService]
})
export class BrowseComponent implements OnInit  {
	tweets: FirebaseListObservable<any[]>;
	constructor(private router: Router, private tweetService: TweetService){}
  currentUser = currentUser;

	ngOnInit(){
	    this.tweets = this.tweetService.getTweets();
	  }

	@Input() childTweetList: Tweet[];
	@Input() childUserList: User[];

	currentTime = new Date();
	month: number = this.currentTime.getMonth() + 1;
	day: number = this.currentTime.getDate();
	year: number = this.currentTime.getFullYear();
	dateString: string = this.month + "/" + this.day + "/" + this.year;
}
