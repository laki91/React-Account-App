import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

function EditAcc(props) {

    console.log(props);

    const [account, setAccount] = useState(props.accounts.filter(acc => acc.id == props.match.params.id)[0])

    const editAccount =  () => {
        props.editAccountToState(account)
        props.history.push('/')
    } 

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4'>Edit Account</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input value={account.name} onChange={e=>{setAccount({...account, name: e.target.value})}} id='name'  type="text" placeholder='name' className='form-control'/><br/> 
                            <input value={account.lastname} onChange={e=>{setAccount({...account, lastname: e.target.value})}} id='lastname'  type="text" placeholder='lastname' className='form-control'/><br/>
                            <input value={account.phone} onChange={e=>{setAccount({...account, phone: e.target.value})}} id='phone'  type="text" placeholder='phone' className='form-control'/><br/>
                            <input value={account.email} onChange={e=>{setAccount({...account, email: e.target.value})}} id='email'  type="text" placeholder='email' className='form-control'/><br/>
                            <button onClick={editAccount} className='btn btn-info form-control'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default withRouter(EditAcc)