import React from "react";
import Main from "./Comps/Main/Main"
import Header from "./Comps/Header/Header"
import FormInput from "./Comps/MainForm/FormInput"
import "./App.css"

const App=()=>{
    return <>
        <Header />
        <main>
            <section className="hero">
                <div className="container">
                    <div className="hero-father-box">
                            <FormInput />
                        <ul className="row hero-list">
                        <Main />
                            <Main />
                            <Main />
                            <Main />
                            <Main />
                            <Main />
                            <Main />
                            <Main />
                        </ul>
                    </div>
                </div>
            </section>

        </main>
    </>
}

export default App;