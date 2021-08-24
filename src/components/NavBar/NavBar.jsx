import  s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

export const NavBar=()=>{
  return (
    <nav className={s.nav}>
      <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
      <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink></div>
      <div className={s.item}><a >News</a></div>
      <div className={s.item}><a>Music</a></div>
      <div className={s.item}><a>Settings</a></div>
    </nav>
  )
}