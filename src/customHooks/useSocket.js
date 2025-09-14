import React, { useEffect, useState } from 'react'

const useSocket = () => {
  const [socket,setSocket]=useState(null);

  useEffect(()=>{
    const ws= new WebSocket("ws://localhost:8080");
    ws.onopen=()=>{
      console.log("Socket is Connected!")
       setSocket(ws);
    }
  },[])
  return socket;
}

export default useSocket;