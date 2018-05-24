const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const planButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');

function openModal() {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

planButtons.forEach(button => button.addEventListener('click', openModal));

modalNoButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
