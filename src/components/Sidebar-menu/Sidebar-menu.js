import React, {useState, useEffect} from 'react'
import {ReactComponent as First} from '../../images/1.svg' 
import {ReactComponent as Second} from '../../images/2.svg'
import {ReactComponent as Third} from '../../images/3.svg'
import {ReactComponent as Fourth} from '../../images/4.svg'
import {ReactComponent as Fifth} from '../../images/5.svg'
import {ReactComponent as Sixth} from '../../images/6.svg'
import './Sidebar.css'
import {Link} from 'react-router-dom'


export default function SidebarMenu() {
  const [time, setTime] = useState('')
  
  function getTime(){
    let thisTime = new Date().getTime()
    setTime(thisTime)
    console.log()
  }
 
  useEffect(()=>{
   getTime()
   
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
          <div className='col-md-7 icons'><Link className='text-decoration-none text-muted' to='/oqituvchilar'><p className='text-start ms-2 linkname'>O'qituvchilar</p></Link></div>
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
     
   
    </div>
  )
}
