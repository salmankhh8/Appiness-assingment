import React, { useContext } from 'react'
import Empheader from './empheader'
import EmpContext from './Home'

const Empdetails = ({id,name, age, gender, email, phoneNo }) => {
    return (
        <div className='emp-table'>
        <td className='table-cell'>
            <tr>{id}</tr>
        </td>
        <td className='table-cell'>
            <tr>{name}</tr>
        </td>  
        <td className='table-cell'>
            <tr>{age}</tr>
        </td> 
         <td className='table-cell'>
            <tr>{gender}</tr>
        </td>
        <td className='table-cell'>
            <tr>{email}</tr>
        </td>  
        <td className='table-cell'>
            <tr>{phoneNo}</tr>
        </td>
        
         
        </div>
    )
}

export default Empdetails
