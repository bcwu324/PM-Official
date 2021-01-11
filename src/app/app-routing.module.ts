import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { QandaComponent } from './qanda/qanda.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'qanda', component: QandaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
