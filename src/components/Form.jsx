import React from 'react'

import '../scss/componentes/form.scss'
import BlackButton from './BlackButton';

function Input({ name, type, placeholder }) {
    return (
        <>
            <input
                id={name}
                autocomplete="false"
                type={type}
                placeholder={placeholder}
                className="form__field"
                name="name"
                autoFocus
                autoCorrect="false"
                spellcheck="false"
                autoComplete='false'
                required
            />
            <label for={name}>{name}</label>
        </>
    );
}

export default function Form({ icon, title, children }) {

    const onSubmit = () => {
        console.log("form:");
    }

    return (
        <form onSubmit={onSubmit} className="form" autoComplete='false' spellCheck='false'>
            <p className="title-form">Haznos saber como podemos ayudarte</p>

            <div className="form-group">
                <span>Nombre :</span>
                <input className="input" placeholder="" required type="text" autoCorrect='false' />
                <span className="input-border"></span>
            </div>

            <div className="form-group">
                <span>E-mail :</span>
                <input className="input" placeholder="" required type="email" autoCorrect='false' autoComplete='none' />
                <span className="input-border"></span>
            </div>

            <div className="form-group">
                <span>Celular :</span>
                <input className="input" placeholder="" required type="text" autoCorrect='false' autoComplete='none' />
                <span className="input-border"></span>
            </div>

            <div className="form-group">
                <textarea className="mensaje-textarea" placeholder="Mensaje :" required rows={4} autoCorrect='none' autoComplete='none' spellCheck='false' />
                <span className="input-border"></span>
            </div>

            <BlackButton button_title='ENVIAR MENSAJE' color='black' onClick="" />
        </form>
    )
}
