import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './front/home/home.component';
import { EventcrudComponent } from './eventcrud/eventcrud.component';
import { EvenementComponent } from './evenement/evenement.component';
import { AffichageComponent } from './affichage/affichage.component';
const routes: Routes = [
//General empty page and its children FRONT
  

  
   {path: '', component: HomeComponent},
   {path:'event',component:EventcrudComponent},
   {path:'evenement',component:EvenementComponent},
   {path:'affichage',component:AffichageComponent},


 
   

  
 
//{path: 'order-history', component: OrderHistoryComponent}, 
  

  //{path:'favoriteProduct', component: WishListComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
