import {io} from 'socket.io-client'
import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./view/mainPage/MainPage";
import {ChatPage} from "./view/chatPage/ChatPage";

function App() {
  const [socket, setSocket] = useState<any>('')

  useEffect(() => {
      return setSocket(io('ws://localhost:8080'));
  },[])

  return (
      <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/chat' element={<ChatPage/>}/>
      </Routes>
  );
}

export default App;