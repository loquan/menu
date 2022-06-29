import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { VideoComponent } from './video/video.component';
import { ResumeComponent } from './resume/resume.component';
import { ImageComponent } from './image/image.component';
import { Image2Component } from './image2/image2.component';
import { ScrollingGalleryComponent } from './share/scrolling-gallery/scrolling-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuMobileComponent,
    VideoComponent,
    ResumeComponent,
    ImageComponent,
    Image2Component,
    ScrollingGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
