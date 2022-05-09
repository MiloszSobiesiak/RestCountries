import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component:MainComponent},
  {path:'list/:region', component:ListComponent},
  {path:'country/:country', component:CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
