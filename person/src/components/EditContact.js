import React from 'react'
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {putContacts} from "../redux/action/action"

const EditContact = ({setName, name,setEmail,email,phone,setPhone,_id}) => {

    const dispatch = useDispatch()
const update1=()=> {
    dispatch(putContacts(_id,{name,email,phone}))
}
    return (
        <div>
           <div>
         <input type="text"  value={name} onChange={(e)=> setName (e.target.value)}/> 
         <input type="text"  value={email}  onChange={(e)=> setEmail (e.target.value)}/>
         <input type="text"  value={phone} onChange={(e)=> setPhone(e.target.value)}/>
         <Link to="contact-List"> <button onClick={update1}>edit</button></Link>
        </div> 
        </div>
    )
}

export default EditContact
