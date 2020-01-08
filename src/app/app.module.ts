import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { CasestudiesComponent } from './components/casestudies/casestudies.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { DataAnalyticsCSComponent } from './components/casestudies/data-analytics-cs/data-analytics-cs.component';
import { TspCSComponent } from './components/casestudies/tsp-cs/tsp-cs.component';
import { CShomeComponent } from './components/casestudies/cshome/cshome.component';
import { IntroductionComponent } from './components/documentation/introduction/introduction.component';
import { SetupComponent } from './components/documentation/setup/setup.component';
import { RunCS1Component } from './components/documentation/run-cs1/run-cs1.component';
import { RunCS2Component } from './components/documentation/run-cs2/run-cs2.component';
import { ReferencesComponent } from './components/documentation/references/references.component';
import { FeaturesComponent } from './components/features/features.component';
import { SupportComponent } from './components/support/support.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagenotfoundComponent,
    DownloadsComponent,
    DocumentationComponent,
    CasestudiesComponent,
    AboutusComponent,
    HomeComponent,
    DataAnalyticsCSComponent,
    TspCSComponent,
    CShomeComponent,
    IntroductionComponent,
    SetupComponent,
    RunCS1Component,
    RunCS2Component,
    ReferencesComponent,
    FeaturesComponent,
    SupportComponent,
    OurTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    NgxImageZoomModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
