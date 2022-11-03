import { Component, OnInit, Output } from '@angular/core';
import { Book } from '../interface/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      image: "https://makeenbooks.com/upload/ga/9781594748400.jpg",
      name: "jack & carol universe",
      author: "Adam",
      price: 700
    },
    {
      image: "https://makeenbooks.com/upload/ga/9781529363494.jpg",
      name: "stephen king",
      author: "Spiel Burgh",
      price: 850
    },
    {
      image: "https://makeenbooks.com/upload/ga/9780356513508.jpg",
      name: "the fall of koli",
      author: "E.P Carcy",
      price: 1550
    },
  ];

  card: Book[] = [];

  // isDisable: boolean = false;
  // myName: string = '';

  isShowing: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBooks() {
    this.isShowing = !this.isShowing; 
  }

  addToCard(book: Book) {
    console.log(book);
  }
}
