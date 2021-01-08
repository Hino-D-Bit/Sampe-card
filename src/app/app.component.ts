import { Component, VERSION, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  lightTheme: boolean = true;

   ngOnInit() {
    this.lightTheme = true;
    this.changeTheme(this.lightTheme);
  }

  changeTheme(event) {
    if (event) 
    document.documentElement.setAttribute('theme', 'light');
    else 
    document.documentElement.setAttribute('theme', 'dark');
  }
}
