/*Інформацію про те, як влаштовано АПІ шукайте в документації!
Уявіть, що вам прийшло завдання на работі – все що залишив
бекендер - це таку документацію та полетів у відпустку)
Дуже заохочується максимально креативний підхід до цього
завдання – робіть стилі, додайте який-небудь приємний шрифт
(Якщо зовсім туго з ідеями шрифтів візьміть Roboto с Google Fonts).
1.Cтворіть кнопку: "отримати інформацію". При натисканні на неї
отримайте та відобразіть інформацію про усіх персонажів 5 епізоду
зоряних війн(films/2).
Зверніть увагу, що необхідно вивчити документацію та на її основі
вивести інформацію.
Виводимо тільки: повне ім'я персонажа, дата народження,
стать(якщо зробите іконкою, буде взагалі ідеально).
БОНУС ПЛЮС: Якщо додумаєтесь, як зберігати і виводити фотки
персонажів – буде дуже круто.
Дамо підказку: можна створити об'єкт з
ключ=посилання_на_персонажа, значення=посилання_на_фотку
У самому АПІ фотографій немає, але ДЗшка стане набагато
приємніше виглядати з зображеннями персонажів
Виведіть список усіх планет, які були у зоряних війнах.

3. Додайте кнопку next, яка завантажить наступну сторінку зі
списком планет.

Попередня сторінка при цьому має пропасти. (відбувається заміна
даних)
4. ADVANCED: додайте до 1 завдання поле вводу з номером
фільму(номер по порядку випуску фильму). Тепер при натисканні на
кнопку – необхідно отримати інформацію не про 5тий епізод, а про
фільм, номер якого вказано у полі вводу.
Якщо вказана цифра 1 – потрібно передати запит на /films/1
5. ADVANCED: Додайте кнопку перекладу на вукийську мову. Після
натискання на кнопку – весь отриманий по апі контент повинен
перекластись на мову вуки.
Для цього достатньо додати до будь-якого запиту: ?format=wookiee.
При фантазії – можете ще і текст кнопок перекласти :)*/

const BASE_URL = 'https://swapi.dev/api/';
const buttonInfo = document.getElementById("getInfoPerson");
const buttonPlanet = document.getElementById("getInfoPlanet");
const buttonNext = document.getElementById("next");
const container = document.getElementById("data-container");
const input = document.querySelector("input");
const buttonWooky = document.getElementById("getWooky");
const buttonEnglish = document.getElementById("getEnglish");
let id = Number(input.value);
let page = 0;
let isWooky = false;
let forFetch = '';

input.addEventListener("input", updateEpisode)
buttonInfo.addEventListener('click', pressButtonInfo);
buttonPlanet.addEventListener('click', pressButtonPlanet);
buttonNext.addEventListener('click', pressButtonNext);
buttonWooky.addEventListener('click', pressButtonWooky);
buttonEnglish.addEventListener('click', pressButtonEnglish);

function pressButtonWooky(){
  if (isWooky === true){
    alert(`The translation into the Wukian language has already been activated`);
  } else {
    isWooky = true;
    alert(` Wukian language activated`);
  }
}

function pressButtonEnglish(){
  if (isWooky === true){
    isWooky = false;
  } else {
    alert(`Already activated English`);
  }
}

function updateEpisode(e) {
  id = Number(e.target.value);
}

const renderData = (data) => {
  container.textContent = JSON.stringify(data, null, ' ');

}

function divClear(){
  container.innerHTML = '';
  }

function everybodyCharacters (array){
  
  for (let i = 0; i < array.length; i++) {
    if (isWooky === true) {
      forFetch = `${array[i]}?format=wookiee`;
    } else {
      forFetch =`${array[i]}`;
    }
    fetch(`${forFetch}`).then((response) => {
      return response.json()
    }).then((dat) => {
      let inserContent = `
      <div id="person"><img src='img/${dat.name}.gif' alt=""> <b> Person's name: ${dat.name} , birth date: ${dat.birth_year} , gender: ${dat.gender} </b>
        </div> </br>`;
      container.insertAdjacentHTML('beforeend', inserContent);
      })
    .catch((error) => {
      alert(`Something went wrong`);
    });
  }
}


function  pressButtonInfo () {
  if (id !== 0 ){
    divClear();
    if (isWooky === true) {
      forFetch = `${BASE_URL}films/${id}?format=wookiee`;
    } else {
      forFetch =`${BASE_URL}films/${id}`;
    }
    fetch(`${forFetch}`).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
    let characters = Object.values(data.characters);
    everybodyCharacters(characters);
    })
    .catch((error) => {
      alert(`Something went wrong`);
    });
  } else {
    alert(`Enter the number of episode`)
  }
}

function everyonePlanets (arr){
  for (let j = 0; j < arr.length; j++) {
    let content = `
      <span id="planet"> <b>Planet:   ${arr[j].name} </b></span> </br>`;
      container.insertAdjacentHTML('beforeend', content);
      
  }
}

function  pressButtonPlanet () {
  divClear();
  page = Number(1);
  if (isWooky === true) {
    forFetch = `${BASE_URL}planets/?format=wookiee`;
  } else {
    forFetch =`${BASE_URL}planets/`;
   }
  fetch(`${forFetch}`).then((response) => {
    return response.json()
  }).then((data) => {
   let planets = Object.values(data.results);
   console.log(data)
   everyonePlanets (planets);
    })
    .catch((error) => {
      alert(`Something went wrong`);
    });
}

function pressButtonNext() {
    if (page === 0){
      alert(`You have not yet viewed the list of planets`)
    } else if (page < 6){
    divClear();
    page++;

    if (isWooky === true) {
      forFetch = `${BASE_URL}planets/?page=${page}?format=wookiee`;
    } else {
      forFetch =`${BASE_URL}planets/?page=${page}`;
    }

    fetch(`${BASE_URL}planets/?page=${page}`).then((response) => {
      return response.json()
    }).then((data) => {
     let planets = Object.values(data.results);
     everyonePlanets (planets);
  })
  .catch((error) => {
    alert(`Something went wrong`);
  });
  }
   else {
    alert(`You have looked through the entire list of planets`)
   }
}