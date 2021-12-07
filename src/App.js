import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AccTable from './components/AccTable/AccTable'
import AddAcc from './components/AddAcc/AddAcc'
import EditAcc from './components/EditAcc/EditAcc'
import EditTable from './components/EditTable/EditTable'
import Header from './components/Header'

export default function App() {

    const [accounts, setAccounts] = useState([
        {id: 1, name: 'laki', lastname: 'vuckovic', phone: '111-11', email: 'laki@gmail.com'},
        {id: 2, name: 'nikola', lastname: 'nikolic', phone: '222-22', email: 'nikola@gmail.com'}
    ])

    const addAccount = (acc) => {
        setAccounts([...accounts, acc])
        
    }
    

    const deleteAcc = (id) => {
        const del = accounts.filter(acc=> {
            return acc.id !== id
        })
        setAccounts(del)
        //console.log(del);
    }

    const editAccountToState = (arg) => {
        let possitinon = accounts.map(acc => acc.id).indexOf(arg.id)
        accounts[possitinon] = arg
        setAccounts(accounts)
    }
    //console.log(accounts);

    return (
        <BrowserRouter>
            <Header />
            <Route path='/' exact>
                <AccTable accounts={accounts} /> 
            </Route>
            <Route path='/add'>
                <AddAcc addAccount={addAccount} />
            </Route>
            <Switch>
                <Route path='/edit/:id'>
                    <EditAcc editAccountToState={editAccountToState} accounts={accounts} />
                </Route>
                <Route path='/edit'>
                    <EditTable accounts={accounts} deleteAcc={deleteAcc}/>
                </Route>
            
            </Switch>   
        </BrowserRouter>
        
    )
}
