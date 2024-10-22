/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдов
	if (document.querySelector('.rs-slider__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-slider__slider');
			const pagination = sliderBlock.querySelector('.rs-slider__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-slider__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-slider__button-prev');

			const sliderSwiper = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 800,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// Преобразуем в формат '01', '02', '03'
					renderBullet: function (index, className) {
						let number = (index + 1).toString().padStart(2, '0');
						return `<span class="${className}">${number}</span>`;
					}
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				slidesPerView: 1,
			});
		});
	}

	if (document.querySelector('.rs-logo__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-logo');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-logo__slider');
			const pagination = sliderBlock.querySelector('.rs-logo__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-logo__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-logo__button-prev');

			const sliderSwiper = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// dynamicBullets: true
					// type: '',
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 2,
						spaceBetween: 0,
						grid: { fill: 'column', rows: 1 }
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 0,
						grid: { fill: 'column', rows: 1 }
					},
					991.98: {
						slidesPerView: 2,
						spaceBetween: 0,
						grid: { fill: 'column', rows: 2 }
					},
					1169.98: {
						slidesPerView: 3,
						spaceBetween: 0,
						grid: { fill: 'column', rows: 2 }
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-news__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-news');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-news__slider');
			const pagination = sliderBlock.querySelector('.rs-news__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-news__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-news__button-prev');

			const sliderSwiper = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					539.98: {
						slidesPerView: 2,
					},
					767.98: {
						slidesPerView: 3,
					},
					1169.98: {
						slidesPerView: 'auto',
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-team__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-team');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-team__slider');
			const pagination = sliderBlock.querySelector('.rs-team__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-team__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-team__button-prev');

			const sliderSwiper = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// dynamicBullets: true
					// type: '',
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 16,
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 16,
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					991.98: {
						slidesPerView: 2,
						spaceBetween: 34,
					},
					1169.98: {
						slidesPerView: 2,
						spaceBetween: 34,
					},
					1439.98: {
						slidesPerView: 3,
						spaceBetween: 34,
					},
				},
			});
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});