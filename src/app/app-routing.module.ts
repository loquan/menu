import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { Image2Component } from './image2/image2.component';
import { ResumeComponent } from './resume/resume.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [{ path: 'resume', component: ResumeComponent },
                        { path: 'video', component: VideoComponent },
                        { path: 'image1', component: ImageComponent },
                        { path: 'image2', component: Image2Component },
                        { path: '**', component: ResumeComponent },
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
