import { IDish } from './../interfaces/dish.interface';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export type BodyDish = Omit<IDish, 'id'>;

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  private baseUrl = `${environment.apiUrl}/dishes`;
  private httpclient = inject(HttpClient);

  getAllDishes() {
    return lastValueFrom(
      this.httpclient.get<IDish[]>(this.baseUrl)
    );
  }


  getDishesByCategory(category: string) {
    return lastValueFrom(
      this.httpclient.get(`${this.baseUrl}/category/${category}`)
    );
  }

  getDishesById(id: number) {
    return lastValueFrom(
      this.httpclient.get<IDish | null>(`${this.baseUrl}/:${id}`)
    );
  }

  createDish(body: BodyDish): Promise<IDish> {
    return lastValueFrom(
      this.httpclient.post<IDish>(`${this.baseUrl}`, body)
    );
  }

  updateDishById() { }

  deleteDish() { }

}
