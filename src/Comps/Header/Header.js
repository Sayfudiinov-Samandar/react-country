import React from "react";
import "./header.css"

export const Header =()=>{
    return <>
        <header>
        <div className="container">
            <div className="header">
                <a className="header-link" href="index.html">
                    Where in the world?
                </a>
                <button className="heder-text" type="submit">
                    Dark Mode
                </button>
            </div>
        </div>
    </header>
    </>
}
 