import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component'


const routes: Routes = [
    { path: "Home", component: HomeComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'details/:data', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
