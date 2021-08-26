const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, hideSelector = modalSelector) {		
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector);

		if (document.querySelector(closeSelector)) {
			const cross = document.querySelector(closeSelector);

			cross.addEventListener('click', e => {
				e.preventDefault();
				
				modal.style.display = "none";
				document.body.style.overflow = "";
				// document.body.classList.remove('modal-open');
			});
		}

		modal.addEventListener('click', e => {
			if (e.target.classList.contains(modalSelector.slice(1))) {
				e.preventDefault();
				
				modal.style.display = "none";
				document.body.style.overflow = "";
				// document.body.classList.remove('modal-open');
			}
		});

		trigger.forEach(elem => {
			elem.addEventListener('click', e => {
				e.preventDefault();

				clearTimeout(timer);
				
				document.querySelector(hideSelector).style.display = "none";
				modal.style.display = "block";
				document.body.style.overflow = "hidden";
				// document.body.classList.add('modal-open');
			});
		});
	}

	const timer = setTimeout(() => {
		const modal = document.querySelector('.popup');

		modal.style.display = "block";
		document.body.style.overflow = "hidden";
	}, 7000);

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', '.popup');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', '.popup_calc');
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', '.popup_calc_profile');
};

export default modals;