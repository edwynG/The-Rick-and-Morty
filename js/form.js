'use strict';

const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit",(e)=>{
  e.preventDefault()
   //messageSend("edwyn","messs","edwynjesus30@gmail.com")
    
})

const messageSend= (name,mg,email,subject="¡Nuevo envío!")=> {
    fetch("https://formsubmit.co/ajax/30326271.jme@gmail.com",{
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
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