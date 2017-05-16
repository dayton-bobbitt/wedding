import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { BasePageComponent } from './base-page/base-page.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';

const routes: Routes = [
  { path: 'our-story', component: OurStoryComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'travel-info', component: TravelInfoComponent },
  { path: 'rsvp', component: RsvpComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OurStoryComponent,
    BasePageComponent,
    RsvpComponent,
    RegistryComponent,
    TravelInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
