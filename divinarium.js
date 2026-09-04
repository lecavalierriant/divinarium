function initialiser() {
	if (localStorage.getItem("hauteur") != null) {
		window.scrollTo(0, parseInt(localStorage.getItem("hauteur"), 10));
	}
}

function charger() {localStorage.setItem("hauteur", window.scrollY);}

window.addEventListener(
	"load",
	(event) => {
		for (bbb of document.querySelectorAll("span")) {
			bbb.addEventListener('click', croix);
		}
	}
);

index = 0;
function croix() {
	liste = ["♰", "☩", "✢", "✣", "✤", "✥", "🕂", "᛭", "✠"];
	for (aaa of document.querySelectorAll("span")) {
		aaa.innerText = liste[index];
	}
	if (index > liste.length - 2) {index = 0;} else {index++;}
}
