document.addEventListener("DOMContentLoaded", function () {
	const dropDownBtns = document.querySelectorAll(".dropDownBtn");
	let activeMenu = null;

	dropDownBtns.forEach(function (button) {
		button.addEventListener("click", function (event) {
			// Prevent the event from propagating to the document click listener
			event.stopPropagation();

			// Close any currently active menu
			if (activeMenu && activeMenu !== this.querySelector(".sub-menu")) {
				activeMenu.classList.remove("active");
				const activeChevron = activeMenu.parentNode.querySelector(".fa-chevron-up");
				if (activeChevron) {
					activeChevron.classList.remove("active");
				}
			}

			// Toggle the clicked sub-menu
			const subMenu = this.querySelector(".sub-menu");
			subMenu.classList.toggle("active");
			const chevron = this.querySelector(".fa-chevron-up");
			if (chevron) {
				chevron.classList.toggle("active");
			}

			// Set the current sub-menu as active
			activeMenu = subMenu.classList.contains("active") ? subMenu : null;
		});
	});

	// Handle hover for events drop
	const eventsDrop = document.querySelector(".events-drop");
	const eventsDropInner = document.querySelector(".events-drop-inner");

	if (eventsDrop && eventsDropInner) {
		let timer;

		const showMenu = () => {
			clearTimeout(timer);
			eventsDropInner.style.display = "flex";

		};

		const hideMenu = () => {
			timer = setTimeout(() => {
				eventsDropInner.style.display = "none";
			}, 200); // Delay to allow moving between elements
		};

		eventsDrop.addEventListener("mouseover", showMenu);
		eventsDropInner.addEventListener("mouseover", showMenu);

		eventsDrop.addEventListener("mouseout", hideMenu);
		eventsDropInner.addEventListener("mouseout", hideMenu);
	}

	// Close any open sub-menu when clicking outside
	document.addEventListener("click", function () {
		if (activeMenu) {
			activeMenu.classList.remove("active");
			const activeChevron = activeMenu.parentNode.querySelector(".fa-chevron-up");
			if (activeChevron) {
				activeChevron.classList.remove("active");
			}
			activeMenu = null;
		}
	});
});
