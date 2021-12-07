import React from 'react'
import { Link } from 'react-router-dom'

export default function Account({acc, edit, deleteAcc}) {

    const allBtns = edit ? (
        <>
            <td><Link to={'/edit/' + acc.id} className='btn btn-info'>Edit</Link></td>
            <td><button onClick={()=>{deleteAcc(acc.id)}} className='btn btn-danger'>Delete</button></td>
        </>
    ) : null

    return (

        <tr>
            <td>{acc.id}</td>
            <td>{acc.name}</td>
            <td>{acc.lastname}</td>
            <td>{acc.phone}</td>
            <td>{acc.email}</td>
            {allBtns}
        </tr>
    )
}
