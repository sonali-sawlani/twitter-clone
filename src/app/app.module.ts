import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { WhoToFollowComponent } from './who-to-follow/who-to-follow.component';
import { TrendsComponent } from './trends/trends.component';
import { BrowseComponent } from './browse/browse.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBFZC-KG4SY5rbJaYB56J6rWEmvebZiMHI",
  authDomain: "twitter-clone-3d0ca.firebaseapp.com",
  databaseURL: "https://twitter-clone-3d0ca-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-3d0ca",
  storageBucket: "twitter-clone-3d0ca.appspot.com",
  messagingSenderId: "312170116135",
  appId: "1:312170116135:web:cf8a6a4fe7dac2e2b98a02",
  measurementId: "G-JSR3SBY2YY"
};

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    AddTweetComponent,
    NavbarComponent,
    ProfileInfoComponent,
    WhoToFollowComponent,
    TrendsComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		routing,
		AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
