import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgMaterialModule } from './shared/ng-material/ng-material.module';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './core/projects/projects.component';
import { HomeComponent } from './core/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { ActivitiesComponent } from './core/activities/activities.component';
import { ActivitiesService } from './shared/services/activities.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgMaterialModule,
    NgxSpinnerModule
  ],
  providers: [
    ActivitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
