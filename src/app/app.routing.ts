import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { WhoToFollowComponent } from './who-to-follow/who-to-follow.component';
import { TrendsComponent } from './trends/trends.component';
import { BrowseComponent } from './browse/browse.component';

const appRoutes: Routes = [
	{
		path: '',
		component: BrowseComponent
	}
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
