import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { SaveComponent } from './save/save.component';
import { TravelComponent } from './travel/travel.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'save',
    component: SaveComponent,
  },
  {
    path: 'travel',
    component: TravelComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'wallet',
    component: WalletComponent,
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
