import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.png';
import './styles.css';




interface PageHeaderProps {
    title: string;
    description?: string; // o '?' indica que é opcional
}

/*
* A propriedade title não existe, então para declarar as tipagens das propriedades
* em React, a function PageHeader será transformada em uma constante
* function PageHeader() {  -->  const PageHeader = () => {
* Para o componente PageHeader saber que precisa usar a tipagem, é usado o React Functional Components (FC)
* que recebe um parâmetro entre <> 
*/
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={ backIcon } alt="Voltar" />
                </Link>
                <img src={ logoImg } alt="STUDY" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }

                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;