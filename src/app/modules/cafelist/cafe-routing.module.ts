import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { Cafe1Component } from './cafe1/cafe1.component';
import { Cafe2Component } from './cafe2/cafe2.component';
import { Cafe3Component } from './cafe3/cafe3.component';
import { Cafe4Component } from './cafe4/cafe4.component';
import { Cafe5Component } from './cafe5/cafe5.component';
import { Cafe6Component } from './cafe6/cafe6.component';
import { Cafe7Component } from './cafe7/cafe7.component';
import { Cafe8Component } from './cafe8/cafe8.component';
import { Cafe9Component } from './cafe9/cafe9.component';
import { Cafe10Component } from './cafe10/cafe10.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cafe1',
    component: Cafe1Component,
  },
  {
    path: 'cafe2',
    component: Cafe2Component,
  },
  {
    path: 'cafe3',
    component: Cafe3Component,
  },
  {
    path: 'cafe4',
    component: Cafe4Component,
  },
  {
    path: 'cafe5',
    component: Cafe5Component,
  },
  {
    path: 'cafe6',
    component: Cafe6Component,
  },
  {
    path: 'cafe7',
    component: Cafe7Component,
  },
  {
    path: 'cafe8',
    component: Cafe8Component,
  },
  {
    path: 'cafe9',
    component: Cafe9Component,
  },
  {
    path: 'cafe10',
    component: Cafe10Component,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CafeRoutingModule { }
