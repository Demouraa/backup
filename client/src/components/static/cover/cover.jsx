import React from 'react';
import style from './cover.module.css';
import Typical from 'react-typical';

const Cover = props => {
    return (
        <section className={style.container}>
            <div className={style.cover}></div>
            <div className={style.content}>
                <h2>BEM VINDO A ECOMAKERS</h2>
                <h3>Somos
                    <Typical
                        className={style.typical}
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            ' verde',
                            2000,
                            ' circulares',
                            2000,
                            ' evolução',
                            2000,
                            ' sustentaveis',
                            2000
                        ]}
                    />
                </h3>
            </div>
        </section>
    );
}
export default Cover;