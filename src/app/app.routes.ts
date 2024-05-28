import { Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { HeaderComponent } from './auth/header/header.component';
import { AddnoteComponent } from './home/addnote/addnote.component';

export const routes: Routes = [
    {path: "", component: HeaderComponent},
    {path: "home", component: HomepageComponent},
    {path: "add-notes", component: AddnoteComponent}
];
