import React, { useState, useEffect } from 'react';
import Spinner from '../common/Spinner';
import { Book } from '../../models/book';

export default function BookForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [loading, setLoading] = useState(false);

  // Call a React hook that runs a function anytime a given variable/object changes
 /* useEffect(() => {
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setIsbn(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]); */

  async function onBookFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    setLoading(true);

    let book = new Book(title, author, isbn);
    await props.onBookCreated(book);
    setLoading(false);

    clearInputs();
  }

  function isValid() {
    return title !== '' && (author !== '') & (isbn !== '');
  }

  function clearInputs() {
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  return (
    <div>
      <h1>Library Books:</h1>

      <form id="form" onSubmit={onBookFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            placeholder="Enter Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <button className="btn btn-outline-secondary" type="submit">
            {loading ? <Spinner extraClass="change-size" /> : '+'}
          </button>
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            placeholder="Enter Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">ISBN</label>
          <input
            id="isbn-input"
            type="text"
            className="form-control"
            placeholder="Enter ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          ></input>
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.bookToEdit ? 'Update Book' : 'Add Book'}
          </button>
        </div>
      </form>
    </div>
  );
}