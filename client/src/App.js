import {io} from 'socket.io-client'
import {useState, useEffect} from "react";

function App() {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    setSocket(io('ws://localhost:8080'))
  },[])

  return (
      <div></div>
  );
}

export default App;
