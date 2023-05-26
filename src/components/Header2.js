import React from 'react';
import "../styles/App.css"
import {ReactComponent as Logo} from '../images/Logo.svg';

export default function Header() {
return (
  <header className="header">
    <div className="head_el1">
        <a className="headerlink" href="/">
            <Logo className="headerLogo" width="50px" height="40px"/>
            <span>TRAVELATOR</span>
        </a>
    </div>
  </header>
);
}