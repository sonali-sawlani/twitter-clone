import { User } from './user.model';

export class Tweet {
	public isLiked: boolean = false;
	public likes: number = 0;
	public retweets: number = 0;
	constructor (public author: User, public description: string, public image: string, public link: string, public postTime: string, public postDate: string) {}
}
