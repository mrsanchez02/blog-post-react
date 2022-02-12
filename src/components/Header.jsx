import React from 'react'
import { Link } from "react-router-dom";
import style from './header.module.css';

const Header = () => {
  return (
        <ul className={style.menu}>
            <li className={style.menu__item}>
                <Link to={'/'}>Home</Link>
            </li>
            <li className={style.menu__item}>
                <Link to={'/parallax-post'}>Parallax</Link>
            </li>
            <li className={style.menu__item}>
                <Link to={'/sticky-post'}>Sticky</Link>
            </li>
        </ul>
  )
}

export default Header