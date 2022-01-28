import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cafe1Component } from './cafe1/cafe1.component';
import { CafeRoutingModule } from './cafe-routing.module';
import { Cafe2Component } from './cafe2/cafe2.component';
import { Cafe3Component } from './cafe3/cafe3.component';
import { Cafe4Component } from './cafe4/cafe4.component';
import { Cafe5Component } from './cafe5/cafe5.component';
import { Cafe6Component } from './cafe6/cafe6.component';
import { Cafe7Component } from './cafe7/cafe7.component';
import { Cafe8Component } from './cafe8/cafe8.component';
import { Cafe9Component } from './cafe9/cafe9.component';
import { Cafe10Component } from './cafe10/cafe10.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
@NgModule({
  declarations: [
    HomeComponent,
    Cafe1Component,
    Cafe2Component,
    Cafe3Component,
    Cafe4Component,
    Cafe5Component,
    Cafe6Component,
    Cafe7Component,
    Cafe8Component,
    Cafe9Component,
    Cafe10Component,

  ],
  imports: [
    CommonModule,
    CafeRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    NgImageSliderModule
  ]
})
export class CafelistModule { }
