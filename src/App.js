import './App.css';
import {useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom";
import SidebarMenu from './components/Sidebar-menu/Sidebar-menu';
import SmallSidebarMenu from './components/Sidebar-menu/SmallSideBar'
import Dashboard from './components/Dashboard/Dashboard';
import Sozlamalar from './components/Sozlamalar';
import Yordam from './components/Yordam';
import Oqituvchilar from './components/Oqituvchilar/Oqituvchilar'
import Guruhlar from './components/Guruhlar/Guruhlar'
import Darsjadvali from './components/DarsJadvali';
import poisk from './images/Group36635.png';
import mainImage from './images/group1.png';




function App({oquvchi}) {
  const [menuHidden, setMenuHidden] = useState(false)
 

 
  return (
    <div className="App">
     <div className='row'>
      {menuHidden?
      <div className='col-md-1'>
       <img  className='my-4 point' onClick={(prev)=>setMenuHidden(prev=>!prev)} src={mainImage} alt='dashboard'/>
        <SmallSidebarMenu></SmallSidebarMenu>
      </div> :
      <div className='col-md-2'>
      <h3 className='my-4 point' onClick={(prev)=>setMenuHidden(prev=>!prev)}><img src={mainImage} alt='dashboard'/><span>Dashboard</span></h3>
        <SidebarMenu></SidebarMenu>
      </div>}
       <div className='col-md-10 main'>
        <div className='row'>
          <div className='col-md-3 mt-4'>
          <h3>Salom, Sheroz!</h3>
           </div>
           <div className='col-md-2 offset-3 mt-4'>
            <img src={poisk} alt='group'/>
           </div>
           <div className='col-md-3 mt-4'>
            <div className='border border-secondary rounded-pill'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
           <input className='input-poisk' type='text' placeholder='Qidiruv'/>
           </div>
           </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
           <Routes>
             <Route path='' element={<Dashboard/>}/>
             <Route path='/guruhlar' element={<Guruhlar/>}/>
             <Route path='/oqituvchilar' element={<Oqituvchilar/>}/>
             <Route path='/darsjadvali' element={<Darsjadvali/>}/>
             <Route path='/Sozlamalar' element={<Sozlamalar/>}/>
             <Route path='/yordam' element={<Yordam/>}/>
           </Routes>
          </div>
        </div>
        
      </div>
     </div>
    </div>
  );
}


export default App;
