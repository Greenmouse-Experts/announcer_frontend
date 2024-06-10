document.addEventListener("DOMContentLoaded", () => {
	const faqItems = document.querySelectorAll(".faq_item");

	faqItems.forEach((item) => {
		item.querySelector(".faq_question").addEventListener("click", () => {
			const answer = item.querySelector(".faq_answer");
			const icon = item.querySelector(".icon");
			const isOpen = answer.style.display === "block";

			document.querySelectorAll(".faq_answer").forEach((a) => (a.style.display = "none"));
			document.querySelectorAll(".icon").forEach((i) => (i.textContent = "+"));

			if (!isOpen) {
				answer.style.display = "block";
				icon.textContent = "-";
			}
		});
	});

	const accordionHeaders = document.querySelectorAll(".accordion-header");

	accordionHeaders.forEach((header) => {
		header.addEventListener("click", () => {
			const content = header.nextElementSibling;
			const arrow = header.querySelector(".arrow");

			// Close all other open accordion items
			document.querySelectorAll(".accordion-content").forEach((item) => {
				if (item !== content) {
					item.style.display = "none";
					item.previousElementSibling.querySelector(".arrow").classList.remove("open");
				}
			});

			// Toggle the clicked accordion item
			const isOpen = content.style.display === "block";
			content.style.display = isOpen ? "none" : "block";
			arrow.classList.toggle("open", !isOpen);
		});
	});
});
