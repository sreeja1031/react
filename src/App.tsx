/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookCard from "./_components/organisms/BookCard";
import Form from "./Form";
import PostList from "./PostList";
import { Counter } from "./_components/reduxExample/Counter";
import TodoApp from "./_components/contextApi/Todos";
import FooterComponent from "./_components/organisms/Footer";
import LandingPage from "./_components/pages/LandingPage";
import BookDetailsPage from "./_components/pages/BookDetailsPage";
import ExploreMenu from "./_components/organisms/Explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="form" element={<Form />} />
        <Route path="counter" element={<Counter />} />
        <Route path="todo" element={<TodoApp />} />
        <Route path="footer" element={<FooterComponent />} />
        <Route path="bookDetails" element={<BookDetailsPage />} />
        <Route path="explore" element={<ExploreMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
