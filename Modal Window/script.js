'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function showKey(e) {
  console.log(e['key']);
}

for (let i = 0; i < btnsOpenModal.length;i++) {
  btnsOpenModal[i].addEventListener('click',showModal);
}

closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click',hideModal);

document.addEventListener('keydown', function(e){
  if (e.key == 'Escape' && !modal.classList.contains('hidden')){

      hideModal();

  }
});






