const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3000;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

http.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})

io.on('connection',(socket)=>{
    console.log('a user is connected');

    socket.on('chat-message',(data)=>{
        io.emit('chat-message', data)
    });
});




