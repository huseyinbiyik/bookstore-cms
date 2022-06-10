import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Books from './components/Books';
import Header from './components/Header';
import Categories from './components/Categories';
import AddBook from './components/AddBook';

function App() {
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
