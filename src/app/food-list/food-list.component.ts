import { Component, OnInit } from '@angular/core';
import {FoodInterface} from "../types/food.interface";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public data: FoodInterface[];

  constructor() {
    this.data = [
      {title: 'Мясная делюкс', imgUrl: '1', ingredients: ''},
      {title: 'Морская премиум', imgUrl: '1', ingredients: ''},
      {title: 'Бекон и сосиски', imgUrl: '1', ingredients: ''},
      {title: 'Куриная делюкс', imgUrl: '1', ingredients: ''},
      {title: 'Барбекю премиум', imgUrl: '1', ingredients: ''},
      {title: 'Пепперони дабл', imgUrl: '1', ingredients: ''},
      {title: 'Куриное трио', imgUrl: '1', ingredients: ''},
      {title: 'Сырная', imgUrl: '1', ingredients: ''}
    ]
  }

  ngOnInit(): void {
  }

}
