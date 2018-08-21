import { Component, OnInit } from '@angular/core';
import { Book } from "../book/book";
import { BookService } from "../book/book.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  providers: [BookService]
})
export class BookFormComponent implements OnInit {

	private books: Book[];
	constructor(private router: Router,
	private bookService: BookService) { }
	ngOnInit() {
	   this.getAllbooks();
	   }
	  getAllbooks() {
		   this.bookService.findAll().then(
			   books => {
			   this.books = books;
			   },
			   err => {
			   console.log(err);
			   }
		  );
	   }
	   
	  getBookName(id:number){
		this.bookService.findBookName(id).then(
			   books => {
			   this.books = books;
			   },
			   err => {
			   console.log(err);
			   }
		  );
	  }
	  createbook() {
		   /*let firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
		   let phoneNo = (<HTMLInputElement>document.getElementById('phoneNo')).value;
		   let email = (<HTMLInputElement>document.getElementById('email')).value;
		   let book = new book(0, firstName, Number(phoneNo), email);
		   this.bookService.createbook(book).then(
			   books => {
			   this.books = books;
			   },
			   err => {
			   console.log(err);
			   }
		   );*/
	   }
	  deletebook(book: Book) {
		   /*this.bookService.deletebookById(book.id).then(
			   books => {
			   this.books = books;
			   },
			   err => {
			   console.log(err);
			   }
		   );*/
	   }
	}
