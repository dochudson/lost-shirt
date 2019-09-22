(function() {
	const tabLinks = document.querySelectorAll('.filter__link');
	const tabContent = document.querySelectorAll('.single-product-tab__descr');
	const activeClass = 'single-product-tab__descr--visually';
	const activeClassLink = 'filter__item--active';
	console.log(tabLinks);

	tabLinks.forEach(function(control) {
	control.addEventListener("click", function(e) {
    e.preventDefault();

    const filterName = control.getAttribute("data-tab");

    tabLinks.forEach(function(link) {
      link.closest(".filter__item").classList.remove(activeClassLink);
    })  

    tabContent.forEach(function(tab) {
      tab.closest(".single-product-tab__descr").classList.remove(activeClass);
      if (tab.classList.contains(`${filterName}`)) {
      	tab.closest(".single-product-tab__descr").classList.add(activeClass);
      }
    })

    control.closest(".filter__item").classList.add(activeClassLink);
  })
	})
}());