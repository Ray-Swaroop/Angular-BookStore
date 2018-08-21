import { Injectable } from '@angular/core';
import { Book } from './book';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BookService {
	private apiUrl='api/book';
	
	constructor(private http:Http) { }
	
	findAll(): Promise<Array<Book>> {
	   return this.http.get(this.apiUrl)
	   .toPromise()
	   .then(response => response.json() as Book[])
	   .catch(this.handleError);
	}
	
	findBookName(id:number):Promise<Array<Book>>{
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
	   .toPromise()
	   .then(response => response.json() as Book[])
	   .catch(this.handleError);
	}
	
	createBook(book:Book):Promise<Array<Book>>{
		const bookHeaders = new Headers({ 'Content-Type': 'application/json' });
		return this.http.post(this.apiUrl, JSON.stringify(book), { headers: bookHeaders })
		.toPromise()
		.then(response => response.json() as Book[])
		.catch(this.handleError);
   
	}
	
	deleteBookById(id:number):Promise<Array<Book>>{
		const url = `${this.apiUrl}/${id}`;
		return this.http.delete(url)
		.toPromise()
		.then(response => response.json() as Book[])
		.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<Array<any>> {
	   console.error('An error occurred', error);
	   return Promise.reject(error.message || error);
    }
}
