const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);

	header.addEventListener('click', e => {
		e.preventDefault();

		const target = e.target;

		if (target.classList.contains(tabSelector.slice(1)) || 
		target.parentNode.classList.contains(tabSelector.slice(1))) {
			tab.forEach((elem, i) => {
				if (target === elem || target.parentNode === elem) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});


	function hideTabContent() {
		content.forEach(elem => {
			elem.style.display = "none";
		});

		tab.forEach(elem => {
			elem.classList.remove(activeClass);
		});
	}

	function showTabContent(index = 0) {
		content[index].style.display = display;
		tab[index].classList.add(activeClass);
	}

	hideTabContent(content);
	showTabContent();
};

export default tabs;