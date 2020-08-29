import React, { TextareaHTMLAttributes } from 'react';
import './styles.css';


interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

// Definindo um componente com as propriedades tipadas
// constante Textarea é do tipo React.FC(FunctionComponent) e passamos um parâmetro genérico falando quais são as propriedades
// que o meu Textarea vai poder receber
// Funcionalidade Rest Operator pega todas as propriedades que sobrarem e coloca dentro do objeto chamado rest (além de label e name que já foram selecionadas)
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
            <div className="textarea-block">
                <label htmlFor={name}>{label}</label>
                <textarea id={name} {...rest} />
            </div>
    );
}

export default Textarea;