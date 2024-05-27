import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { CasesComponent } from './components/cases/cases.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ConfidentialComponent } from './components/confidential/confidential.component';

export const routes: Routes = [
    { path: 'home', title: 'АО "Юнікейс" - Головна', component: HomeComponent },
    { path: 'cases', title: 'АО "Юнікейс" - Послуги', component: CasesComponent },
    { path: 'ourteam', title: 'АО "Юнікейс" - Наша команда', component: OurteamComponent },
    { path: 'contacts', title: 'АО "Юнікейс" - Контакти', component: ContactsComponent },
    { path: 'confidential', title: 'АО "Юнікейс" - Політика конфіденційності', component: ConfidentialComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', title: 'АО "Юнікейс" - Сторінка не знайдена', component: NotfoundComponent },
];
