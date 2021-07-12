

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Meals } from '../model/Meals.model';

@Injectable({providedIn: 'root'})
export class MealService {
  constructor(private httpClient: HttpClient) { }

  getRandomMeal():Observable<Meals>{

    return this.httpClient.get<Meals>("https://www.themealdb.com/api/json/v1/1/random.php")
    .pipe(
      tap(data=>{
        //console.log("Service call");
        //console.log(data);
      })
    )

    ;
  }
}


