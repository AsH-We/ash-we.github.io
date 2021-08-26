const imgModal = () => {
	const trigger = document.querySelectorAll('.preview');

	trigger.forEach(elem => {
		elem.parentNode.addEventListener('click', e => {
			e.preventDefault();

			const hrefValue = elem.parentNode.getAttribute('href'),
				imgNum = +hrefValue.replace(/\D/g, ''),
				img = document.createElement('img'),
				imgBlock = document.createElement('div');

			img.setAttribute('src', `assets/img/our_works/big_img/${imgNum}.png`);
			imgBlock.classList.add('popup');

			imgBlock.append(img);
			document.querySelector('body').append(imgBlock);

			imgBlock.style.background = "rgba(0, 0, 0, 0.5)";
			imgBlock.style.display = "block";
			document.querySelector('body').style.overflow = "hidden";

			imgBlock.addEventListener('click', e => {
				if (e.target.classList.contains('popup')) {
					imgBlock.parentNode.removeChild(imgBlock);
					document.querySelector('body').style.overflow = "";
				}
			});
		});
	});	
};

export default imgModal;