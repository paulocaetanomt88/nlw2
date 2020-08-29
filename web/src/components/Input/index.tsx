import React, { InputHTMLAttributes } from 'react';
import './styles.css';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

// Definindo um componente com as propriedades tipadas
// constante Input é do tipo React.FC(FunctionComponent) e passamos um parâmetro genérico falando quais são as propriedades
// que o meu input vai poder receber
// Funcionalidade Rest Operator pega todas as propriedades que sobrarem e coloca dentro do objeto chamado rest (além de label e name que já foram selecionadas)
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
            <div className="input-block">
                <label htmlFor={name}>{label}</label>
                <input type="text" id={name} {...rest} />
            </div>
    );
}

export default Input;