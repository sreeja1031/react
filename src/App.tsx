import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import BookCard from './_components/organisms/BookCard';
// import Form from './Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookCard />} />
        {/* <Route path="form" element={<Form />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
