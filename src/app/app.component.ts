import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31csf';
  updatedNumber: number;

  leftEnabled: boolean = true;
  rightEnabled: boolean = true;

  changedNumber(eventNumber: number){
    this.updatedNumber= eventNumber;
  }

  ToggleLeft() {
    this.leftEnabled = !this.leftEnabled;
    console.log(this.leftEnabled);
  }
  ToggleRight() {
    this.rightEnabled = !this.rightEnabled;
  }
}
