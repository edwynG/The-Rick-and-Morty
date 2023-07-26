'use strict';
import * as md from "./modulo.js";
console.log("funciona");

let storage = localStorage;
const modal = document.getElementById("modal")
const searchInput = document.getElementById("search_characters")
const selecOrder = document.getElementById("miSelect");
const gridMode = document.getElementById("grid_mode");
const listMode = document.getElementById("list_mode");
var bool = false;

if(storage.getItem("orderCardRM") == null) storage.setItem("orderCardRM","A-Z");
selecOrder.value=storage.getItem("orderCardRM");

if(storage.getItem("modeCardRM") == null) storage.setItem("modeCardRM",false)

searchInput.addEventListener("keyup",(e) =>{
    if(!(e.key == "Delete" || (e.key == "Backspace" && searchInput.value == "")) ){
        modal.innerHTML="";
        md.searchCharacters(searchInput.value)
        .then(e=>{
            let person = JSON.parse(e);

           for (let i = 0; i < person.results.length; i++) {
                if(storage.getItem("modeCardRM") == "true"){
                    modal.classList.add("dt-items-list")
                    modal.appendChild(md.createCardList(person.results[i].name,person.results[i].species,person.results[i].status,person.results[i].image,person.results[i].id));

                }else{
                    modal.classList.remove("dt-items-list")
                    modal.appendChild(md.generarCard(person.results[i].name,person.results[i].status,person.results[i].species,person.results[i].location.name,person.results[i].id,person.results[i].image));
                    md.settingSeen(person.results[i].episode[0],document.querySelector(`#seeC${person.results[i].id}`))
                }
           }
           bool = true;
            let nodo = md.orderNodo(localStorage.getItem("orderCardRM"),modal.children);
            nodo.forEach(Element=> modal.appendChild(Element))
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

selecOrder.addEventListener("change",(e)=>{
    let nodo = md.orderNodo(selecOrder.value,modal.children);
    nodo.forEach(Element=> modal.appendChild(Element))
    storage.setItem("orderCardRM",selecOrder.value);
})

listMode.addEventListener("click",()=>{

    if (storage.getItem("modeCardRM") != "true") {
        modal.classList.add("dt-items-list")
        let  nodo=[];
        let arr = modal.children;
        for (let index = 0; index < arr.length; index++) {
            nodo[index]= parseInt(arr[index].getAttribute("id"));
        }
        modal.innerHTML="";
        let fragment =document.createDocumentFragment()
        for (let i = 0; i < nodo.length; i++) {
            md.PeticionApiRM(`https://rickandmortyapi.com/api/character/${nodo[i]}`)
            .then(res=>{
                let person=JSON.parse(res);
                fragment.appendChild(md.createCardList(person.name,person.species,person.status,person.image,person.id));
                modal.appendChild(fragment);
            })
            .catch(err=>console.log(err))
            
        }
        storage.setItem("modeCardRM",true)
    }
})

gridMode.addEventListener("click",()=>{
    if (storage.getItem("modeCardRM") == "true") {
        modal.classList.remove("dt-items-list")
        let  nodo=[];
        let arr = modal.children;
        for (let index = 0; index < arr.length; index++) {
            nodo[index]= parseInt(arr[index].getAttribute("id"));
        }
        modal.innerHTML="";

        for (let i = 0; i < nodo.length; i++) {
            md.PeticionApiRM(`https://rickandmortyapi.com/api/character/${nodo[i]}`)
            .then(res=>{
                let person=JSON.parse(res);
                modal.appendChild(md.generarCard(person.name,person.status,person.species,person.location.name,person.id,person.image));
                md.settingSeen(person.episode[0],document.querySelector(`#seeC${person.id}`))
            })
            .catch(err=>console.log(err))
            
        }
        storage.setItem("modeCardRM",false)
    }
})













