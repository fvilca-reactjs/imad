import React from 'react'
import ButtonVerMas from './ButtonVerMas'
import '../scss/componentes/card.scss'

export default function Card({ icon, title, children }) {
  return (
    <div className='card-container'>
      <img className='icon-card' src={icon} alt='icon'></img>
      <div className='card-title'>{title}</div>
      <div className='card-text'>{children}</div>
      <div className="space"></div>
      <div className="vermas-container">
        <ButtonVerMas />
      </div>

    </div>
  )
}
