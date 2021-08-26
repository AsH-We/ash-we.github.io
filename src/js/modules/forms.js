const forms = () => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		phoneInputs = document.querySelectorAll('input[name="user_phone"]'),
		message = {
			loading: 'Загрузка...',
			error: 'Что-то пошло не так...',
			success: 'Спасибо мы скоро с вами свяжемся'
		};

		phoneInputs.forEach(elem => {
			elem.addEventListener('input', () => {
				elem.value = elem.value.replace(/\D/, '');
			});
		});

		async function postData(url, data) {
			document.querySelector('.status').textContent = message.loading;
			
			return await fetch(url, {
				method: 'POST',
				body: data
			});
		}

		form.forEach(elem => {
			elem.addEventListener('submit', e => {
				e.preventDefault();

				let statusMessage = document.createElement('div');
				statusMessage.classList.add('status');
				elem.appendChild(statusMessage);

				const formData = new FormData(elem);

				postData('assets/server.php', formData)
					.then(res => {
						console.log(res); 
						statusMessage.textContent = message.success;
					})
					.catch(error => {
						console.error(error);
						statusMessage.textContent = message.error;
					})
					.finally(() => {
						inputs.forEach(elem => {
							elem.value = "";
						});
						setTimeout(() => {
							statusMessage.remove();
						}, 4 * 1000);
					});
			});
		});
};

export default forms;