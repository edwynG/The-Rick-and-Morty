
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

    const eventCardInfo = (e,option=false)=>{
        let selec= (option)? e.currentTarget.parentNode.parentNode.parentNode :e.currentTarget;
        let id = selec.getAttribute("id")
        loadCardEffect();
        PeticionApiRM(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res =>{
            setTimeout(()=>{
                loadCardEffectRemove();
                let person = JSON.parse(res);
                //console.log(person)
                createCardFloat(person.name,person.image,person.gender,person.status,person.species,person.origin.name,person.location.name,person.episode,person.episode[0],person.origin.url,person.id,document.getElementById("modal"),selec)
                
            },2000)
        })
    }

    function generarCard(name,status,species,location,id,img){
        let card = document.createElement("ARTICLE");
        card.classList.add("card");
        card.setAttribute("id",id);
        card.setAttribute("name",name);
        card.setAttribute("tipo",species);
        card.setAttribute("Status",status);

        card.addEventListener("click",(e)=> eventCardInfo(e))
       
        
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
                                <h6 class="card_seen">First seen in:</h6>
                                <h4 class="card_seen-text" id="seeC${id}">NULL</h4>
                            </article>
                        </section>            
        `
        localStorage.removeItem("valorAPI")
        card.innerHTML=content;
    
        return card;
        
    
    }


    const cardRamdon = (modal,cant) =>{
        if(localStorage.getItem("modeCardRM") == "true") cant=16;
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
                    if (localStorage.getItem("modeCardRM") == "true") {
                        modal.classList.add("dt-items-list")
                        modal.appendChild(createCardList(person.results[j].name,person.results[j].species,person.results[j].status,person.results[j].image,person.results[j].id));
                        
                    }else{
                        modal.classList.remove("dt-items-list")
                        modal.appendChild(generarCard(person.results[i].name,person.results[i].status,person.results[i].species,person.results[i].location.name,person.results[i].id,person.results[i].image));
                        settingSeen(person.results[i].episode[0],document.querySelector(`#seeC${person.results[i].id}`))

                    }
                    temp.push(i);
                }else{
                    j--;
                }
            }
            let nodo = orderNodo(localStorage.getItem("orderCardRM"),modal.children);
            nodo.forEach(Element=> modal.appendChild(Element))
            
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

    function createCardFloat(name,img,gander,status,spacies,world,location,episode,seen,origin,id,modal,nodo,s=500){
        let  container = document.createElement("SECTION");
        container.classList.add("container_develorment_character");
        container.setAttribute("id",`cardFloat`)
        let st = "card_st";
        if(status == "Alive") st="card_st life";
        if(status == "Dead") st="card_st dead";
        
        let content = `
                        
                        <div class="icon_next iconNFgeneral">
                            <i class="fa-solid fa-chevron-right" id="after" title="Fomer"></i>
                        </div>

                        <article class="develorment_character">
                            <div class="develorment_close">
                                <i class="fa-solid fa-xmark ico_cd-fl" id="dev_close${id}"></i>
                            </div>
                            <div class="dev_char_continer_img">
                                <img src=${img} alt=${name} class="dev_info_img">
                            </div>
                            <div class="dev_char_container_info">
                                <article class="dev_info_Contianer_name">
                                    <h1 class="dev_info_name">${name}</h1>
                                    <div class="dev_info_container_gander">
                                        <h4 class="dev_info_gander dev_info_style_title">Gander:</h4>
                                        <h3 class="dev_info_gander-dt dev_info_style_subtitle">${gander}</h3>
                                    </div>
                                    <div class="dev_info_staus">
                                        <span class="cdev_info_st ${st}" id="st"></span>
                                        <h4 class="dev_info_status-text" id="status">${status}-${spacies}</h4>
                                    </div>
                                </article>
    
                                <article class="dev_info_Contianer_origen">
                                        <div>
                                            <h6 class="dev_info_location dev_info_style_title">Origin:</h6>
                                            <div class="dev info_location-date">
                                                <h4 class="dev_info_location-text dev_info_style_subtitle" id="location">${world}</h4>
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="dev_info_location  dev_info_style_title">Dimension:</h6>
                                            <h4 class="dev_info_location-text dev_info_style_subtitle" id="origindi${id}">unknown</h4>
                                        </div>
                                </article>
    
                                <article class="dev_info_container_location">
                                    <h6 class="dev_location dev_info_style_title">Last known location:</h6>
                                    <h4 class="dev_location-text dev_info_style_subtitle" id="location">${location}</h4>
                                </article>
    
                                <article class="dev_info_container_seen">
                                    <h6 class="dev_seen dev_info_style_title">First seen in:</h6>
                                    <h4 class="dev_seen-text dev_info_style_subtitle" id="emergeSeen${id}">unknown</h4>
                                </article>
                                
                                <article class="dev_info_container_episode" id="episode${id}">
                                   
                                </article>
    
                            </div>
                        </article>

                        <div class="icon_after iconNFgeneral" >
                            <i class="fa-solid fa-chevron-right" id="Next" title="Next"></i>
                        </div>
                        `;
            container.innerHTML=content;
            container.style.opacity="0";
            modal.appendChild(container);

            document.getElementById(`Next`).addEventListener("click",()=> ArrayCardInfo(nodo,1))
            document.getElementById(`after`).addEventListener("click",()=> ArrayCardInfo(nodo,-1))


            episode.forEach(element => {
                 episodeCardFloat(element,document.getElementById(`episode${id}`));

            });
            settingSeen(seen,document.getElementById(`emergeSeen${id}`));
            originCardFlot(origin,[null,document.getElementById(`origindi${id}`)]);
            closeCardEmergente(`dev_close${id}`);
            
            setTimeout(() => {
                document.getElementById("cardFloat").style.opacity="1";
            },s);

    }

    function closeCardEmergente(id){
        document.getElementById(`${id}`).addEventListener("click",()=>{
                let container_id = document.getElementById(`${id}`).parentNode.parentNode.parentElement.getAttribute("id");
                let container = document.getElementById(`${container_id}`);
                container.style.animation="desaparecer .8s ease"
                setTimeout(()=>container.remove(),800)
        })
    }
    
    function episodeCardFloat(url,modal){
    
        PeticionApiRM(url)
        .then(res=>{
            let person =JSON.parse(res);
                let content =`
                    <div class="dev_info_episode">
                        <h3 class="episode_name  episode_style_text">${person.name}</h3>
                        <h3 class="episode_here  episode_style_text">${person.episode}</h3>
                        <h4 class="episode_fecha  episode_style_text">${person.air_date}</h4>
                    </div>
                            `;
                modal.innerHTML+=content;
        }).catch(err=>{
           console.log("No aparece informacion sobre en que en episodio aparece")
        })
    }

    function  originCardFlot(url,modal){
        PeticionApiRM(url)
        .then(res=>{
            let person =JSON.parse(res);
            //console.log(person)
            //modal[0].textContent=person.name;
            modal[1].textContent=person.dimension;
        }).catch(err=>{
            //modal[0].textContent="unknown";
            modal[1].textContent="unknown";
        })
    }

    function loadCardEffect(){
        document.body.style.overflow="hidden";
        let div = document.createElement("DIV");
        div.classList.add("loadEffect");
        div.setAttribute("id","loadCard")
        let textDiv = document.createElement("h1")
        textDiv.classList.add("textloadDiv")
        textDiv.innerHTML="Cargando"
        document.body.appendChild(div)
        document.getElementById("loadCard").appendChild(textDiv)

    }

    const loadCardEffectRemove = ()=> {
        document.getElementById("loadCard").style.animation="desaparecer .5s ease"
        setTimeout(()=>{
            document.getElementById("loadCard").remove()
        },500)
        document.body.style.overflow="auto";
    }
    
    const ArrayCardInfo = (nodo,direction)=>{
        try {
            let id = (direction  == 1)?nodo.nextElementSibling.getAttribute("id"):nodo.previousElementSibling.getAttribute("id");
            let sibling =(direction  == 1)?nodo.nextElementSibling :nodo.previousElementSibling;
               if(sibling.getAttribute("class")== "card"  || sibling.getAttribute("class") == "cardList"){
                PeticionApiRM(`https://rickandmortyapi.com/api/character/${id}`)
                .then(res =>{
                        let person = JSON.parse(res);
                        document.getElementById("cardFloat").remove()
                        createCardFloat(person.name,person.image,person.gender,person.status,person.species,person.origin.name,person.location.name,person.episode,person.episode[0],person.origin.url,person.id,document.getElementById("modal"),sibling,0);
                        
                })
               }
        } catch (error) {
            console.log("No hay mas cards")
        }
       
    }

    const orderNodo= (order,arr)=>{
        let  nodo=[];
        for (let index = 0; index < arr.length; index++) {
            nodo[index]= arr[index];
        }
        switch (order) {
            case "A-Z":

                nodo.sort((a,b)=> a.getAttribute("name").localeCompare(b.getAttribute("name")))
                break;

            case "Z-A":
                nodo.sort((a,b)=> b.getAttribute("name").localeCompare(a.getAttribute("name")))
                break;

            case "Tipo":

                nodo.sort((a,b)=> a.getAttribute("tipo").localeCompare(b.getAttribute("tipo")))

                break;
                case "Status":

                nodo.sort((a,b)=> a.getAttribute("Status").localeCompare(b.getAttribute("Status")))

                break;
            default:
                console.log("Order invalida")
                break;
        }

        return nodo;
    }


    function createCardList(name,species,status,img,id){
        let article = document.createElement("ARTICLE");
        article.classList.add("cardList");
        article.setAttribute("id",id);
        article.setAttribute("name",name);
        article.setAttribute("tipo",species);
        article.setAttribute("Status",status);
        if(name.length > 16){
            let arr = name.split(" ");
            arr.pop()
            name=arr.join(" ");
        }
        let st = "card_st";
        if(status == "Alive") st="card_st life";
        if(status == "Dead") st="card_st dead";

        let content = `     <div class="container_img">
                                <img src="${img}" alt="${name}"  class="img_list">
                            </div>
                        `;
        let section = document.createElement("SECTION");
        section.classList.add("dt_sec-list");
        let content2= `
                        <div class="dt_person">
                            <h1 class="card_name">${name}</h1>
                            <div class="card_status">
                                <span class="${st} id="st"></span>
                                <h4 class="card_status-text" id="status">${status}-${species}</h4>
                            </div>
                        </div>
                        `;
        let div = document.createElement("DIV");
        div.classList.add("container_icon-list");
        let i = document.createElement("I");
        i.setAttribute("class","fa-regular fa-eye");
        i.setAttribute("id","list_visual");
        i.addEventListener("click",e => eventCardInfo(e,true))
        div.appendChild(i);

        section.innerHTML=content2;
        section.appendChild(div);
        article.innerHTML=content;
        article.appendChild(section);

        return article;
    }

export {

        PeticionApiRM,
        newFechUTC,
        crearCookie,
        obtenerCookie,
        randomNumber,
        generarCard,
        searchCharacters,
        cardRamdon,
        notfound,
        settingSeen,
        closeCardEmergente,
        createCardFloat,
        ArrayCardInfo,
        orderNodo,
        createCardList
    
    };