(function() {
	const controlls = document.querySelectorAll('.single-product__color-item');
	const activeClass = 'single-product__color-item--active';
	

	controlls.forEach(function(control) {
		control.addEventListener('click', function() {
			/*controlls.forEach(function(btn) {
				btn.closest('.single-product__color-item').classList.remove(activeClass);
			})
			control.closest('.single-product__color-item').classList.add(activeClass);*/
			const filterName = control.getAttribute("data-shirt");
			document.querySelector('.single-product__pic').src=`${filterName}`;
		})
	})

})();