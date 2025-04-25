// ================================================================================================================= //
//                                                                                                                   //
//                                                    Divinarium                                                     //
//                                                                                                                   //
// ================================================================================================================= //

function initialiser() {
	document.getElementById("select-initiales").addEventListener(
		"change",
		function() {
			for (initiale of document.getElementsByClassName("img-initiale")) {
				source = initiale.src.split("/");
				initiale.src =
					source[source.length - 3] + "/" + this.value.toLowerCase() + "/" + source[source.length - 1]
				;
			}
		}
	);
	document.getElementById("select-margines").addEventListener(
		"change",
		function() {
			for (margine of document.getElementsByClassName("div-exterior")) {
				source = getComputedStyle(margine).backgroundImage.split("/");
				console.log("url('" + source[source.length - 2] + "/" + this.value.toLowerCase() + ".png')")
				margine.style.backgroundImage =
					"url('" + source[source.length - 2] + "/" + this.value.toLowerCase() + ".png')"
				;
			}
		}
	);
	document.getElementById("input-imagines").addEventListener(
		"change",
		function() {
			for (imago of document.getElementsByClassName("img-illustrationis")) {
				imago.style.display = (imago.style.display == "none") ? "block" : "none";
			}
		}
	);
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                    Divinarium                                                     //
//                                                                                                                   //
// ================================================================================================================= //
