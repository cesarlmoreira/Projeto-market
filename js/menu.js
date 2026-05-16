const btnMenu = document.getElementById("hamburger-button");
const menu = document.getElementById("menu");

btnMenu.classList.add("hamburger-button-js-enable");

btnMenu.setAttribute("aria-expanded", "false");
menu.setAttribute("aria-hidden", "true");

menu.classList.add("menu-closed");

btnMenu.addEventListener("click", function () {
	const expanded = this.getAttribute("aria-expanded") === "true";

	if (expanded) {
		menu.classList.add("menu-closed");
	} else {
		menu.classList.remove("menu-closed");
	}

	this.setAttribute("aria-expanded", String(!expanded));
	menu.setAttribute("aria-hidden", String(expanded));
});