import React from 'react';
import style from './navBar.module.css';
import { useState, useEffect } from 'react';
import cx from 'classnames';

const NavBar = props => {
    const [scrollDepth, setScrollDepth] = useState(0);
    const [navBar, setNavBar] = useState(false);

    let determineUserScrollDepth = () => {
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        setScrollDepth(scrolled);

        if(scrolled > 100){
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }

    useEffect( () => window.addEventListener('scroll', determineUserScrollDepth) );

    return ( 
        <header className={ cx(style.navBarContainer, {[style.onRow]: navBar}) }>
            <nav className={ cx(style.myNav, {[style.myNavRow]: navBar}) }>
                
                <div className={style.logoContainer}>
                    Ecomakers
                </div>

                <div className={style.navItems}>
                    <a href="#">HOME</a>
                    <a href="#">PARA EMPRESAS</a>
                    <a href="#">PARA COLETORES</a>
                    <a href="#">Entrar</a>
                    <a className="btn btn-success" href="#">Cadastrar</a>
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;