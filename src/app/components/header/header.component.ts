import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-header',
  imports: [BookComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  title = 'Livros S/A';
  constructor() { }
  ngOnInit(): void {
      
  }
}
