export class Book {
    constructor(id, title, author, isbn) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  
    static fromJSON(json) {
      return new Book(json.id, json.title, json.isbn, json.author);
    }
  }