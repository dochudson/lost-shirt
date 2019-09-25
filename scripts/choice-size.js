/*(function() {
	const controlls = document.querySelectorAll('.single-product__size-item');
	const activeClass = 'single-product__size-item--active';

	controlls.forEach(function(control) {
		let disabl = control.querySelector('.single-product__input-hide').getAttribute('disabled');
		if (disabl !== '') {
			control.addEventListener('click', function() {
				controlls.forEach(function(btn) {
					btn.closest('.single-product__size-item').classList.remove(activeClass);
				})
				control.closest('.single-product__size-item').classList.add(activeClass);
			})
		}
	})

})();*/