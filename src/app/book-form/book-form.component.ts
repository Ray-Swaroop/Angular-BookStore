import { Component, OnInit } from '@angular/core';
import { Book } from "../book/book";
import { BookService } from "../book/book.service";
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  providers: [BookService]
})
export class BookFormComponent implements OnInit {

	private books: Book[];
	public bookName = '';
	public flag: boolean = true;
	public bookss: Observable<any[]>;  
	private searchTerms = new Subject<string>(); 
	constructor(private router: Router,
	private bookService: BookService) { }
	ngOnInit() {
		   this.bookss = this.searchTerms  
		  .debounceTime(300)        // wait for 300ms pause in events  
		  
		  .distinctUntilChanged()   // ignore if next search term is same as previous  
		  
		  .switchMap(term => term   // switch to new observable each time  
		  
			// return the http search observable  
			? this.bookService.searchBook(term)  
			
			// or the observable of empty heroes if no search term  
			: Observable.of<any[]>([]))  
		  .catch(error => {  
			// TODO: real error handling  
			console.log(error);  
			return Observable.of<any[]>([]);  
		  });  
		}
		
		searchClient(term: string): void {  
			this.flag = true;  
			this.searchTerms.next(term);  
		}
		
		onselectClient(BookObj) {     
			if (BookObj.bookId != 0) {  
			  this.bookName = BookObj.bookName;       
			  this.flag = false;  
			}  
			else {  
			  return false;  
			}  
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
