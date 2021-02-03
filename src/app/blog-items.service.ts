import { Injectable } from '@angular/core';

export interface BlogItem {
  id?: number
  title: string,
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class BlogItemsService {

  blogItems: BlogItem[] = [
    {id: 4, title: 'Заголовок-4', content: 'Содержимое-4'},
    {id: 3, title: 'Заголовок-3', content: 'Содержимое-3'},
    {id: 2, title: 'Заголовок-2', content: 'Содержимое-2'},
    {id: 1, title: 'Заголовок-1', content: 'Содержимое-1'}
  ]

  constructor() { }

  getItems() {
    return this.blogItems
  }

  getItemById(id: number) {
    return <BlogItem>this.blogItems.find((item) => item.id === id)
  }

  setItem(blogItem: BlogItem) {
    // при отсутствии элементов устанавливать id = 1, иначе - на один больше предыдущего
    this.blogItems[0].id ? blogItem.id = this.blogItems[0].id + 1: blogItem.id = 1
    this.blogItems.unshift(blogItem)
  }

  delItemById(id: number) {
    const index = this.blogItems.findIndex(item => item.id === id)
    this.blogItems.splice(index, 1)
  }

  updateItem(blogItem: BlogItem) {
    const index = this.blogItems.findIndex(item => item.id === blogItem.id)
    this.blogItems[index].title = blogItem.title
    this.blogItems[index].content = blogItem.content
  }
}
