import React from 'react'
import './formFields.css'

export default function FormFields(props) {
  return (
    <fieldset className='cont-input'>
        <legend className='title-input'>{props.legend}</legend>
        <input  type={props.type} id={props.id} name={props.name} className='input-register'required/>
        <img src={props.src} alt={props.alt} className='img-input' />
    </fieldset>
  )
}
