import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Tweet } from './models/tweet.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TweetService {
 	tweets: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
		this.tweets = database.list('tweets');
	}

	getTweets() {
		return this.tweets;
	}

	addTweet(newTweet: Tweet) {
    this.tweets.push(newTweet);
  }
}
