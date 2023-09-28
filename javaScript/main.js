'use strict'


const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastacio';
const kittenDesc1 = ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace1 = 'Siamés';


const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDesc2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';  
const kittenRace2 = 'Sphynx';


const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';   
const kittenRace3 = 'Main Coon'; 


const catsSection = document.querySelector(".js-list");
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');


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


function addNewKitten(event) { /*nuestra handle function*/
    event.preventDefault();
    const newKittenDataObject = {
        desc: inputDesc.value,
        photo: inputPhoto.value,
        name: inputName.value,
        race: inputRace.value,        
      };     
    console.log(`holisss`) /*al dar añadir se imprime Holisss*/
    
    if (newKittenDataObject.desc === '' || newKittenDataObject.photo === '' || newKittenDataObject.name === '') {
        labelMessageError.innerHTML= '¡Uy! parece que has olvidado algo :('
    } else {labelMessageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
    kittenDataList.push(newKittenDataObject); 
    
    // fetch con POST y localStorage
    
   /*fetch(`https://dev.adalab.es/api/kittens/${GITHUB_USER}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newKittenDataObject),
      })
        .then((response) => response.json())
        .then((data) => {
            if (data.success===true) {
                const newKittenDataObject = {
                    desc: inputDesc.value,
                    photo: inputPhoto.value,
                    name: inputName.value,
                    race: inputRace.value,        
                };     
                kittenDataList.push(newKittenDataObject); 
                localStorage.setItem('kittenNew', JSON.stringify(newKittenDataObject));

            //Completa y/o modifica el código:
            //Agrega el nuevo gatito al listado
            //Guarda el listado actualizado en el local stoarge
            //Visualiza nuevamente el listado de gatitos
            //Limpia los valores de cada input

          } else {
            labelMessageError.innerHTML= '¡Uy! parece que algo ha salido mal :('
          }
      });  */  
    renderKittenList(kittenDataList);
    }    
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

//   const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];
  
 
function renderKitten(kittenItem) {
   
    const liCat = document.createElement('li');
    liCat.setAttribute('class', 'card');
    // catsSection.appendChild(liCat);
    
    const articleCat = document.createElement('article');
    liCat.appendChild(articleCat);
    
    const imgCat = document.createElement('img');
    imgCat.setAttribute('src', kittenItem.image);
    imgCat.setAttribute('alt', 'gatos');
    imgCat.setAttribute('class', 'card_img')
    articleCat.appendChild(imgCat);
    
    const nameCat = document.createElement('h3');
    nameCat.textContent = kittenItem.name;
    nameCat.setAttribute('class','card_title');
    articleCat.appendChild(nameCat);    
    
    const raceCat = document.createElement('h4');
    raceCat.textContent = kittenItem.race;
    raceCat.setAttribute('class','card_race');
    articleCat.appendChild(raceCat);
    
    const descCat = document.createElement('p');
    descCat.textContent = kittenItem.desc;
    descCat.setAttribute('class','card_description');
    articleCat.appendChild(descCat);

    console.log(kittenItem);
    return liCat;    
}

const GITHUB_USER = 'virchaca';
const SERVER_URL = `https://dev.adalab.es/api/kittens/${GITHUB_USER}`;

let kittenDataList = [];

/* let kittenDataList = [kittenData_1, kittenData_2, kittenData_3]; --> si dentro del array let kittenDataList metemos los gatos que ya tenemos en el archivo, nos pinta los que tenemos MAS los que vienen nuevos del servidor*/

function renderKittenList(kittenDataList){
    catsSection.innerHTML = '';
    for (const kittenItem of kittenDataList) {
        catsSection.appendChild(renderKitten(kittenItem));
    };    
}

renderKittenList(kittenDataList);

const kittenListStored = JSON.parse(localStorage.getItem('kittensList'));

function getDataKitten(){
    if (kittenListStored !== null) {
        kittenDataList = kittenListStored;
        renderKittenList(kittenDataList);
    } else {
       fetch(`https://dev.adalab.es/api/kittens/${GITHUB_USER}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results);
            kittenDataList = data.results;
            localStorage.setItem('kittenList', JSON.stringify(kittenDataList));
            renderKittenList(kittenDataList);
        })
        .catch((error) => {
            console.error(error);
        });
    }
}
getDataKitten();


function filterKitten(event) {
    event.preventDefault();
    const descrSearchText = input_search_desc.value.toLowerCase(); 
    const raceSearchText = input_search_race.value.toLowerCase();
    catsSection.innerHTML = '';
    
    const dataKittenFiltered = kittenDataList.filter((word) => word.desc.toLowerCase().includes(descrSearchText))
    .filter((word) => word.race.toLowerCase().includes(raceSearchText))
    ;
        
    renderKittenList(dataKittenFiltered);
    console.log(dataKittenFiltered);
    console.log(descrSearchText);
    console.log(raceSearchText);
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