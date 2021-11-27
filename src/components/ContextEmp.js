import React,{useContext} from 'react'
import { logout } from '../features/userSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Empdetails from './empdetails'
import {employee} from './employee'
import EmpContext from './Home'
import Empheader from './empheader'


const Empbody = () => {
 const Employee = useContext(EmpContext)

    const dispatch = useDispatch()// inport data to some reducer
    const [items, setItems] = useState(employee)
    const handleLogout=(e)=>{
        e.preventDefault()
        dispatch(logout())
    }
    return (
        <div>
              employee details 

        {
            items.map((curItem)=> {
                return<Empdetails key={curItem.id}{...curItem}/>

            })
        }
        <button className='button' onClick={(e)=>handleLogout(e)} >logout</button>
        </div>
    )
}

export default Empbody
