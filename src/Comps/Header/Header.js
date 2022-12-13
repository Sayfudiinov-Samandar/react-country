import React from "react";
import "./header.css"

const Header =()=>{
    return <>
        <header>
        <div class="container">
            <div class="header">
                <a class="header-link" href="index.html">
                    Where in the world?
                </a>
                <button class="heder-text" type="submit">
                    Dark Mode
                </button>
            </div>
        </div>
    </header>
    </>
}
export default Header;