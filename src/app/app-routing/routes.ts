import {Routes} from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { SearchPageComponent } from '../search-page/search-page.component';

export const routes: Routes = [
    {path:'home' , component: HomeComponent},
    {path:'contact' , component: ContactComponent},
    {path:'search/:txt' , component: SearchPageComponent},
    {path:'' , redirectTo:'/home' , pathMatch:'full'}
];