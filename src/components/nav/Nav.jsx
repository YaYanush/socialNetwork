import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./friends/Friends";
import Sender from "../Dialogs/Sender/Sender";
import ViewOnlineFriends from "./friends/ViewOnlineFriends";

const Nav = (props) => {

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" activeClassName={s.active}>Friends</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>

        <div className={s.friends}>
            <span>Online friends</span>
            <ViewOnlineFriends/>    
        </div>
    </nav>
}

export default Nav;