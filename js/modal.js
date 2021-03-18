(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	// const openModalBtn = 5;

	// console.log(openModalBtn);
	// console.log(refs.closeModalBtn);
	// console.log(refs.modal);
	// console.log("модалка", openModalBtn);
	

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal(event) {
		document.body.classList.toggle("modal-open");
		refs.modal.classList.toggle("is-hidden");
		console.log("клик по кнопке: ", event.target);
	}

	// console.log("модалка", openModalBtn, toggleModal);
})();