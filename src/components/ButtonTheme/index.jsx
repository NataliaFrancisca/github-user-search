import React, { useState, useEffect } from "react";

import {getTheme, onChangeTheme} from "../../functions/ChangeTheme";

const ButtonTheme = () => {

    const [currentTheme, setCurrentTheme] = useState(getTheme());

    window.addEventListener('storage', () => setCurrentTheme(getTheme()));

    return(
        <div className="flex aling-center">
            <span className={"font-menuFont text-xl font-normal pr-2"}>{currentTheme == 'light' ? "dark" : 'light'}</span>
            <button onClick={() => onChangeTheme()}>
                {currentTheme == 'light' 
                    ? <span className="material-symbols-outlined font-semibold">dark_mode</span> 
                    : <span className="material-symbols-outlined font-semibold">light_mode</span> 
                  
                }
            </button>
        </div>
    )
}

export default ButtonTheme;