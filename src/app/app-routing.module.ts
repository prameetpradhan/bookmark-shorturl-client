import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateShortUrlComponent } from './component/create-short-url/create-short-url.component';
import { UrlsComponent } from './component/urls/urls.component';

const routes: Routes = [
  { path: 'createShortUrl', component: CreateShortUrlComponent },
  { path: 'urls', component: UrlsComponent },
  { path: '**', component: UrlsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
