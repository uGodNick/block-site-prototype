import { Component } from '@angular/core';
import {BlogItemsService} from "../blog-items.service";

@Component({
  selector: 'app-blog-list-page',
  templateUrl: './blog-list-page.component.html',
  styleUrls: ['./blog-list-page.component.css']
})
export class BlogListPageComponent {

  isModalHide = true

  constructor(private blogItemsService: BlogItemsService) {}

  blogItems = this.blogItemsService.getItems()

}
