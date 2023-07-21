import './App.css';

import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// Model imports
import { Book } from './models/book';

// Component imports
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

// Service imports
import BookService from './services/book-service';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!books.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const books = await BookService.fetchBooks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
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

export default App;