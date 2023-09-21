'use strict'

/*poner lo primero definidas las variables que nos piden el segundo dia de clase, name, imagen, race, desc, y luego poner las kittenOne, Two y Three*/

// const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
// const kittenName1 = 'Anastacio';
// const kittenDesc1 = ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
// const kittenRace1 = 'Siamés';

// /*const kittenOne = kittenImage1 + kittenName1 + kittenDesc1 + kittenRace1;
// esto ya no hace falta porque hemos definido cada caracteristica (variable const) dentro de la variable grande, kittenOne, kittenTwo, kittenThree
// */

// const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
// const kittenName2 = 'Fiona';
// const kittenDesc2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';  
// const kittenRace2 = 'Sphynx';

// /*const kittenTwo = kittenImage2 + kittenName2 + kittenDesc2 + kittenRace2;
// esto ya no hace falta porque hemos definido cada caracteristica (variable const) dentro de la variable grande, kittenOne, kittenTwo, kittenThree
// */

// const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
// const kittenName3 = 'Cielo';
// const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';   
// const kittenRace3 = 'Main Coon'; /**/

/*const kittenTrhee = kittenImage3 + kittenName3 + kittenDesc3 + kittenRace3;
esto ya no hace falta porque hemos definido cada caracteristica (variable const) dentro de la variable grande, kittenOne, kittenTwo, kittenThree
*/

const catsSection = document.querySelector(".js-list");
const input_search_desc = document.querySelector('.js_in_search_desc');


/*para lo de la raza, en cada kittenOne, Two y Three, en <h4 class="card_race"> ponemos ${html} (en vez de kittenRace1, 2 y 3) </h4>*/

// let html1 = '';
// if (kittenRace1 === "") {html1 = `Uy que despiste, no sabemos su raza`;} else {html1 = kittenRace1;};

// let html2 = '';
// if (kittenRace2 === "") {html2 = `Uy que despiste, no sabemos su raza`;} else {html2 = kittenRace2;};

// let html3 = '';
// if (kittenRace3 === "") {html3= `Uy que despiste, no sabemos su raza`;} else {html3 = kittenRace3;};

/*para que si no pone la raza diga: `Uy que despiste, no sabemos su raza`*/

// const kittenOne = `<li class="card">
// <article>
//     <img
//     class="card_img"
//     src=${kittenImage1}
//     alt="gatito"
//     />
//         <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
//         <h4 class="card_race">${html1}</h4>
//         <p class="card_description">${kittenDesc1}</p>
// </article>
// </li>`;

// const kittenTwo = `<li class="card">
//     <img
//         class="card_img"
//         src=${kittenImage2}
//         alt="sphynx-cat"
//     />
//         <h3 class="card_title">${kittenName2.toUpperCase()}</h3>
//         <h4 class="card_race">${html2}</h4>
//         <p class="card_description">${kittenDesc2}</p>
// </li>`;

// const kittenThree  = `<li class="card">
//     <img
//         class="card_img"
//         src=${kittenImage3}
//         alt="maine-coon-cat"
//     />
//         <h3 class="card_title">${kittenName3.toUpperCase()}</h3>
//         <h4 class="card_race">${html3}</h4>
//         <p class="card_description">${kittenDesc3}
//             </p>
// </li>`; 

/*
const kittenOne = renderKitten(kittenImage1, kittenDesc1, kittenName1, kittenRace1);
const kittenTwo = renderKitten(kittenImage2, kittenDesc2, kittenName2, kittenRace2);
const kittenThree = renderKitten(kittenImage3, kittenDesc3, kittenName3, kittenRace3);

function renderKitten(url, desc, name, race) {
    const kittenHtml = `<li class="card">
    <article>
        <img
        class="card_img"
        src= "${url}" alt="${name}"
        />
            <h3 class="card_title">${name.toUpperCase()}</h3>
            <h4 class="card_race">${race}</h4>
            <p class="card_description">${desc}</p>
    </article>
    </li>`;
    return kittenHtml;  
}*/

