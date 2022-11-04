import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HelloWorld from BrideLabz';
  imageUrl = "../assets/logo.png"
  url = "https://www.bridgelabz.com/"
  ngOnInit(): void {
    this.title ="Hello All"
  }
    onClick($event: any){
      console.log("Save button is clicked!", $event);
      window.open(this.url, "_blank");
    }
  }

