import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {allUsersRoute} from '../utils/APIRoutes'
import Contacts from '../components/Contacts'

function Chat() {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
const [currentUser,setCurrentUser] = useState(undefined)
const [currentChat,setCurrentChat] = useState(undefined)
useEffect(() => {
  async function fetchData() {
    try {
      if(!localStorage.getItem("chat-app-user")){
        navigate("/login")
      }
      else{
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")))
      }
    } catch (e) {
        console.error(e);
    }
};
fetchData()
  
}, [])

useEffect(() => {
  async function fetchData() {
    try {
      if(currentUser){
        if(currentUser.isAvatarImageSet){
          const data =await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data)
        }
        else{
          navigate("/setAvatar")
        }
      } 
    } catch (e) {
        console.error(e);
    }
};
fetchData()
  
}, [currentUser])

const handleChatChange = (chat)=>{
setCurrentChat(chat)
}
  
  return (
    <Container>
      <div className="container">
<Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange}/>

      </div>
    </Container>
  )
}
const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;
.container{
  height: 85vh;
  width: 85vw;
  background-color: #00000076;
  grid-template-columns: 25% 75%;
  @media screen and (min-width: 360) and (max-width: 480){
    grid-template-columns: 45% 55%;
  }
}

`

export default Chat