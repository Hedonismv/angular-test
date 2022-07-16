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
      {title: 'Мясная делюкс', imgUrl: 'myasnaya_delux', ingredients: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы'},
      {title: 'Морская премиум', imgUrl: 'sea_premium', ingredients: 'Перец, сыр, креветки, кальмары, мидии, лосось'},
      {title: 'Бекон и сосиски', imgUrl: 'beacon_sausages', ingredients: 'Бекон, сыр, сосиски, ананас, томатная паста'},
      {title: 'Куриная делюкс', imgUrl: 'chicken_deluxe', ingredients: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста'},
      {title: 'Барбекю премиум', imgUrl: 'barbeque_premium', ingredients: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили'},
      {title: 'Пепперони дабл', imgUrl: 'pepperoni_double', ingredients: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная'},
      {title: 'Куриное трио', imgUrl: 'chicken_trio', ingredients: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы'},
      {title: 'Сырная', imgUrl: 'cheese', ingredients: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный'}
    ]
  }

  ngOnInit(): void {
  }

}
