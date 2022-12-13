import React from "react";
import GermanFlag from "../../Another/Img/germany.svg.png"
import "./main.css"

const Main=()=>{
    return<>
                            <li class="col-3 p-0 hero-list-box"> 
                            <img src={GermanFlag} width="267" height="160" alt="Flag-Germany" /> 
                            <div class="box-place">
                                <h3 class="hero-list-box-title">
                                  Germany
                                </h3>
                                <p class="hero-list-box-text">
                                    <strong>
                                        Population:
                                    </strong>
                                    28,875
                                </p>
                                <p class="hero-list-box-text">
                                    <strong>
                                        Region:
                                    </strong>
                                    Europe
                                </p>
                                <p class="hero-list-box-text">
                                    <strong>
                                        Capital:
                                    </strong>
                                    Mariehamn
                                </p>
                            </div>
                        </li>
    </>
}

export default Main;