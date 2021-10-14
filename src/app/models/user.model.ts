import { Tweet } from './tweet.model';

export class User {
	public followers: User[];
	public following: User[];
	constructor (
		public userName: string, 
		public password: string, 
		public displayName: string, 
		public handle: string, 
		public displayImg = "assets/profile-img.jpg") {}
}
