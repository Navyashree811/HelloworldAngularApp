import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //uc2
  title = 'Hello World';
  ngOnInit(){
    this.title="Hello World from BridgeLabz"
    }
  }

