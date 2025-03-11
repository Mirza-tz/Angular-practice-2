import { Component } from '@angular/core';
import { book } from '../../models/book.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  newAuthor: string = "";
  newTitle: string = ""
  books: book[] = []

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      let savedBooks = localStorage.getItem("books");
      this.books = savedBooks ? JSON.parse(savedBooks) : [];
    }
  }


addBook() {
  if(this.newAuthor.trim().length && this.newTitle) {
  let newBook: book = {
    id: Date.now(),
    author: this.newAuthor,
    title: this.newTitle
  }

  this.books.push(newBook)
  this.newAuthor = "";
  this.newTitle = ""

  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem("books", JSON.stringify(this.books));
   }
}}

deleteBook(index: number) {
this.books.splice(index, 1)
localStorage.setItem("books", JSON.stringify(this.books))
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem("appointments", JSON.stringify(this.books));
  }
}



}
