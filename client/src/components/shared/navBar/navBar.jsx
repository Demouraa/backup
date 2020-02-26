import React from 'react';
import style from './navBar.module.css';
import { useState, useEffect } from 'react';
import cx from 'classnames';

const NavBar = props => {
    const [scrollDepth, setScrollDepth] = useState(0);
    const [navBar, setNavBar] = useState(false);
    const [check, setCheck] = useState(false);

    let determineUserScrollDepth = () => {
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        setScrollDepth(scrolled);

        if(scrolled > 40){
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }

    const handleChange = e => {
        setCheck(e.target.checked);
        console.log(check)
    }

    useEffect( () => window.addEventListener('scroll', determineUserScrollDepth) );

    return ( 
        <header className={ cx(style.navBarContainer, {[style.onRow]: props.navStatus}, {[style.onRow]: check}, {[style.onRow]: navBar}) }>
            <nav className={ cx(style.myNav, {[style.myNavRow]: props.navStatus}, {[style.myNavRow]: check}, {[style.myNavRow]: navBar}) }>
                
                <div className={style.logoContainer}>
                    ECOMAKERS
                </div>

                <input className={cx(style.position, style.responsiveB, {[style.checkBoxMargin]: props.navStatus}, {[style.positionMargin]: navBar === false}, {[style.checkBoxMargin]: check})}
                onClick={handleChange} type="checkbox" id="res-menu"/>

                <div className={cx(style.lineContainer, style.responsiveB, {[style.rightM]: check})}>
                    <div className={style.line}></div>
                    <div className={style.line}></div>
                </div>

                <div className={style.navItems}>
                    <a href="#">HOME</a>
                    <a href="#">PARA EMPRESAS</a>
                    <a href="#">PARA COLETORES</a>
                    <a href="#">ENTRAR</a>
                    <a className="btn btn-success" href="#">CADASTRAR</a>
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;