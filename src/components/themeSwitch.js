import React, {useState} from "react";
import { Icon } from "@iconify/react";
import setTheme from "../_assets/js/theme";

const ThemeSwitch = () =>{
    const [darkMode, setDarkMode] = useState(true);


    const buttons = {
        dark: <button className="btn-theme dark-mode" onClick={() => setDarkMode(true)}><Icon icon="ph:cloud-moon-fill" color="#e4e6ea" width="30" height="30" /></button>,
        light: <button className="btn-theme light-mode" onClick={() => setDarkMode(false)}><Icon icon="ph:cloud-moon-fill" color="#1d1f23" width="30" height="30" /></button>
    }
 
    return (<>
        {darkMode ? buttons.light : buttons.dark}
        {darkMode ? setTheme('darkMode') : setTheme('lightMode')}
    </>)
};


export default ThemeSwitch;