import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderProps = {
    isAuth: boolean;
    login: string | null;
}

const Header: React.FC<HeaderProps> = ({isAuth, login}): JSX.Element => {
    return (
        <header className={s.header}><img
            className={s.img}
            src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"
            alt=""/>
            <div className={s.loginBlock}>
                {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header