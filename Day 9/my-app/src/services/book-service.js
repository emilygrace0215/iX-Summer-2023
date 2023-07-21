import {
    collection,
    addDoc,
    query,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
  } from 'firebase/firestore';
  
  import { db } from '../firebase/firebase';
  import { Book } from '../models/book';
  
  class BookService {
    constructor() {
      this.collection = 'books';  
    }
  
    async fetchBooks() {
      const collectionRef = collection(db, this.collection);
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
  
      const books = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const book = new Book(doc.id, data.title, data.author, data.isbn);
        books.push(book);
      });
  
      return books;
    }
  
    async createBook(task) {
      const collectionRef = collection(db, this.collection);
  
      const docRef = await addDoc(collectionRef, {
        name: task.name,
        complete: task.complete,
      });
  
      task.id = docRef.id;
      return task;
    }
  
    async updateTask(task) {
      const docRef = doc(db, this.collection, task.id);
  
      await updateDoc(docRef, {
        name: task.name,
        complete: task.complete,
      });
  
      return task;
    }
  
    async deleteTask(taskId) {
      const docRef = doc(db, this.collection, taskId);
      await deleteDoc(docRef);
    }
  }
  
  const service = new TaskService();
  export default service;
  