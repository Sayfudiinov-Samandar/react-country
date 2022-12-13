import React from "react";
import "./formInput.css"

const FormInput=()=>{
    return<>
                        <form class="form" action="https://echo.htmlacademy.ru/courses" autocomplete="off">
                            <input class="hero-input" type="search" placeholder="Search for a country…" name="search" required />
                
                            <select class="select" name="country" id="country">
                                <option>Filter by Region</option>
                                <option value="Africa">Africa</option>
                                <option value="America">America</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                            </select>
                    </form>
    </>
}

export default FormInput;