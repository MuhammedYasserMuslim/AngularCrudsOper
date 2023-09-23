import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PersonComponent} from "./component/person/person.component";
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [
  {path: 'persons', component: PersonComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
