import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculationComponent} from "./components/calculation/calculation.component";

const routes: Routes = [
  {path: 'calculation', component: CalculationComponent},
  {path: '', redirectTo: '/calculation', pathMatch: 'full'},
  {path: '**', redirectTo: '/calculation', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
