export class Book{
	bookId:number;
	bookName:string;
	price:number;
	author:string;
	
	constructor(bookId:number,bookName:string,price:number,author:string){
		this.bookId=bookId;
		this.bookName=bookName;
		this.price=price;
		this.author=author;
	}
}
