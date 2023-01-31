import {io} from 'socket.io-client'
import {useState, useEffect} from "react";

function App() {
  const [socket, setSocket] = useState<any>('')

  useEffect(() => {
      return setSocket(io('ws://localhost:8080'));
  },[])

  return (
      <div>
        hello world
      </div>
  );
}

export default App;