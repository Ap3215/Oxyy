import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
