import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Books from './components/Books';
import Header from './components/Header';
import Categories from './components/Categories';
import AddBook from './components/AddBook';
import { fetchBook } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBook()), []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <AddBook />
    </BrowserRouter>
  );
}

export default App;
