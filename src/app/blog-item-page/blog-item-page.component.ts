import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BlogItem, BlogItemsService} from "../blog-items.service";

@Component({
  selector: 'app-blog-item-page',
  templateUrl: './blog-item-page.component.html',
  styleUrls: ['./blog-item-page.component.css']
})
export class BlogItemPageComponent implements OnInit{

  isModalShow = false

  item!: BlogItem
  changedItem!: BlogItem

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogItemsService: BlogItemsService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // поиск объекта по переданному параметру и его присвоение переменной
      this.item = this.blogItemsService.getItemById(+params.id)
      // создание копии объкта для редактирования
      this.changedItem = {
        id: this.item.id,
        title: this.item.title,
        content: this.item.content
      }
    })
  }

  delItem() {
    this.blogItemsService.delItemById(this.item.id!)
    this.router.navigate([''])
  }

  updateItem() {
    this.blogItemsService.updateItem(this.changedItem)
  }

}
