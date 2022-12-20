import React, {useEffect, useState} from 'react'
import {ReactComponent as First} from '../../images/1.svg' 
import {ReactComponent as Second} from '../../images/2.svg'
import {ReactComponent as Third} from '../../images/3.svg'
import {ReactComponent as Fourth} from '../../images/4.svg'
import {ReactComponent as Fifth} from '../../images/5.svg'
import {ReactComponent as Sixth} from '../../images/6.svg'
import Sheroz from '../../images/sheroz.png'
import './Sidebar.css'
import {Link} from 'react-router-dom'


export default function SidebarMenu() {
  const [time , setTime] = useState('')
  const [newInterval, setNewInterval] = useState()

    function getThisTime(){
   
    let newOne = setInterval(()=>{
      let a = new Date()
      let hour = a.getHours()<10 ? "0" + a.getHours() : a.getHours()
      let minute = a.getMinutes()<10? '0'+ a.getMinutes() : a.getMinutes()
      let second = a.getSeconds()<10 ? '0'+ a.getSeconds() : a.getSeconds()
     setTime( hour + ':' + minute + ":" +second )
    }, 1000)
    setNewInterval(newOne)
   clearInterval(newInterval)

  }
  useEffect(()=>{
    getThisTime()
  }, [])
   return (
    <div>
         <div className='row text-muted sidebar'>
          <div className='col-md-1 ms-4 icons'><First/></div>
          <div className='col-md-7'><Link className='text-decoration-none text-muted' to='/'><p className='text-start ms-2 linkname'>Dashboard</p></Link></div>
         <div className='col-md-1 side'> > </div>
        </div>
        <div className='row text-muted  sidebar'>
          <div className='col-md-1 ms-4 icons'><Second/></div>
          <div className='col-md-7'><Link className='text-decoration-none text-muted' to='/guruhlar'><p className='text-start ms-2 linkname'>Guruhlar</p></Link></div>
          <div className='col-md-1 side'> > </div>
        </div>
        <div className='row text-muted  sidebar'>
          <div className='col-md-1 ms-4 icons'><Third/></div>
          <div className='col-md-7 icons'><Link className='text-decoration-none text-muted' to='/oqituvchilar'><p className='text-start ms-2 linkname'>O'quvchilar</p></Link></div>
          <div className='col-md-1 side'> > </div>      
        </div>
        <div className='row text-muted  sidebar'>
          <div className='col-md-1 ms-4 icons'><Fourth/></div>
          <div className='col-md-7'><Link className='text-decoration-none text-muted' to='/darsjadvali'><p className='text-start ms-2 linkname'>Dars jadvali</p></Link></div>
          <div className='col-md-1 side'> > </div>
        </div>
        <div className='row text-muted  sidebar'>
          <div className='col-md-1 ms-4 icons'><Fifth/></div>
          <div className='col-md-7'><Link className='text-decoration-none text-muted' to='/sozlamalar'><p className='text-start ms-2 linkname'>Sozlamalar</p></Link></div>
          <div className='col-md-1 side'> > </div>
        </div>
        <div className='row text-muted  sidebar'>
          <div className='col-md-1 ms-4 icons'><Sixth/></div>
          <div className='col-md-7'><Link className='text-decoration-none text-muted' to='/yordam'><p className='text-start ms-2 linkname'>Yordam</p></Link></div>
          <div className='col-md-1 side'> > </div>        
        </div>
        <span></span>
        <div className='now'>{time}</div>
        <div className='Sheroz-group'>
         <img className='sheroz' src={Sheroz} alt='Sheroz'/>
         <div className='mt-1 mx-1'>
          <h6 style={{marginBottom:'0px'}}>Turdiev Sheroz</h6>
          <p style={{fontSize:'12px', color:'lightgray'}}>Frontend o'qituvchi</p>
         </div>
        
         <div className='mt-1 mx-2'>
         <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M1 1L7 7L13 1" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
         </div>
        </div>
   
    </div>
  )
}
