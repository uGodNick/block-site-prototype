import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BlogItemPageComponent} from "./blog-item-page/blog-item-page.component";
import {BlogItemComponent} from "./blog-item/blog-item.component";
import {ModalComponent} from "./modal/modal.component";
import {BlogListPageComponent} from "./blog-list-page/blog-list-page.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BlogItemPageComponent,
    BlogItemComponent,
    ModalComponent,
    BlogListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
