import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //uc4
  title = 'Hello World';
  imageUrl ='../assets/logo.png'
  url="https://www.bridgelabz.com/";
  userName:String = "";

  ngOnInit(): void{
    this.title="Hello World from BridgeLabz"
    }

    onClick($event:any) {
      console.log("Image has been clicked ! ", $event);
      window.open(this.url, "_blank");
    }

  }

