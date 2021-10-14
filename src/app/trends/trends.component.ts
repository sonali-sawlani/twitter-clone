import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent  {
	@Input() thisUser: User;
}
