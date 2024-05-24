import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { CasesComponent } from './components/cases/cases.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ConfidentialComponent } from './components/confidential/confidential.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cases', component: CasesComponent },
    { path: 'ourteam', component: OurteamComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'confidential', component: ConfidentialComponent },
    { path: '**', component: NotfoundComponent },
];
