import { Component, EventEmitter } from '@angular/core';
import { Book } from '../../book';
import { CommonModule } from '@angular/common';
import { BookComponent } from "../book/book.component";

@Component({
  selector: 'app-books',
  imports: [CommonModule, BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  book : Book = {} as Book;
  isUpdate : boolean = false;
  idCount : number = 5;

  books: Book[] = [
    {
      id: 1,
      title: 'Java 24 horas',
      author: "Leonardo Silva",
      price: 40.50
    },
    {
      id: 2,
      title: "SpringBoot na veia",
      author: "Calabreso Montenegro",
      price: 36.50
    },
    {
      id: 3,
      title: "Angular 24 horas",
      author: "Celsa Gimenez",
      price: 150.90
    },
    {
      id: 4,
      title: "JavaScript 24 horas",
      author: "Theo Gutierrez",
      price: 15.90
    }
  ];

  saveBook(){
    if(!this.isUpdate){
      this.book.id = this.idCount;
      this.idCount++;
      this.books.push(this.book);
    }    
    this.book = {} as Book;
    this.isUpdate = false;
  }

  updateBook(selectedBook:Book){
    this.book = selectedBook;
    this.isUpdate = true;
  }

  removeBook(selectedBook:Book){
    this.books = this.books.filter( x => x !== selectedBook)
  }
}

