import $ from 'jQuery';
import { addAnimalGif } from './fetch-gif';
import './assets/images/pet-bunny.png';
import './assets/images/pet-dead.png';
import './assets/images/pet-giraffe.png';
import './assets/images/pet-lion.png';
import './assets/images/pet-penguin.png';

function addPetButtonListeners(pet) {
  const petBox = $(`#${pet.name}`);
  petBox.on('click', '.feedPet', function(event) {
    event.preventDefault;
    pet.feed();
  });
  petBox.on('click', '.napPet', function(event) {
    event.preventDefault();
    pet.nap();
  });
  petBox.on('click', '.playPet', function(event) {
    event.preventDefault();
    pet.play();
  });
  petBox.on('click', '.killPet', function(event) {
    event.preventDefault();
    pet.gameOver = true;
  });
}

export function addNewPet(pet, petType) {
  let petHTML = `<div class='petBox' id='${pet.name}'><img class="petPic" src='assets/images/pet-${petType}.png'><h3>${pet.name}</h3><br><h6>Neediness Level: <span id='needinessValue${pet.name}'></span><div class='row'>`;
  petHTML += `<div class = 'col-md-3'><h5>Hunger</h5><br><span id='hungerValue${pet.name}'></span><br><button class='btn btn-info feedPet'>Feed!</button></div>`;
  petHTML += `<div class = 'col-md-3'><h5>Fatigue</h5><br><span id='fatigueValue${pet.name}'></span><br><button class='btn btn-info napPet'>Nap!</button></div>`;
  petHTML += `<div class = 'col-md-3'><h5>Mood</h5><br><span id='moodValue${pet.name}'></span><br><button class='btn btn-info playPet'>Play!</button></div>`;
  petHTML += `<div class = 'col-md-3'><span id='animalGIF${pet.name}'></span></div></div>`;
  petHTML += `<div class = 'row'><div class = 'col-md-4'></div><div class = 'col-md-4'><button class='btn btn-warning killPet'>Kill This Pet!</button></div><div class = 'col-md-4'></div></div>`;
  $('#petList').append(petHTML);
  addPetButtonListeners(pet);
  addAnimalGif(petType, $(`#animalGIF${pet.name}`));
  setInterval(()=>{
    if (pet.gameOver === false) {
      const needySpan = $(`#needinessValue${pet.name}`);
      const hungerSpan = $(`#hungerValue${pet.name}`);
      const fatigueSpan = $(`#fatigueValue${pet.name}`);
      const moodSpan = $(`#moodValue${pet.name}`);
      needySpan.html(pet.needinessLevel);
      hungerSpan.html(pet.hunger);
      fatigueSpan.html(pet.fatigue);
      moodSpan.html(pet.mood);
    } else {
      $(`#${pet.name}`).html(`<img class="petPic" src='assets/images/pet-dead.png'>Game Over! ${pet.name} died because you're terrible! How do you live with yourself?`);
      $(`#${pet.name}`).addClass('gameOver');
      return;
    }
  });
}