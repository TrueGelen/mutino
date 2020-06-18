
import { Swiper, Navigation } from 'swiper/js/swiper.esm'

window.addEventListener('load', () => {

	Swiper.use([Navigation]);

	const slider = new Swiper('.slider .slider__content .slider__wrapperSwiper .slider__swiper-container', {
		loop: true,
		slidesPerView: 1,
		navigation: {
			prevEl: '.slider .slider__content .slider__wrapperSwiper .slider__buttons .slider__btn_left',
			nextEl: '.slider .slider__content .slider__wrapperSwiper .slider__buttons .slider__btn_right',
		}
	})

	// slider.on('slideChange', pauseVideo)

})


