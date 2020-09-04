import React from 'react';
import '../pages/Home/style.css'
import Button from './Button'


const MenuHome = () => {

    return (
    <>
        <ul className="menu">
        <li className="item"><a className="link">Cadastrar Cliente</a></li>
        <li className="item"><a  className="link">Agendar horário</a></li>
        <li className="item"><a  className="link">Realizar Venda</a></li>
        <li className="item"><a  className="link">Contabilizar Vendas</a></li>
        <li className="item"><a  className="link">Verificar Agenda</a></li>
        </ul>

        
    </>
    )
    }
    
    export default MenuHome