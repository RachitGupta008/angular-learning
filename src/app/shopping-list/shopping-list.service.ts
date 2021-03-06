import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsAdded = new EventEmitter<Ingredient[]>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    public addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsAdded.emit(this.ingredients.slice());
    }

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsAdded.emit(this.ingredients.slice());
    }

}