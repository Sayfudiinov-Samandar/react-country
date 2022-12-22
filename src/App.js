import React, { useEffect, useState } from "react";
import { Header } from "./Comps/Header/Header";
import { Home } from "./Comps/Home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page404 from "./Comps/Error/page404";
import { Country } from "./Comps/Country/Country";

const App = () => {

  const [theme, themeStete]= useState(localStorage.getItem("theme") || "")
  const [lang, langStete]= useState(localStorage.getItem("lang") || "uz")


  useEffect(()=>{
    localStorage.setItem("theme", theme)
  },[theme])

  useEffect(()=>{
    localStorage.setItem("lang", lang)
  },[lang])

  return (
    <div className={theme}>
      <Header themeStete={themeStete} theme={theme} langStete={langStete} lang={lang}/>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home lang={lang} />
            </>
          }
        />
        <Route path="/country/:name" element={<Country lang={lang} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};
export default App;
