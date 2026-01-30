
 const contentData = document.getElementById("contentData");
 const inputBuscar = document.getElementById("inputBuscar");
 const btnBuscar = document.getElementById("btnBuscar");

 const obtenerPokemons = async(event,idPokemon)=>{
    const idPersonaje = inputBuscar.value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPersonaje}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    contentData.innerHTML="";

    
        const divX = document.createElement("div");
        divX.classList.add("col-md-4");
        divX.innerHTML=`<h5 class="card-title">${data.name}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Pokemon</h6>
                        <img src="${data.sprites.front_default}" class="card-img-top">
                        `;
        contentData.appendChild(divX);
    

 }
 btnBuscar.addEventListener("click",obtenerPokemons);

