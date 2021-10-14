import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TweetService } from '../tweet.service';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { currentUser } from '../currentUser';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css'],
	providers: [TweetService]
})
export class AddTweetComponent {
	constructor(private tweetService: TweetService) {}
	currentUser = currentUser;

	currentTime = new Date();
	month: number = this.currentTime.getMonth() + 1;
	day: number = this.currentTime.getDate();
	year: number = this.currentTime.getFullYear();
	dateString: string = this.month + "/" + this.day + "/" + this.year;

	submitForm(description: string, image: string, link: string) {
		let newTweet = new Tweet(this.currentUser, description, image, link, this.currentTime.toTimeString(), this.dateString);
		this.tweetService.addTweet(newTweet);
	}
}
