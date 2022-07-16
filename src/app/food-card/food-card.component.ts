import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FoodInterface} from "../types/food.interface";
import lgZoom from "lightgallery/plugins/zoom"

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FoodCardComponent implements OnInit {
  settings = {
    counter: false,
    plugins: [lgZoom]
  };

  @Input() pizza!:FoodInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
