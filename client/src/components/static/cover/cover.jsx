import React from 'react';
import style from './cover.module.css';
import Typical from 'react-typical';

const Cover = props => {
    return (
        <section className={style.container}>
            <div className={style.cover}></div>
            <div className={style.content}>
                <h2>BEM VINDO A ECOMAKERS</h2>
                <Typical
                    className={style.typical}
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Nós somos verde',
                        2000,
                        'Nós somos circulares',
                        2000,
                        'Nós somos a evolução',
                        2000,
                        'Queremos o progresso',
                        2000,
                        'Queremos garantir um futuro melhor',
                        2000
                    ]}
                />
            </div>
        </section>
    );
}
export default Cover;