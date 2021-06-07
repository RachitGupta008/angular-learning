import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes : Routes = [
    {path:'', redirectTo:'recipes', pathMatch:'full'},
    {path:'shopping-list', component:ShoppingListComponent},
    {path:'recipes', component:RecipesComponent, children:[
      {path:'', component:NewRecipeComponent},
      {path:':id', component: RecipeDetailComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutes{

    

}