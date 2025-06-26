import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { QandaComponent } from './qanda/qanda.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PortfolioNewBornComponent } from './portfolio-new-born/portfolio-new-born.component';
import { PortfolioFamilyComponent } from './portfolio-family/portfolio-family.component';
import { PortfolioPregnantComponent } from './portfolio-pregnant/portfolio-pregnant.component';
import { PortfolioWeddingComponent } from './portfolio-wedding/portfolio-wedding.component';
import { PortfolioWedding2Component } from './portfolio-wedding2/portfolio-wedding2.component';
import { PortfolioWeddingrecordComponent } from './portfolio-weddingrecord/portfolio-weddingrecord.component';
import { PortfolioArtComponent } from './portfolio-art/portfolio-art.component';
import { PortfolioPmalbumComponent } from './portfolio-pmalbum/portfolio-pmalbum.component';
import { AdminComponent } from './admin/admin.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      {
        path: 'new-born', // child route path
        component: PortfolioNewBornComponent, // child route component that the router renders
      },
      {
        path: 'family',
        component: PortfolioFamilyComponent, // another child route component that the router renders
      },
    ]
  },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'qanda', component: QandaComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
