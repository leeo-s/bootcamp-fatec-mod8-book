import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BooksComponent } from "./components/books/books.component";
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BooksComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
