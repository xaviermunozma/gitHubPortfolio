import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ItemComponent } from './components/pages/item/item.component';
import { SearchComponent} from './components/pages/search/search.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'item/:id', component: ItemComponent},
{path: 'search/:textobusq', component: SearchComponent},
{path: '**', redirectTo: 'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
