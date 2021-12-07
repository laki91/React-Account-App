import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

function AddAcc(props) {

    const [newAcc, setNewAcc] = useState({id:'', name: '', lastname:'', phone:'', email:''})
    
    //console.log(props);

    
    const addNewAccount = () =>{
        props.addAccount(newAcc)
        props.history.push('/')
        
    }
 
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4'>Add Account</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input onChange={e=>{setNewAcc({...newAcc, id:e.target.value})}} type="text" placeholder='id' className='form-control'/><br/> 
                            <input onChange={e=>{setNewAcc({...newAcc, name:e.target.value})}} type="text" placeholder='name' className='form-control'/><br/> 
                            <input onChange={e=>{setNewAcc({...newAcc, lastname:e.target.value})}} type="text" placeholder='lastname' className='form-control'/><br/>
                            <input onChange={e=>{setNewAcc({...newAcc, phone:e.target.value})}} type="text" placeholder='phone' className='form-control'/><br/>
                            <input onChange={e=>{setNewAcc({...newAcc, email:e.target.value})}} type="text" placeholder='email' className='form-control'/><br/>
                            <button onClick={addNewAccount} className='btn btn-info form-control'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default withRouter(AddAcc)