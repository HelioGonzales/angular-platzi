import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

 title = 'angular-first';

  items = ["helio", "piero", "cuchio"];



  power = 10;

  ngOnInit() {

  }

  addItem() {
    this.items.push("nuevo item")
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
