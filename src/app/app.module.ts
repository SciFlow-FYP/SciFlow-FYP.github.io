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
import { TabsComponent } from './common/tabs/tabs.component';
import { TabComponent } from './common/tabs/tab.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { WorkflowComponent } from './components/documentation/introduction/workflow/workflow.component';
import { DynamicWFComponent } from './components/documentation/introduction/dynamic-wf/dynamic-wf.component';
import { ComposabilityComponent } from './components/documentation/introduction/composability/composability.component';
import { ImplicitParallelismComponent } from './components/documentation/introduction/implicit-parallelism/implicit-parallelism.component';
import { TabsSetupComponent } from './common/tabs-setup/tabs-setup.component';
import { PreRequisitesComponent } from './components/documentation/setup/pre-requisites/pre-requisites.component';
import { RunFrameworkComponent } from './components/documentation/setup/run-framework/run-framework.component';
import { NextStepsComponent } from './components/documentation/setup/next-steps/next-steps.component';

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
    OurTeamComponent,
    TabsComponent,
    TabComponent,
    WorkflowComponent,
    DynamicWFComponent,
    ComposabilityComponent,
    ImplicitParallelismComponent,
    TabsSetupComponent,
    PreRequisitesComponent,
    RunFrameworkComponent,
    NextStepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    NgxImageZoomModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
