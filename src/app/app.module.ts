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
import { TabsGettingStartedComponent } from './common/tabs-getting-started/tabs-getting-started.component';
import { IntroComponent } from './components/documentation/run-cs1/intro/intro.component';
import { RunwfComponent } from './components/documentation/run-cs1/runwf/runwf.component';
import { Step1Component } from './components/documentation/run-cs1/step1/step1.component';
import { Step2Component } from './components/documentation/run-cs1/step2/step2.component';
import { Step3Component } from './components/documentation/run-cs1/step3/step3.component';
import { Step4Component } from './components/documentation/run-cs1/step4/step4.component';
import { Step5Component } from './components/documentation/run-cs1/step5/step5.component';
import { Step6Component } from './components/documentation/run-cs1/step6/step6.component';
import { BuildComponent } from './components/documentation/run-cs1/build/build.component';
import { TabsSpecialwcComponent } from './common/tabs-specialwc/tabs-specialwc.component';
import { GenerateMultipleInstancesComponent } from './components/documentation/run-cs2/generate-multiple-instances/generate-multiple-instances.component';
import { HandlingMultipleWorkflowsComponent } from './components/documentation/run-cs2/handling-multiple-workflows/handling-multiple-workflows.component';
import { ChannelCoordinationComponent } from './components/documentation/run-cs2/channel-coordination/channel-coordination.component';
import { GototopComponent } from './common/gototop/gototop.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './common/footer/footer.component';

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
    NextStepsComponent,
    TabsGettingStartedComponent,
    IntroComponent,
    RunwfComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    BuildComponent,
    TabsSpecialwcComponent,
    GenerateMultipleInstancesComponent,
    HandlingMultipleWorkflowsComponent,
    ChannelCoordinationComponent,
    GototopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    NgxImageZoomModule.forRoot(),
    TabsModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
