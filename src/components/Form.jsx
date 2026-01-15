import React, { useState } from 'react'
import '../scss/componentes/form.scss'
import { BlackButton } from './BlackButton';
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom';

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

export default function Form({ title, link }) {
    const templateId = 'template_guboa8a'
    const serviceId = 'service_m9d8uou'

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState((!link)?'Hola, deseo información: ':'Hola, deseo información sobre: '+title );


    const sendEmail = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || phone === '' || message === '') {
            alert('Por favor llena todos los campos antes de enviarlo')
            return;
        }

        const templateParams = {
            to_name: "IMAD3D",
            from_name: name + '\n email: ' + email + "\n celular : " + phone,
            message: (link) ? message+ "\n Producto en consulta:" + link  : message
        }
        emailjs.send(serviceId, templateId, templateParams, 'xyHM0NvM1Umc_UmVu')
            .then(
                (response) => {
                    console.log('Mensaje enviado', response.status, response.text)
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage((!link)?'Hola deseo información: ':'Hola deseo información sobre: '+title );
                    alert('Mesaje enviado')
                }, (err) => { console.log('error en el servicio de envio de emails') }
            )


    }

    return (
        <form onSubmit={sendEmail} className="form" autoComplete='false' spellCheck='false'>
            <p className="title-form">{title}</p>

            <div className="form-group">
                <span>Nombre :</span>
                <input className="input" type="text" placeholder="" required autoCorrect='false' onChange={(e) => setName(e.target.value)} value={name} />
                <span className="input-border"></span>
            </div>

            <div className="form-group">
                <span>E-mail :</span>
                <input className="input" placeholder="" required type="email" autoCorrect='false' autoComplete='none' onChange={(e) => setEmail(e.target.value)} value={email} />
                <span className="input-border"></span>
            </div>

            <div className="form-group">
                <span>Celular :</span>
                <input className="input" placeholder="" required type="text" autoCorrect='false' autoComplete='none' onChange={(e) => setPhone(e.target.value)} value={phone} />
                <span className="input-border"></span>
            </div>

            <div className="form-group">
                <textarea className="mensaje-textarea" placeholder="" required rows={4} autoCorrect='none' autoComplete='none' spellCheck='false' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                <span className="input-border"></span>
            </div>

            <BlackButton button_title='ENVIAR MENSAJE' color='black' />
        </form>
    )
}
