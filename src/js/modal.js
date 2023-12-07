  const modalController = ({ modal, btnOpen, btnClose }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  const closeModal = () => {
    modalElem.classList.add("is-hidden");
    window.removeEventListener('keydown', handleKeyDown);
  };

  const openModal = () => {
    modalElem.classList.remove("is-hidden");
    window.addEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  buttonElems.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });

  modalElem.addEventListener('click', (event) => {
    if (event.target === modalElem || (btnClose && event.target.closest(btnClose))) {
      closeModal();
    }
  });
};

document.addEventListener('DOMContentLoaded', function () {
  modalController({
    modal: '.modal',
    btnOpen: '.button-js',
    btnClose: '.js-modal-close',
  });

  modalController({
    modal: '.modal2',
    btnOpen: '.button2-js',
    btnClose: '.js-modal-close',
  });

  modalController({
    modal: '.modal3',
    btnOpen: '.button3-js',
    btnClose: '.js-modal-close',
  });
})


  