import React from 'react'
import './suscribFooter.css'
import { useRef } from 'react'

export default function SuscribFooter() {
    let emailFooter = useRef()
    let formFooter = useRef()

  function heandleSubmitFooter(event){
    event.preventDefault()

    alert('Su correo '+ emailFooter.current.value + ' a sido suscrito con Éxito')
    formFooter.current.reset()

  }
  return (
    <div className='cont-suscribe'>
      <h2 className='txt-footer'>Suscribe</h2>
      <form className='form-footer' onSubmit={heandleSubmitFooter} ref={formFooter}>
        <input ref={emailFooter} type="email" name="email" id="email"  placeholder='Enter your Email' required className='input-footer'/>
        <input type="submit" value="Suscribe Now" className='submit-footer'/>
      </form>
    </div>
  )
}
