// <!-- Initialize Swiper -->
new Swiper(".hero-swiper", {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
		// управління з клавіатури
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	// управління мишкою
	mousewheel: {
		sensetivity: 1,
		eventsTarget: '.image-slider'
	},
	// автовисота для картинок
	// autoheight: true,

	// // к-сть слайдів для показу (можна половинку картинки значення 0.2)
	// slidesPerView: 1,

	// відступ між слайдами
	// spaceBetween: 15,

	// к-сть пролистуваних слайдів
	// slidesPerGroup: 1,

	// // Активний слайд по-центру. за замовчуванням почин від краю
	// centeredSlides: true,

	// швидкість переключення слайдів
	speed: 800,

    // ефекти
	effect: 'fade',
	fadeEffect: {
     crossFade: true
	},
});