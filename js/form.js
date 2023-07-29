'use strict';

const formulario = document.getElementById("miFormulario");
const inputName = document.querySelector('input[type="name"]');
const inputLastName = document.querySelector('input[type="lastname"]');
const inputEmail = document.querySelector('input[type="email"]');
const inputSuject = document.querySelector('input[type="Asunto"]');
const inputMessage = document.querySelector('input[type="message"]');

formulario.addEventListener("submit",(e)=>{
  e.preventDefault();
   messageSend("edwyn","messs","edwynjesus30@gmail.com")
    
})

const messageSend= (name,lname,mg,email,subject="¡Nuevo envío!")=> {
    fetch("https://formsubmit.co/ajax/30326271.jme@gmail.com",{
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name +" "+lname,
            email: email,
            message: mg,
            _subject:subject,
            _template:"box"

        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    
   }