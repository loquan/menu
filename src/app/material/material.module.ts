
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MaterialComponenets = [ MatMenuModule,
                              MatIconModule,
                              MatButtonToggleModule,
                              MatButtonModule,
                              BrowserAnimationsModule ];

@NgModule({

  imports: [ MaterialComponenets
  ], exports: [MaterialComponenets
  ]
})
export class MaterialModule { }
