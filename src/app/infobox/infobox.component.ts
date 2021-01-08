import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-infobox",
  templateUrl: "./infobox.component.html",
  styleUrls: ["./infobox.component.scss"]
})
export class InfoboxComponent implements OnInit {
  lightTheme: boolean;

  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
    this.lightTheme = this.appComponent.lightTheme;
  }

  changeTheme(event) {
    this.appComponent.changeTheme(event);
  }
}
