import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Pet } from './pet';
import { addNewPet } from './pet_display';

$(document).ready(function() {
  const usedPetNames = [];
  $('#addPet').click(function(event) {
    event.preventDefault();
    const petName = $('#namePet').val();
    const petType = $('#petTypeSelector').val();
    $('#namePet').val('');
    if (!petName) {
      $('.errorMessage').text('Enter a name for your fun-time pet!');
      return;
    } else if (petName.search(/[^A-Z\d]/i) > -1) {
      $('.errorMessage').text("That isn't much of a name! Enter a better one!");
      return;
    } else if (usedPetNames.includes(petName)) {
      $('.errorMessage').text("Your pet deserves his own name!");
      return;
    }
    $('.errorMessage').text('');
    usedPetNames.push(petName);
    let newPet = new Pet(petName);
    newPet.incrementNeeds();
    addNewPet(newPet, petType);
  });

  $('#showRules').click(function(event) {
    event.preventDefault();
    $('#rules').toggle();
  });
});