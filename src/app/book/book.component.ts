import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../interface/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;
  @Output() emitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCard() {
    //console.log(this.book);
    this.emitBook.emit(this.book);
  }
}
