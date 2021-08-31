import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src="http://i.imgur.com/r9QO3.png" alt="logo"/>
        </header>
    );
}

export default Header;