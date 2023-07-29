'use strict';

const formulario = document.getElementById("miFormulario");
const inputName = document.querySelector('input[name="name"]');
const inputLastName = document.querySelector('input[name="lastname"]');
const inputEmail = document.querySelector('input[name="email"]');
const inputSuject = document.querySelector('input[name="Asunto"]');
const inputMessage = document.querySelector('textarea[name="message"]');

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    let arrInput= [inputName,inputLastName,inputMessage,inputEmail,inputSuject]
    let datos=[];
    arrInput.forEach((element,i) => {
        datos[i] =element.value;
        element.value=""; 
    });
    messageSend(...datos);
    
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
    .then(data => sendNotification(data.message))
    .catch(error => sendNotification(error.message,false));
    
   }

  

const sendNotification= (mg,bool=true) =>{
    let div = document.createElement("DIV");
    div.classList.add("notification");

    let color= (bool)?"ico_nt":"icon_nt-not";
    let content = `
                    <div class="dt_nf">
                        <h1 class="text_nt">${mg}</h1>
                    </div>
                    <div class="${color}">
                        <i class="fa-solid fa-envelopes-bulk"></i>
                    </div>
                    `;
    div.innerHTML=content;
    document.body.appendChild(div);
    // setTimeout(()=>{
    //     document.querySelector(".notification").remove();
    // },5000)
}

