import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MealService } from '../service/meal.service';
import { Meal } from '../model/Meal.model';
import { Meals } from '../model/Meals.model';
import { URLUtils } from '../Utils/URLutil';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
})
export class MealComponent implements OnInit {
  randomMeal: Meal;

  constructor(private mealService: MealService,private sanitizer: DomSanitizer) {}


  ngOnInit(): void {
    this.getRandomMeal();
  }



  getRandomMeal() {

    this.mealService.getRandomMeal().subscribe((meals: Meals) => {
      this.randomMeal = meals.meals[0];
      this.randomMeal.youtubeVideoId = URLUtils.getYoutubeVideoId(this.randomMeal.strYoutube);


      //console.log(this.randomMeal.youtubeVideoId);
      //console.log('after subscription');
      //console.log(meals);
    });
  }

}
