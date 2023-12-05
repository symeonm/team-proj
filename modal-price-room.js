(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-price-room-open]"),
    closeModalBtn: document.querySelector("[data-modal-price-room-close]"),
    modal: document.querySelector("[data-modal-price-room]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();