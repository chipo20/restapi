import {GET_CONTACTS} from './actionTypes'

import axios from "axios"


export const getContacts =()=>dispatch=>{
    axios.get('/api/contact/getuser')
    .then(res=>dispatch({type:GET_CONTACTS , payload : res.data}))
    .then(res=>console.log("res",res))
    .catch(err=>console.log(err))
}

export const addContacts =(newContact)=>dispatch=>{
    axios.post('/api/contact/adduser',newContact)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}

export const putContacts =(idContact,updateContact)=>dispatch=>{
    axios.put(`/api/contact/updateuser/${idContact }`,updateContact)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}

export const deleteContacts =(idContact)=>dispatch=>{
    axios.delete(`/api/contact/deleteuser/${idContact }`)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}

