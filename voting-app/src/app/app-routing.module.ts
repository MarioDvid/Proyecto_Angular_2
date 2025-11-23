import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeasPageComponent } from './pages/ideas-page/ideas-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'ideas', pathMatch: 'full' },
  { path: 'ideas', component: IdeasPageComponent },
  { path: '**', redirectTo: 'ideas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
