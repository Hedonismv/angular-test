import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  orderForm!: FormGroup;

  name:string = 'value'


  constructor() {
  }

  dynamicVal(e:any):void{

  }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'location': new FormControl('', [Validators.required]),
      'phone': new FormControl('', [Validators.required])
    })
  }

  async onSubmit(){
    try{
      const response = await fetch('https://dummyjson.com/http/200', {
        method: 'POST',
        body: JSON.stringify(this.orderForm.value)
      })
      this.orderForm.reset()
      alert('Данные успешно отправлены, статус: ' + response.status)
    }catch (e) {
      this.orderForm.reset()
      alert('Ошибка отправки:' + e)
    }
  }

}
