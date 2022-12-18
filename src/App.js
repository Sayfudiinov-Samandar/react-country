import React, { useEffect, useState } from "react";
import { Header } from "./Comps/Header/Header";
import { Home } from "./Comps/Home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page404 from "./Comps/Error/page404";
import { Country } from "./Comps/Country/Country";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/country/:name" element={<Country />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
export default App;
