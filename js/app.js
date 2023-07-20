//'use strict';
import * as md from "./modulo.js";
console.log("funciona");

const modal = document.getElementById("modal")
const searchInput = document.getElementById("search_characters") 
var bool = false;

md.PeticionApiRM()
.then(res => md.crearCookie("rmApi",res,3))
.catch(err => localStorage.setItem("RM_API",-1))

searchInput.addEventListener("keyup",(e) =>{
    if(!(e.key == "Delete" || (e.key == "Backspace" && searchInput.value == "")) ){
        modal.innerHTML="";
        md.searchCharacters(searchInput.value)
        .then(e=>{
            let person = JSON.parse(e);

           for (let i = 0; i < person.results.length; i++) {
            modal.appendChild(md.generarCard(person.results[i].name,person.results[i].status,person.results[i].species,person.results[i].location.name,person.results[i].id,person.results[i].image));
            md.settingSeen(person.results[i].episode[0],document.querySelector(`#seeC${person.results[i].id}`))
            // let a = true;
            // if(a){
            //     md.createCardFloat(person.results[i].name,person.results[i].image,person.results[i].gender,person.results[i].status,person.results[i].species,person.results[i].origin.name,person.results[i].location.name,person.results[i].episode,person.results[i].episode[0],person.results[i].origin.url,person.results[i].id,modal)
            //     // md.closeCardEmergente("dev_close");
            //   //name,gander,status,spacies,world,location,episode,seen,origin,id,modal
            //     a=false
            // }
           }
           bool = true;
        })
        .catch(err => {
            modal.innerHTML="";
            modal.appendChild(md.notfound());
        })
        
    }
    
    if (searchInput.value == "" && (bool || modal.children.length  ==  1)){ 
        md.cardRamdon(modal,6);
        bool =false;
    }

})

window.addEventListener("load",()=> md.cardRamdon(modal,6))

//md.closeCardEmergente("dev_close");













