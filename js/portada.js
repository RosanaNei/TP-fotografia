function changeImage() {
	var Image_Id = document.getElementById('imagen1');
	
	if (Image_Id.src.match("imgs/monocroma.jpg")) {
		Image_Id.src = "imgs/saturada.jpg";
		document.body.style.backgroundColor = "rgb(158, 25, 25)";
		document.getElementsByTagName("h1").style.textColor="yellow";
	}
	else {
		Image_Id.src = "imgs/monocroma.jpg";
		document.body.style.backgroundColor = "#161414";
		document.querySelector("a").style.color="lightgray;";
		
	}
	};
