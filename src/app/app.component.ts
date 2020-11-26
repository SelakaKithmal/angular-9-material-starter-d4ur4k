import { Component } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  keywordsInput: any;
  focussed: false;

  constructor() {}

  MouseOver() {
    console.log("Im mouse over");
    alert("Mouse over me");
  }

  Focus() {
    console.log("Im Focus");
    alert("I got Focus");
  }
}
