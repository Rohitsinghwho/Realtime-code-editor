const WebSocket=require('ws');
const express=require('express');

const app=express();
const server=app.listen(8080,()=>{
  console.log("Application is running on http://localhost:8080")
})
/*
Web socket extends  event emitter

*/

const wss= new WebSocket.Server({server});

wss.on('connection',(ws)=>{
  console.log(`New Connection establised`);
  
  ws.on('message',(msg)=>{
    wss.clients.forEach((client)=>{
      if(client.readyState===WebSocket.OPEN){
        client.send(msg.toString())
      }
    })
  });
  ws.on('close',()=>{
    console.log('Client Disconnected')
  })
});




