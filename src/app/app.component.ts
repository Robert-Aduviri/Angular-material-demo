import { Component, Optional } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	spaceScreens: Array<any>;

	constructor(private http:Http) {
		this.http.get('http://200.16.7.160:7000/plato') //'./assets/data.json'
			.map(response => response.json())
			.subscribe(res => this.spaceScreens = res);
	}

	likeMe(i) {
		if (this.spaceScreens[i].liked == 0)
			this.spaceScreens[i].liked = 1;
		else
			this.spaceScreens[i].liked = 0;
	}

	deleteMe(i) {
		this.spaceScreens.splice(i, 1);
		console.log(i);
	}

}

