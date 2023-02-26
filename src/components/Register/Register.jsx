import React from 'react'
import './register.css'
import FormRegister from '../FormRegister/FormRegister'

export default function Register() {
  return (
    <div className='cont-register'>
        <div className='cont-form-register'>
            <FormRegister/>
        </div>
        <img src="/images/img-register.png" alt="house" className='img-register'/>
    </div>
  )
}
