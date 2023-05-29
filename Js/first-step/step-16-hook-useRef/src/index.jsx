import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { render } from "react-dom";

function App(){

    const input = useRef(null)
    const compteur = useRef({count : 0})

    const handleButtonClick = function () {
        compteur.current.count++;
        console.log(compteur)
    };

    return(
        <div>
            <input type="text" ref={input}/>
            <button onClick={handleButtonClick}>Récuper la valeur</button>
        </div>
    );
};

render(
    <App />,
    document.getElementById("app")
);

