import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { TweetService } from '../tweet.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css'],
	providers: [TweetService]
})
export class TweetListComponent implements OnInit {
	tweets: FirebaseListObservable<any[]>;
	constructor(private tweetService: TweetService) {}
	@Input() thisUser: User;

	ngOnInit(){
		this.tweets = this.tweetService.getTweets();
	}
}
