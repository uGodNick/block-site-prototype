import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogItemPageComponent} from "./blog-item-page/blog-item-page.component";
import {BlogListPageComponent} from "./blog-list-page/blog-list-page.component";

const routes: Routes = [
  {
    path: 'blog/:id',
    component: BlogItemPageComponent
  },
  {
    path: '**',
    component: BlogListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
