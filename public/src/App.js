import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import SetAvatar from './pages/SetAvatar';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/setAvatar' element={<SetAvatar/>} />
    <Route path='/' element={<Chat/>} />

   </Routes>
   </BrowserRouter>
      
  );
}

export default App;
