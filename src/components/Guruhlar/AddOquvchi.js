import React from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { addOquvchi } from '../../store/OquvchiSlice'
import {connect} from 'react-redux'

 function AddOquvchi({isOpen, toggle, addNewOne}) {
    function addNewOquvchi(e){
        e.preventDefault()
        let newStudent = {
        'fio': e.target[0].value,
        'yonalish':e.target[1].value,
        'tel':e.target[2].value,
        'tolov':e.target[3].value,
        'guruh':e.target[4].value,
        'active': false}
        console.log(newStudent)
        addNewOne(newStudent)
        toggle()
        
    }
  return (
    <div>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
             Yangi o'quvchi
            </ModalHeader>
            <ModalBody>
                <form className='form'id='newStudent' type='submit' onSubmit={(e)=>addNewOquvchi(e)}>
                FIO
                <input className='form-control' type='text'/>
                Yo'nalish 
                <input className='form-control' type='text'/>
                 Telefon
                <input className='form-control' type='text'/>
                Email
                <input className='form-control' type='email'/>
                Guruh
                <input className='form-control' type='text'/>           
                </form>
            </ModalBody>
            <ModalFooter>
          <button className='btn btn-success' type='submit' form ='newStudent'>Saqlash</button>
          <button className='btn btn-danger' onClick={toggle}>Ortga</button>
            </ModalFooter>
        </Modal>
    </div>
  )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addNewOne:(newOne)=>dispatch(addOquvchi(newOne)) } 
    }
export default connect(null, mapDispatchToProps) (AddOquvchi)