import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {

testClick() {
  console.log("button test clucks");
}

  fruit: string = "Durian";

  fullName: string = "Kafka";

  fontWeight: string = 'bold';

  fontSize: string = "xxx-large";

  fruits : [ {name: string, quantity: number}] = [{name: "chiecken", quantity: 7}];

  ngOnInit(): void {
    this.fruits.push({name: "Mango", quantity: 5});
    this.fruits.push({name: "ass", quantity: 69});
    this.fruits.push({name: "dick", quantity: 69});
  }
}

