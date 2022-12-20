import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as First} from '../../images/1.svg' 
import {ReactComponent as Second} from '../../images/2.svg'
import {ReactComponent as Third} from '../../images/3.svg'
import {ReactComponent as Fourth} from '../../images/4.svg'
import {ReactComponent as Fifth} from '../../images/5.svg'
import {ReactComponent as Sixth} from '../../images/6.svg'
import Sheroz from '../../images/sheroz.png'
import './Sidebar.css'

export default function SmallSideBar() {
  return (
    <div>
      <div className='my-2'>
      <Link to='/'>
       <First/>
      </Link>
      </div>
      <div className='my-2'>
      <Link className='text-decoration-none' to='/guruhlar'>
        <Second/>
      </Link>
      </div>
      <div className='my-2'>
     <Link className='text-decoration-none' to='/oqituvchilar'> 
        <Third/>
      </Link>
      </div>
      <div className='my-2'>
     <Link className='text-decoration-none' to='/darsjadvali'>
      <Fourth/>
    </Link>
    </div>
      <div className='my-2'>
      <Link className='text-decoration-none'  to='/sozlamalar'>
      <Fifth/>
    </Link>
    </div>
      <div className='my-2'>
    <Link className='text-decoration-none' to='/yordam'>
        <Sixth/>
    </Link>
    </div>
    <div className='Sheroz-group-small'>
    <img className='sheroz' src={Sheroz} alt='Sheroz'/>
    </div>
    </div>
  )
}