/*
catsSection.innerHTML = kittenOne;
catsSection.innerHTML += kittenTwo;
catsSection.innerHTML += kittenThree;
+= lo que hace es concatenar los elementos para que no se sobreescriban. */

// if( kittenDesc1.includes(descrSearchText) ) {catsSection.innerHTML = kittenOne;}
// if( kittenDesc2.includes(descrSearchText) ) {catsSection.innerHTML = kittenTwo;}
// if( kittenDesc3.includes(descrSearchText) ) {catsSection.innerHTML = kittenThree;}

// if (descrSearchText==="") {catsSection.innerHTML = 'no hay gatos que mostrar';}

/*catsSection.innerHTML = kittenOne + kittenTwo + kittenThree; ya no vale, porque le hemos metido los condicionales para buscar por descripcion*/


const btnAddCat = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error'); 
const btnCancel = document.querySelector('.js-cancel');

/*
btnAddCat.addEventListener ('click', () => {
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    const valueRace = inputRace.value;

    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
        labelMessageError.innerHTML= '¡Uy! parece que has olvidado algo"'
    } else {}
});*/

btnCancel.addEventListener('click', () => {
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
    inputRace.value = "";
    newForm.classList.toggle('collapsed');
}); 

/*
const openClose = document.querySelector('.js-open-close');
const addForm = document.querySelector(".js-form");
openClose.addEventListener('click', () => {
    addForm.classList.toggle('collapsed');
});
manera facil de mostrar/ocultar menu añadir gato*/

const btn = document.querySelector('.js-btn-newForm');

const newForm = document.querySelector('.js-form'); 

function showNewCatForm() {
    newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
    newForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
    event.preventDefault();
    if (newForm.classList.contains('collapsed')) {
        showNewCatForm();      
    } else {
        hideNewCatForm();      
    }
}
btn.addEventListener('click', handleClickNewCatForm);

//*segundo ejercicio 2.5 funciones martes*/

function addNewKitten(event) {
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    const valueRace = inputRace.value; /*porque no está  en if*/
console.log(`holisss`) /*al dar añadir se imprime Holisss*/

    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
        labelMessageError.innerHTML= '¡Uy! parece que has olvidado algo :('
    } else {}
}
btnAddCat.addEventListener('click', addNewKitten);

/*
he puesto bien nombre constante btnAddCat y añadido dentro de la funcion lo que definimos el otro dia con addEventListener 
*/

/* tercer ejercicio, creo que es algo así, pero no se por donde seguir ... además que habrá cosas ya definidas que puedan intervenir en este codigo de listar gatos... pedir SOPORTE mñn  :) */

// catsSection += kittenHtml1;

// const input_search_desc = document.querySelector('.js_in_search_desc');
//const descrSearchText = input_search_desc.value;
// Repetición de las constantes para acordarnos de que tienen que llamarse aqui

 
const kittenData_1 = {
    image: 'https://dev.adalab.es/gato-siames.webp',
    name: 'Anastacio',
    desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
    race: 'Siamés',
  };
  
  const kittenData_2 = {
    image: 'https://dev.adalab.es/sphynx-gato.webp',
    name: 'Fiona',
    desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
    race: 'Sphynx',
  };

  const kittenData_3 = {
    image: 'https://dev.adalab.es/maine-coon-cat.webp',
    name: 'Cielo',
    desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
    race: 'Main Coon',
  };

  const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

function renderKitten(kittenData) {
    const li = `<li class="card">
    <article>
        <img
        class="card_img"
        src= "${kittenData.image}" alt="${kittenData.name}"
        />
            <h3 class="card_title">${kittenData.name}</h3>
            <h4 class="card_race">${kittenData.race}</h4>
            <p class="card_description">${kittenData.desc}</p>
    </article>
    </li>`;
    return li;
}

function renderKittenList(kittenDataList){
    for (const kittenItem of kittenDataList) {
        catsSection.innerHTML += renderKitten(kittenItem);
    };
}
renderKittenList(kittenDataList);


