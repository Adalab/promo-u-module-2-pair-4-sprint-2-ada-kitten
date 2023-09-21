'use strict'


// const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
// const kittenName1 = 'Anastacio';
// const kittenDesc1 = ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
// const kittenRace1 = 'Siamés';



// const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
// const kittenName2 = 'Fiona';
// const kittenDesc2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';  
// const kittenRace2 = 'Sphynx';


// const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
// const kittenName3 = 'Cielo';
// const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';   
// const kittenRace3 = 'Main Coon'; 



const catsSection = document.querySelector(".js-list");
const input_search_desc = document.querySelector('.js_in_search_desc');


const btnAddCat = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error'); 
const btnCancel = document.querySelector('.js-cancel');



btnCancel.addEventListener('click', () => {
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
    inputRace.value = "";
    newForm.classList.toggle('collapsed');
}); 



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



function addNewKitten(event) {
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    const valueRace = inputRace.value; 
console.log(`holisss`) /*al dar añadir se imprime Holisss*/

    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
        labelMessageError.innerHTML= '¡Uy! parece que has olvidado algo :('
    } else {}
}
btnAddCat.addEventListener('click', addNewKitten);

 
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
    const descrSearchText = input_search_desc.value.toLowerCase(); 
    catsSection.innerHTML = '';

    let foundMatch = false; // Variable para rastrear si se encuentra una coincidencia

    for (const kittenItem of kittenDataList) {
        if (kittenItem.desc.toLowerCase().includes(descrSearchText)) {
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

// kittenRace1.innerHTML = race;.
