document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.getElementById("hamburger-menu");
	const navMenu = document.querySelector(".main-nav");

	if (hamburger && navMenu) {
		hamburger.addEventListener("click", () => {
			navMenu.classList.toggle("active");
		});
	}
});
