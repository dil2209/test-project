import React from 'react'
import './dashboard.css'
import groupImage from '../../images/Group12.png'
import total from '../../images/Customers.png'

export default function Dashboard() {
  return (
    <div className='row'>
      <div className='col-md-7 p-2 '>
        <div className='chart-one pt-2'>
        <div className='row mt-2'>
          <div className='col-md-4  pt-2'>
            <h5>Yillik statistika</h5>
          </div>
          <div className='col-md-4  pt-2'></div>
            <div className='col-md-3 text-center pt-2 selectbox'>
            <div> Yillar &nbsp; &nbsp; &nbsp; 
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 1L7 7L13 1" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </div>
          </div>
        </div>
        <div className='chart1'>
          <div className='mx-2'>
          <div className='january one'></div>
          <p className='month'>Jan</p>
          </div>
          <div className=' mx-2'>
          <div className='february one'></div>
          <p className='month'>Feb</p>
          </div>
          <div className='mx-2'>
          <div className='march one'></div>
          <p className='month'>Mar</p>
          </div>
          <div className='mx-2'>
          <div className='april one'></div>
          <p className='month'>Apr</p>
          </div>
          <div className=' mx-2'>
          <div className='may one'></div>
          <p className='month'>May</p>
          </div>
          <div className='mx-2'>
          <div className='june one'></div>
          <p className='month'>Jun</p>
          </div>
          <div className=' mx-2'>
          <div className='july one'></div>
          <p className='month'>Jul</p>
          </div>
          <div className=' mx-2'>
            <img className='groupImage' src={groupImage} alt='group'/>
          <div className='august one'></div>
          <p className='month'>Aug</p>
          </div>
          <div className=' mx-2'>
          <div className='september one'></div>
          <p className='month'>Sep</p>
          </div>
          <div className=' mx-2'>
          <div className='october one'></div>
          <p className='month'>Oct</p>
          </div>
          <div className=' mx-2'>
          <div className='november one'></div>
          <p className='month'>Nov</p>
          </div>
          <div className='mx-2'>
          <div className='december one'></div>
          <p className='month'>Dec</p>
          </div>
        </div>
        </div>
       </div>
      <div className='col-md-3'>
        <img className='total' src={total} alt='total'/>
      </div>
    </div>
  )
}
