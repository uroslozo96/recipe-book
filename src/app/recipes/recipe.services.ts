import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Indulge in our mouthwatering pizzas, featuring fresh dough, flavorful tomato sauce, premium cheese, and a variety of enticing toppings. From classic Margherita to gourmet specialties, each bite is a taste of perfection.  ',
      'https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aGNlL2hmZC8xNTk2ODYyNTc4NjkxMC5qcGd8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA',
      [
        new Ingredient('Tomato', 2),
        new Ingredient('Ketchup', 1),
        new Ingredient('Pepperoni', 4),
      ]
    ),
    new Recipe(
      'Ćevapi',
      'Explore the delicious world of Serbian Ćevapi at our eatery. These grilled minced meat delicacies, seasoned to perfection, are a true Balkan delight. Served with traditional accompaniments, our Ćevapi promise a savory experience that captures the essence of Serbian cuisine. ',
      'https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.6435-9/156259074_495341305167729_8393679499410257929_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=YKes5zT05fAAX-ZYoit&_nc_ht=scontent.fbeg2-1.fna&oh=00_AfCS4dFzuloVVKuWL36rDQVKA_w1HEzhWi6XzqPgq2bG_g&oe=6579AB92',
      [
        new Ingredient('Meat', 3),
        new Ingredient('Onion', 1),
        new Ingredient('Kajmak', 2),
      ]
    ),
    new Recipe(
      'Karđorđeva',
      "Karađorđe's schnitzel is a traditional Serbian dish consisting of a thinly pounded cutlet stuffed with cheese, rolled, coated in breadcrumbs, and fried to a golden crisp. Named after Karađorđe Petrović, a leader of the First Serbian Uprising known for his bravery, the dish is often served alongside various sides such as French fries, potato salad, or assorted vegetables.",
      'https://xdn.tf.rs/2021/08/22/shutterstock1939207753-830x0.jpg',
      [
        new Ingredient('Meat', 4),
        new Ingredient('French fries', 2),
        new Ingredient('Kajmak', 1),
        new Ingredient('Vegetables', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
