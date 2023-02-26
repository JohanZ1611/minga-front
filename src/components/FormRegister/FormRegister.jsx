import React from 'react'
import './formRegister.css'
import {useRef} from 'react'
import axios from 'axios'
import FormFields from '../FormFields/FormFields'

export default function FormRegister() {
    
    let formRegis = useRef()

    async function heandleSubmit(event){

        event.preventDefault()

        let datosinputs = []
        

        Object.values(formRegis.current).forEach(inputF =>{
            if(inputF.name){
                datosinputs.push(inputF)
            }
        })
        datosinputs.pop()
        let data = {
            [datosinputs[0].name]:datosinputs[0].value,
            [datosinputs[1].name]:datosinputs[1].value,
            [datosinputs[2].name]:datosinputs[2].value,
        }

        let url = 'http://localhost:8080/users'

        if (datosinputs[2].value === datosinputs[3].value) {
            try{
                await axios.post(url,data)
                formRegis.current.reset()
                alert("Usuario creado con Éxito")
            }catch(error){
                console.log(error)
            }
        }else{
            alert("No coincide la contraseña")
        }

    }

  return (
    <div className='form-register'>
        <div className='cont-info-form'>
            <img src="/images/Logo-form.png" alt="logo" className='img-logo-form' />
            <h2 className='title-form'>Welcome!</h2>
            <p className='text-form'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
        </div>
        <form onSubmit={heandleSubmit} ref={formRegis}>
            <FormFields legend='Name' type='text' id='name' name='name' src='/images/profile.svg' alt="profil" />
            <FormFields legend='Email' type='email' id='email' name='email' src='/images/@.svg' alt="@" />
            <FormFields legend='Password' type='password' id='password' name='password' src='/images/lock1.svg' alt="lock" />
            <FormFields legend='confirm-password' type='password' id='con-password' name='con-password' src='/images/lock1.svg' alt="lock" />
            <div className='cont-check'>
                <input type="checkbox" name="send-notifi" id="send-notifi" className='input-check'required/>
                <label htmlFor="send-notifi" className='label-check'>Send notification to my email</label>
            </div>
            <div className='cont-btn-submit'>
                <input type="submit" value="Sing up" className='input-submit'/>
                <button type='button' className='btn-google'>
                    <img src="/images/Google.png" alt="google" className='img-google' />
                    <p>Sign in with Google</p>
                </button>
            </div>
            <div className='cont-info-form-final'>
                <p className='text-fin-form'>Already have an account? <span className='color-info-final'>Log in</span> </p>
                <p className='text-fin-form'>Go back to <span className='color-info-final'>home page</span></p>
            </div>
        </form>
    </div>
  )
}
