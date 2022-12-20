import React, {useEffect, useState} from 'react'
import './oqituvchi.css'
import OqituvchiInfo from './OqituvchiInfo'
import {connect} from 'react-redux'
import {changeActive} from '../../store/OquvchiSlice'



 function Oqituvchilar({oquvchi, changeActive}){
    const [oquvchilar, setOquvchilar] = useState([])
    const [oquvchiOne, setOquvchiOne] = useState([])
    function changeThisActive(id){
        changeActive(id)
    }
    function searchOquvchi(e){
        let search = e.target.value
        let newList =  oquvchiOne.filter(item => item.fio.includes(search) || item.guruh.includes(search) || item.yonalish.includes(search))      
        setOquvchilar(newList)
      }
    useEffect(()=>{
    setOquvchiOne(oquvchi)
    setOquvchilar(oquvchi)
    console.log(oquvchi)
   },[])
    useEffect(()=>{
        setOquvchiOne(oquvchi)
        setOquvchilar(oquvchi)
    },[oquvchi])
  return (   
    <div>
        <OqituvchiInfo/>
        <br/>
    <div className="table-div">
        <div className="table-header">
            <div className="table-header-item">
                <p className="title">
                    Hamma O'quvchilar
                </p>
                <span className="title-sub-text">
                 Faol o'quvchilar
             </span>
            </div>
            <div className="table-header-item">
                <div className="table-header-sub-flex">
                    <div className="search">
                        <div className="search-icon">
                            <svg width="18" height="18" viewBox="0 0 27 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.348 19C16.9991 19 20.7695 15.4183 20.7695 11C20.7695 6.58172 16.9991 3 12.348 3C7.69694 3 3.92651 6.58172 3.92651 11C3.92651 15.4183 7.69694 19 12.348 19Z"
                                      stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.8749 21L18.2957 16.65" stroke="#7E7E7E" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="search-input">
                            <input type="text" placeholder="Qidiruv" onChange={(e)=>searchOquvchi(e)}/>
                        </div>
                    </div>
                </div>
                <div className="table-header-sub-flex">
                    <div className="search">
                        <div className="filter">
                            <label className="filter-label">Short Status : </label>
                            <select>
                                <option value="Faol">Faol</option>

                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="table-data">
            <div className="table-data-header pe-3">
                <div className="custom-th">F.I.O</div>
                <div className="custom-th">Yo'nalish</div>
                <div className="custom-th">Telefon nomer</div>
                <div className="custom-th">To'lov</div>
                <div className="custom-th">Guruh</div>
                <div className="custom-th">Status</div>
            </div>
            <hr/>
            <div className="table-data-elements px-3">
            {oquvchilar? oquvchilar.map((item, index)=>{
                return (
                    <div className="custom-row" key={index}>
                     <div>{item.fio}</div>
                     <div>{item.yonalish}</div>
                     <div>{item.tel}</div>
                     <div>{item.tolov}</div>
                     <div>{item.guruh}</div>
                     <div className="status">
                        {item.active ? 
                        <div className="status-div success" onClick={()=>changeThisActive(index)}>
                           <p>Active</p>
                        </div> 
                        : <div className="status-div danger" onClick={()=>changeThisActive(index)}>
                            <p>Inactive</p>
                        </div> }
                        
                    </div>
                    <hr />
                </div>
            )
            }) : " "}
        
               
                
                </div>
            <div className="pagination">
                <div className="pag-div"><p>&#60;</p></div>
                <div className="pag-div"><p>1</p></div>
                <div className="pag-div"><p>2</p></div>
                <div className="pag-div"><p>3</p></div>
                <div className="pag-div"><p>4</p></div>
                <div className="">...</div>
                <div className="pag-div"><p>40</p></div>
                <div className="pag-div"><p>&#62;</p></div>
            </div>

        </div>
    </div>
</div>
  )
}
function mapStateToProps (state){
 return {oquvchi: state.oquvchiReducer.oquvchi}
}
function mapDispatchToProps(dispatch){
return {
    changeActive:(id)=>{dispatch(changeActive(id))}} 
}
export default connect(mapStateToProps, mapDispatchToProps) (Oqituvchilar)