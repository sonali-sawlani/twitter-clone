import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Tweet } from './models/tweet.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
 	users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
		this.users = database.list('users');
	}

	getUsers() {
		return this.users;
	}

	addUser(newUser: User) {
    this.users.push(newUser);
  }
}
