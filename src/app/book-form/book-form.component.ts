import { Component, OnInit } from '@angular/core';
import { Book } from "../book/book";
import { BookService } from "../book/book.service";
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  providers: [BookService]
})
export class BookFormComponent implements OnInit {

	private books: Book[];
	
	books$: Observable<Book[]>;	
	private searchTerms = new Subject<string>(); 
	
	constructor(private bookService: BookService) { }
	
		// Push a search term into the observable stream.
		search(term: string): void {
			this.searchTerms.next(term);
		}
		
		ngOnInit(): void {
			this.books$ = this.searchTerms.pipe(
			  // wait 300ms after each keystroke before considering the term
			  debounceTime(300),

			  // ignore new term if same as previous term
			  distinctUntilChanged(),

			  // switch to new search observable each time the term changes
			  switchMap((term: string) => this.bookService.searchBookFilter(term)),
			);
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
	  
	  searchbook(name:string){
		this.bookService.searchBook(name).then(
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
