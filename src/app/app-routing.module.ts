import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CasestudiesComponent } from './components/casestudies/casestudies.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Downloads', component: DownloadsComponent },
  { path: 'Documentation', component: DocumentationComponent },
  { path: 'Case-Studies', component: CasestudiesComponent },
  { path: 'About-us', component: AboutusComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
