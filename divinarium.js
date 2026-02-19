function initialiser() {
	if (localStorage.getItem("hauteur") != null) {
		window.scrollTo(0, parseInt(localStorage.getItem("hauteur"), 10));
	}
}

function charger() {localStorage.setItem("hauteur", window.scrollY);}
