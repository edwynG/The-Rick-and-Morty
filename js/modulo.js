
 async function PeticionApiRM  (url="https://rickandmortyapi.com/api"){
            
           return await new Promise((resolve,reject) =>{
                fetch(url)
                .then(response =>{
                    if(response.ok){
                        return response.text();
                    }
                    reject("No hemos podido recuperar el JSON: " + response.status);
                })
                .then(json => resolve(json))
                .catch(err => reject(err));
           });
                    
        }

    const newFechUTC = (dias)=>{
            let fecha = new Date();
           fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
            return  fecha.toUTCString();
        }
        
    const crearCookie= (name,valor,dias)=>{
            let expires = newFechUTC(dias)
            document.cookie= `${name}=${valor};expires=${expires}`;
            
       }
    
    const obtenerCookie= cookieName =>{
        let cookies = document.cookie;
        cookies = cookies.split(";");
        for(let i = 0; cookies.length > i; i++){
           let cookie = cookies[i].trim();
               if(cookie.startsWith(cookieName)){
                   return cookie.split("=")[1];
               }
        }
        return -1;
    }

    const randomNumber = n =>{
        return Math.trunc(Math.random()*n)
    }

    function generarCard(name,status,species,location,id,img){
        let card = document.createElement("ARTICLE");
        card.classList.add("card");
        card.setAttribute("id",id);
       
        
        let st = "card_st";
        if(status == "Alive") st="card_st life";
        if(status == "Dead") st="card_st dead";
       
        let content= ` 
                         <section class="card_img-content">
                            <img src="${img}" alt="${name}" class="img_avatar">
                        </section>
                        <section class="card_dt-container">
                            <article class="card_content">
                                <h2 class="card_name" id="name_person">${name}</h2>
                                <div class="card_status">
                                    <span class="${st}" id="st"></span>
                                    <h4 class="card_status-text" id="status">${status}-${species}</h4>
                                </div>
                            </article>
                            <article class="card_content">
                                <h6 class="card_location">Last known location:</h6>
                                <h4 class="card_location-text" id="location">${location}</h4>
                            </article>
                            <article class="card_content">
                                <h6 class="card_seen">Fiest seen in:</h6>
                                <h4 class="card_seen-text" id="seeC${id}">NULL</h4>
                            </article>
                        </section>            
        `
        localStorage.removeItem("valorAPI")
        card.innerHTML=content;
    
        return card;
        
    
    }

    const cardRamdon = (modal,cant) =>{
        modal.innerHTML="";
        let pages = JSON.parse(obtenerCookie("rmApi"));
        PeticionApiRM(pages.characters)
        .then(res =>{
            let page = JSON.parse(res);
            localStorage.setItem("pagesRM",page.info.pages)
        })

        PeticionApiRM(`https://rickandmortyapi.com/api/character/?page=${randomNumber(localStorage.getItem("pagesRM"))}`)
        .then(obj=>{
            let person = JSON.parse(obj);
            let temp=[];
            for (let j = 0; j < cant; j++) {
                let i = randomNumber(person.results.length)
                if(!temp.includes(i)){
                    modal.appendChild(generarCard(person.results[i].name,person.results[i].status,person.results[i].species,person.results[i].location.name,person.results[i].id,person.results[i].image));
                    settingSeen(person.results[i].episode[0],document.querySelector(`#seeC${person.results[i].id}`))
                    temp.push(i);
                }else{
                    j--;
                }
            }
        })
        .catch(err=> modal.appendChild(notfound(err)));
    }

    const settingSeen = async  (url,modal) =>{
        let valor= await PeticionApiRM(url)
        valor = JSON.parse(valor).name
        modal.innerHTML=valor;
          
    }

    const searchCharacters = name =>{
        return PeticionApiRM(`https://rickandmortyapi.com/api/character/?name=${name}`)
    }

    const notfound = (err ="No characters found:/.") => {
        let span = document.createElement("SPAN");
        span.classList.add("notfound");
        span.textContent=err;
        return span;
    }

export {PeticionApiRM,newFechUTC,crearCookie,obtenerCookie,randomNumber,generarCard,searchCharacters,cardRamdon,notfound,settingSeen};