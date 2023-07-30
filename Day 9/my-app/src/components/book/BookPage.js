import React, { useState, useEffect } from 'react';
// Model imports
import { Book } from '../../models/book';

// Component imports
import BookForm from './BookForm';
import BookTable from './BookTable';

// Service imports
import BookService from '../../services/book-service';

export default function BookPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!books.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    setLoading(true);
    try {
      const books = await BookService.fetchBooks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  async function onBookCreated(title, author, isbn) {
    const book = await BookService.createBook(new Book(null, title, author, isbn));
    setBooks([...books, book]);
  }

  async function onBookDelete(bookId) {
    await BookService.deleteBook(bookId);
    setBooks(books.filter((book) => book.id.toString() !== bookId));
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Library</h1>
        <hr />

        <BookForm onBookCreated={onBookCreated} />
        <BookTable
          books={books}
          onBookDelete={onBookDelete}
        />
      </div>
    </div>
  );
}