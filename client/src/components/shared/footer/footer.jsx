import React from 'react';
import style from './footer.module.css';

const Footer = (props) => {
    return ( 
        <footer className={style.FContainer}>
            <div className={style.footer}>
                <div className={style.FColumn}>
                    <h3>Ecomakers</h3>
                    <a href="#">Sobre</a>
                    <a href="#">Blog</a>
                    <a href="#">Termos de uso</a>
                </div>

                <div className={style.FColumn}>
                    <h3>Para Empresas</h3>
                    <a href="#">Funcionamento</a>
                    <a href="#">História de Sucesso</a>
                    <a href="#">Duvidas</a>
                </div>

                <div className={style.FColumn}>
                    <h3>Para Empresas</h3>
                    <a href="#">Funcionamento</a>
                    <a href="#">História de Sucesso</a>
                    <a href="#">Duvidas</a>
                </div>

                <div className={style.FContato}>
                    <h3>Contato</h3>
                    <p>(11)9 9469-0077</p>
                    <p>atendimento@ecomakers.com.br</p>
                    <p>Av. Paulista, 1374 - Bela Vista</p>
                </div>
            </div>
            <div className={style.copyright}>
                <p>© Copyright Ecomakers 2020</p>
            </div>
        </footer>
    );
}
 
export default Footer;