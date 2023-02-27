import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default function IndexLayout(props) {
  return (
    <div>
         <NavBar/>
         {props.children}
    </div>
  )
}
