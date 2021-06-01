import {useEffect,useState} from "react"
import './App.css';
import {BrowserRouter as Router , Link ,Route} from 'react-router-dom'
import ContactCard from './components/ContactCard';
import {useDispatch, useSelector} from "react-redux"
import {getContacts} from "./redux/action/action"
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
function App() {
  const dispatch = useDispatch()
  const contact = useSelector(state=> state.contacts)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [id, setId] = useState("")
  const getPerson =(contact)=> {
setName(contact.name)
setEmail(contact.email)
setPhone(contact.phone)
setId(contact._id)

  }
  useEffect(()=>{
    dispatch(getContacts())

  },[])
  return (
    <Router>
    <div className="App">
      
     <Link to="/contact-List">
     <button> contact-List</button>
     </Link>
     <Link to ="/Add-Contact">
     <button> Add-Contact</button>
     </Link>
     <Route path="/contact-List" render={()=><div style={{display: "flex"}}>
{ contact.map(contact=> <ContactCard contact={contact}  getPerson={getPerson} /> )  }


</div>}/>

   
<Route path= "/Add-Contact"  render={()=><div>

<AddContact 

name={name}
setName={setName} 

email={email}
setEmail={setEmail}

phone={phone}
setPhone={setPhone}
/>


  </div>} />

<Route path="/edit-contact" render={()=> <div>
<EditContact 

name={name}
setName={setName} 

email={email}
setEmail={setEmail}

phone={phone}
setPhone={setPhone}
_id={id}


/>
</div> }/>
</div>
    </Router>
  );
}

export default App;
