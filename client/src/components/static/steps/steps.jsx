import React from 'react';
import Truck from "./trash-truck.svg";
import Dump from "./dump.png";
import Tree from './tree.png';
import "./steps.css";

const Steps = props => {
    return ( 
        <section className="stepsContainer">
            <h2 className="StepsH">COMO FUNCIONA PARA QUEM QUER RECICLAR</h2>
            <div className="section">

                <div className="sectionCard sectionCard1">
                    <div className="face face1">
                        <div className="sectionContent">
                            <img width="100px" src={Dump} alt=""/>
                            <h3>Etapa 1</h3>
                        </div>
                    </div>
                    
                    <div className="face face2">
                        <div className="sectionContent">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi asperiores iure architecto officiis quia molestias voluptates distinctio aperiam consequatur?</p>
                            <a href="#"> ReadMore </a>
                        </div>
                    </div>
                </div>

                <div className="sectionCard sectionCard2">
                    <div className="face face1">
                        <div className="sectionContent">
                            <img width="100px" src={Truck} alt=""/>
                            <h3>Etapa 2</h3>
                        </div>
                    </div>
                    
                    <div className="face face2">
                        <div className="sectionContent">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi asperiores iure architecto officiis quia molestias voluptates distinctio aperiam consequatur?</p>
                            <a href="#"> ReadMore </a>
                        </div>
                    </div>
                </div>

                <div className="sectionCard ml-auto sectionCard3">
                    <div className="face face1">
                        <div className="sectionContent">
                            <img width="100px" src={Tree} alt=""/>
                            <h3>Etapa 3</h3>
                        </div>
                    </div>
                    
                    <div className="face face2">
                        <div className="sectionContent">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi asperiores iure architecto officiis quia molestias voluptates distinctio aperiam consequatur?</p>
                            <a href="#"> ReadMore </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
 
export default Steps;