var socket = io();

let userName;
var userMessage = document.getElementById('Messages');
var btn = document.getElementById('send');
var chatt = document.getElementById('Message');             


do {
    userName= prompt('Please enter your name: ')
} while(!userName)


btn.addEventListener('click',()=>{
    socket.emit('chat-message',{
       userName:userName,
       userMessage: userMessage.value
    })
});

socket.on('chat-message',(data)=>{

    chatt.innerHTML += '<p><strong>' + data.userName + ':  </strong>' + data.userMessage + '</p>'


});

