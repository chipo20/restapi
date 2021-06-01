import React from 'react'
import {Link} from "react-router-dom"
import {addContacts} from "../redux/action/action"
import {useDispatch} from "react-redux"
const AddContact = ({setName, name,setEmail,email,phone,setPhone}) => {
    const dispatch = useDispatch()
    const add =()=>{
dispatch(addContacts({name,email,phone}))

    }
    return (
        <div>
         <input type="text" value ={name} placeholder="enter your name" onChange={(e)=> setName (e.target.value)}/> 
         <input type="text" value ={email} placeholder="enter your email"  onChange={(e)=> setEmail (e.target.value)}/>
         <input type="text" value ={phone} placeholder="enter your phone"  onChange={(e)=> setPhone(e.target.value)}/>
         <Link to="contact-List"> <button onClick={add}>add</button></Link>
        </div>
    )
}

export default AddContact
