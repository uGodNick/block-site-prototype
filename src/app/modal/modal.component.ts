import {Component, EventEmitter, Output} from '@angular/core';
import {BlogItem, BlogItemsService} from '../blog-items.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  // событие закрытия модального окна
  @Output() onHide: EventEmitter<any> = new EventEmitter<any>()

  title = ''
  content = ''

  constructor(private blogItemsService: BlogItemsService) {}

  addItem() {
    // проверка на заполненность полей
    if (this.title.trim() && this.content.trim()){

      const blogItem: BlogItem = {
        title: this.title,
        content: this.content
      }

      this.blogItemsService.setItem(blogItem)

      this.onHide.emit()
      this.title = this.content = ''
    }
  }

  hideItem() {
    this.onHide.emit()
  }

}
