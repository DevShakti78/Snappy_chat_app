import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Chat() {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
const [currentUser,setCurrentUser] = useState(undefined)

useEffect(() => {
  async function fetchData() {
    try {
      if(!localStorage.getItem("chatapp-user")){
        navigate("/login")
      }
      else{
        setCurrentUser(await JSON.parse(localStorage.getItem("chatapp-user")))
      }
    } catch (e) {
        console.error(e);
    }
};
fetchData()
  
}, [])

  useEffect(() => {
   
    
  }, [])
  
  return (
    <Container>
      <div className="container"></div>
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