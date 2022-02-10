/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./_components/pages/LandingPage";
import BookDetailsPage from "./_components/pages/BookDetailsPage";
import ExploreMenu from "./_components/organisms/Explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="bookDetails" element={<BookDetailsPage />} />
        <Route path="explore" element={<ExploreMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
