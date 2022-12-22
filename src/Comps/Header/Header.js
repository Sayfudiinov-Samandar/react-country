import React from "react";
import "./header.css"
import { Lang } from "../../lang/Lang";

export const Header =({themeStete,theme ,lang, langStete})=>{


return <>
        <header>
        <div className="container">
            <div className="header">
                <a className="header-link" href="index.html">
                    {Lang[lang].logo}
                </a>

                <button className="heder-text" type="button" onClick={(e) =>{
                    
                    if (theme==="theme-dark bg-dark") {
                        themeStete("")
                    }else{
                        themeStete("theme-dark bg-dark")
                    }

                    }}>
                   {Lang[lang].themeDark}
                </button>

                <select className="lang-select" onChange={(e)=>{
                    langStete(e.target.value)
                }} defaultValue={lang}>
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
            </div>
        </div>
    </header>
    </>
}
 