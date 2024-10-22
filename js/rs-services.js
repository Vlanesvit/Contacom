document.addEventListener('DOMContentLoaded', function () {
	const servicesItems = document.querySelectorAll('.rs-services__item');
	const images = document.querySelectorAll('.rs-services__bg img');

	servicesItems.forEach((item, index) => {
		images[0].style.opacity = 1;

		item.addEventListener('mouseenter', () => {
			images.forEach(img => img.style.opacity = 0);
			images[index].style.opacity = 1;
		});
	});
});
