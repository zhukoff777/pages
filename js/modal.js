(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};
 
	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal(event) {
		document.body.classList.toggle("modal-open");
		refs.modal.classList.toggle("is-hidden");
		console.log("клик по кнопке: ", event.target);
	}

	// const title2 = document.querySelector('.js-content-title');
	// const title2 = document.querySelector('#js-content-title');
	// const title2 = document.getElementById('js-content-title');
	console.log(title2);
	console.log(document);
})();