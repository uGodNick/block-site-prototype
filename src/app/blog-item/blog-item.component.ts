import { Component, Input } from '@angular/core';
import {BlogItem} from "../blog-items.service";

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {

   @Input() item!: BlogItem

}
