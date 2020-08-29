import React, { SelectHTMLAttributes } from 'react';
import './styles.css';


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

// Definindo um componente com as propriedades tipadas
// constante Select é do tipo React.FC(FunctionComponent) e passamos um parâmetro genérico falando quais são as propriedades
// que o meu Select vai poder receber
// Funcionalidade Rest Operator pega todas as propriedades que sobrarem e coloca dentro do objeto chamado rest (além de label e name que já foram selecionadas)
const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
            <div className="select-block">
                <label htmlFor={name}>{label}</label>
                <select value="" id={name} {...rest}>
                    <option value="" disabled hidden>Selecione uma opção</option>

                    {options.map(option => {
                        return <option key={option.value} value={option.value}> {option.label} </option>
                    })}
                </select>
            </div>
    );
}

export default Select;