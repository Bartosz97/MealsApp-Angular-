import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCDjM1_i5rmyXrXbxQUEsyitmjELRNTR90',
    authDomain: 'recipebook-e10a2.firebaseapp.com'

    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
