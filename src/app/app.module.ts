import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { QandaComponent } from './qanda/qanda.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { HomePortfolioComponent } from './home-portfolio/home-portfolio.component';
import { HomeEndorsementComponent } from './home-endorsement/home-endorsement.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    PortfolioComponent,
    AboutusComponent,
    QandaComponent,
    HomeCarouselComponent,
    HomeServiceComponent,
    HomePortfolioComponent,
    HomeEndorsementComponent,
    HomeContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
