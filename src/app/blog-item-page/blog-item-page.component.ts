import { Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-item-page',
  templateUrl: './blog-item-page.component.html',
  styleUrls: ['./blog-item-page.component.css']
})
export class BlogItemPageComponent{
  constructor(private route: ActivatedRoute){
    this.route.params.subscribe((params: any) => console.log(params));
  }

  title = '1'
  content = '2'

}
