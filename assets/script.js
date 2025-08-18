document.addEventListener("DOMContentLoaded", function () {
	// --- Scrolled Header ---
	const header = document.querySelector(".main-header");
	if (header) {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 50) {
				header.classList.add("scrolled");
			} else {
				header.classList.remove("scrolled");
			}
		});
	}

	// --- Scroll Reveal Animation for content sections ---
	const revealElements = document.querySelectorAll(".reveal");
	const revealObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{
			threshold: 0.15,
		},
	);

	revealElements.forEach((el) => {
		revealObserver.observe(el);
	});

	// --- Particles.js Configuration (only runs if the #particles-js element exists) ---
	const particlesElement = document.getElementById("particles-js");
	if (particlesElement) {
		particlesJS("particles-js", {
			particles: {
				number: {
					value: 50,
					density: {
						enable: true,
						value_area: 800,
					},
				},
				color: {
					value: "#00c2d1",
				},
				shape: {
					type: "circle",
				},
				opacity: {
					value: 0.7,
					random: true,
				},
				size: {
					value: 3,
					random: true,
				},
				line_linked: {
					enable: true,
					distance: 150,
					color: "#00c2d1",
					opacity: 0.2,
					width: 1,
				},
				move: {
					enable: true,
					speed: 2,
					direction: "none",
					random: false,
					straight: false,
					out_mode: "out",
					bounce: false,
				},
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: {
						enable: true,
						mode: "grab",
					},
					onclick: {
						enable: true,
						mode: "push",
					},
					resize: true,
				},
				modes: {
					grab: {
						distance: 140,
						line_opacity: 0.5,
					},
					push: {
						particles_nb: 4,
					},
				},
			},
			retina_detect: true,
		});
	}
})