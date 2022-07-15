import {Component, Input, OnInit} from '@angular/core';
import {FoodInterface} from "../types/food.interface";

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

  @Input() pizza!:FoodInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
