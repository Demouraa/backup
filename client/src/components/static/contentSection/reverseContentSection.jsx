import React from 'react';
import style from './contentSection.module.css';

const ReverseContentSection = (props) => {
    return ( 
        <div className={style.CSContainer}>
            <div className={style.CSContent}>
                <h2>Somos Agentes da Economia Circular!!!</h2>
                <p>Economia Circular é um conceito estratégico que assenta na redução, reutilização, recuperação e reciclagem de materiais e energia. Substituindo o conceito de fim-de-vida da economia linear, por novos fluxos circulares de reutilização, restauração e  renovação. Nós da Ecomakers temos como meta reaproveitar todo residuo eletrônico feito no Brasil, o segundo maior produtor de lixo eletrôncio das américas.
                </p>
                <button type="button" className="btn btn-success">QUERO RECICLAR</button>
            </div>
            <div className={style.CSImage}>
                <img src={props.image} alt=""/>
            </div>
        </div>
    );
}
 
export default ReverseContentSection;