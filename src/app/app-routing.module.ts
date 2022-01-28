import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cafe',
    loadChildren: () => import('./modules/cafelist/cafelist.module').then(m => m.CafelistModule),
  },
  {
    path: '**',
    redirectTo: 'cafe'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
