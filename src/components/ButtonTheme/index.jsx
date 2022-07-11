import React, { useState } from "react";

import { getTheme, onChangeTheme } from "../../functions/change_theme";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const ButtonTheme = () => {

    const [currentTheme, setCurrentTheme] = useState(getTheme());

    window.addEventListener('storage', () => setCurrentTheme(getTheme()));

    return(
        <div className="flex aling-center">
            <span className={"font-menuFont text-xl font-normal pr-2"}>{currentTheme == 'light' ? "dark" : 'light'}</span>
            <button onClick={() => onChangeTheme()}>
                {currentTheme == 'light' 
                    ? <FontAwesomeIcon icon={faMoon} />
                    : <FontAwesomeIcon icon={faSun} />
                }
            </button>
        </div>
    )
}

export default ButtonTheme;