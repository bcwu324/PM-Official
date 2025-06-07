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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PortfolioMenuComponent } from './portfolio-menu/portfolio-menu.component';
import { PortfolioNewBornComponent } from './portfolio-new-born/portfolio-new-born.component';
import { PortfolioFamilyComponent } from './portfolio-family/portfolio-family.component';
import { PortfolioPregnantComponent } from './portfolio-pregnant/portfolio-pregnant.component';
import { PortfolioWeddingComponent } from './portfolio-wedding/portfolio-wedding.component';
import { PortfolioWedding2Component } from './portfolio-wedding2/portfolio-wedding2.component';
import { PortfolioWeddingrecordComponent } from './portfolio-weddingrecord/portfolio-weddingrecord.component';
import { PortfolioArtComponent } from './portfolio-art/portfolio-art.component';
import { PortfolioPmalbumComponent } from './portfolio-pmalbum/portfolio-pmalbum.component';
import { HttpClientModule } from '@angular/common/http';
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
    FooterComponent,
    ContactusComponent,
    PortfolioMenuComponent,
    PortfolioNewBornComponent,
    PortfolioFamilyComponent,
    PortfolioPregnantComponent,
    PortfolioWeddingComponent,
    PortfolioWedding2Component,
    PortfolioWeddingrecordComponent,
    PortfolioArtComponent,
    PortfolioPmalbumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
