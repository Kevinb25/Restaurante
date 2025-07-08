import { IDish } from '../../../interfaces/dish.interface';
import { DishesService } from './../../../services/dishes.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dishes-list',
  imports: [],
  templateUrl: './dishes-list.component.html',
  styleUrl: './dishes-list.component.css'
})
export class DishesListComponent {

  dishes: IDish[] = [];
  dishesService = inject(DishesService);

  async ngOnInit() {
    this.dishes = await this.dishesService.getAllDishes();
  }
}
