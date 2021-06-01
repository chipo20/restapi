import React from 'react'
import {deleteContacts} from "../redux/action/action"
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"
const ContactCard = ({contact,getPerson}) => {
    const dispatch = useDispatch()
    const delete1 =()=> {
        dispatch(deleteContacts(contact._id))
    }
    return (
        <div style= {{border : "solid blue" , width :"350px" , flexDirection : " column"}}>
 <p> {contact.name } </p>
 <p>   {contact.phone}</p>
 <p>         {contact.email }</p>
 <Link to="/edit-contact">
 <button onClick={()=>getPerson(contact)}>edit</button>
 </Link>
 <button onClick={delete1}>delete</button>
        </div>
    )
}

export default ContactCard
