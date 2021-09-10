import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Mansaf', 'This is an Arab dish', 'https://www.helloworldmagazine.com/wp-content/uploads/2018/11/Jordanian-Mansaf-Recipe-the-smallest.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