// catsSection.innerHTML+= renderKitten(kittenDataList[0]) + renderKitten(kittenDataList[1]) + renderKitten(kittenDataList[2]);
// Lo hemos comentado porque tenemos el bucle arriba

//  renderKitten(kittenData_2);
//  renderKitten(kittenData_1);
//  renderKitten(kittenData_3);

// const filterKitten = (event) => {
//     event.preventDefault();
//     const descrSearchText = input_search_desc.value;
//     catsSection.innerHTML = "";
//     if (kittenDesc1.includes(descrSearchText)) {
//        renderKitten(kittenData_1);
//     }
//     if (kittenDesc2.includes(descrSearchText)) {
//         renderKitten(kittenData_2);
//     }
//     if (kittenDesc3.includes(descrSearchText)) {
//         renderKitten(kittenData_3);
//     }else{
//         catsSection.innerHTML = 'no hay gatos que mostrar'; 
//     }
// }   
 

// function filterKitten(event) {
    //     event.preventDefault();
    //     const descrSearchText = input_search_desc.value;
    //     catsSection.innerHTML = '';
    
    //     let foundMatch = false; // Variable para rastrear si se encuentra coincidencia
    
    //     for (const kittenItem of kittenDataList) {
    //         if (kittenDesc1.includes(descrSearchText)) {
    //             catsSection.innerHTML = renderKitten(kittenData_1);
    //             foundMatch = true; 
    //         }
    //         if (kittenDesc2.includes(descrSearchText)) {
    //             catsSection.innerHTML = renderKitten(kittenData_2);
    //             foundMatch = true; 
    //         }
    //         if (kittenDesc3.includes(descrSearchText)) {
    //             catsSection.innerHTML = renderKitten(kittenData_3);
    //             foundMatch = true; 
    //         }
    //         if (descrSearchText==="") {catsSection.innerHTML = 'no hay gatos que mostrar';
    //         foundMatch = true; 
    //          }
    //         //  else{catsSection.innerHTML = 'nothing';} PREGUNTAR ESTO
    //     if (!foundMatch) {
    //             catsSection.innerHTML = 'ups! ningún gato coincide'; // Mostrar el mensaje si no se encontraron coincidencias
    //         }
    //     }
    // }
    
    /* asi es como nos lo pedían en el ejerccio, usando kittenItem, pero había que cambiar los kittenDesc1, 2 y 3 por kittenItem.desc*/
    
    function filterKitten(event) {
        event.preventDefault();
        const descrSearchText = input_search_desc.value;
        catsSection.innerHTML = '';
    
        let foundMatch = false; // Variable para rastrear si se encuentra una coincidencia
    
        for (const kittenItem of kittenDataList) {
            if (kittenItem.desc.includes(descrSearchText)) {
                catsSection.innerHTML += renderKitten(kittenItem);
                foundMatch = true; // Se encontró una coincidencia
            }
            if (descrSearchText==="") {catsSection.innerHTML = 'no hay gatos que mostrar';
            foundMatch = true; 
             }
                }
    
        if (!foundMatch) {
            catsSection.innerHTML = 'ups! ningún gato coincide'; // Mostrar el mensaje si no se encontraron coincidencias
        }
    }





/* ejercicios que nos faltan de hacer del 2.6 funcions II, empieza aqui abajo el num 2, faltan tmb 3 y 4*/

const btnSearch = document.querySelector('.js-btn-search');
btnSearch.addEventListener('click', filterKitten);

let html1 = '';
if (kittenRace1 === "") {html1 = `Uy que despiste, no sabemos su raza`;} else {html1 = kittenRace1;};

let html2 = '';
if (kittenRace2 === "") {html2 = `Uy que despiste, no sabemos su raza`;} else {html2 = kittenRace2;};

let html3 = '';
if (kittenRace3 === "") {html3= `Uy que despiste, no sabemos su raza`;} else {html3 = kittenRace3;};

const race = inputRace.value;

function renderRace(race) {
    if(race === "" ){
        return 'Uy que despiste, no sabemos su raza';
    }else {
        return race;
    }
}

// kittenRace1.innerHTML = race;




 