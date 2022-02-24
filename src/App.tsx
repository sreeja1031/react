/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./_components/organisms/Header";
import LandingPage from "./_components/pages/LandingPage";
import BookDetailsPage from "./_components/pages/BookDetailsPage";
import ExploreMenu from "./_components/organisms/Explore";
import EntrePage from "./_components/pages/EntrePage";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const onToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Router>
      <Header onClickExplore={onToggleDrawer} isDrawerOpen={isDrawerOpen} />
      {isDrawerOpen ? <ExploreMenu toggleDrawer={onToggleDrawer} /> : null}{" "}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="bookDetails" element={<BookDetailsPage />} />
        <Route path="entrepreneurship" element={<EntrePage />} />
      </Routes>
    </Router>
  );
}

export default App;
