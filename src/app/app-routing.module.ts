import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import {AddShelterComponent} from './add-shelter/add-shelter.component';
import {ShelterComponent} from './shelter/shelter.component';
import {UpdateAnimalComponent} from './update-animal/update-animal.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'form', component: FormComponent},
  {path: 'updateAnimal', component: UpdateAnimalComponent},
  {path: 'addShelter', component: AddShelterComponent},
  {path: 'shelter', component: ShelterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
