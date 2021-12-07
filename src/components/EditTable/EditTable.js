import React from 'react'
import Account from '../Account/Account'

export default function EditTable({accounts, deleteAcc}) {

    const allAcc = accounts.map(acc => {
        return (
            <Account acc={acc} key={acc.id} edit={true} deleteAcc={deleteAcc} />
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4'>Edit/Delete</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Lastname</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allAcc}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
