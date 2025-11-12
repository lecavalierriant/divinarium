function initiare() {
	document.getElementById("select-initiales").addEventListener(
		"change",
		function() {
			for (initiale of document.getElementsByClassName("img-initiale")) {
				referentia = initiale.src.split("/");
				initiale.src =
					referentia[referentia.length - 3] + "/" + this.value.toLowerCase() + "/" + referentia[referentia.length - 1]
				;
			}
		}
	);
	document.getElementById("select-margines").addEventListener(
		"change",
		function() {
			for (margine of document.getElementsByClassName("div-exterior")) {
				referentia = getComputedStyle(margine).backgroundImage.split("/");
				console.log("url('" + referentia[referentia.length - 2] + "/" + this.value.toLowerCase() + ".png')")
				margine.style.backgroundImage =
					"url('" + referentia[referentia.length - 2] + "/" + this.value.toLowerCase() + ".png')"
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
	document.getElementById("select-characterum-forma").addEventListener(
		"change",
		function() {
			for (interior of document.getElementsByClassName("div-interior")) {interior.style.fontFamily = this.value;}
			for (span of document.querySelectorAll("span")) {span.style.fontFamily = this.value;}
		}
	);
}
