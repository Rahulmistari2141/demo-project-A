import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'public', loadChildren: () => import('./layouts/public/public.module').then(m => m.PublicModule) }, { path: 'secure', loadChildren: () => import('./layouts/secure/secure.module').then(m => m.SecureModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
