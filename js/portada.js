function changeImage() {
	var Image_Id = document.getElementById('imagen1');
	let titulo = document.querySelector(".mono");
	let anchor = document.querySelector(".anchor-mono");
	let anchor2 = document.querySelector(".anchor-mono2");
	

	titulo.classList.toggle("satu")
	anchor.classList.toggle("anchor-satu")
	anchor2.classList.toggle("anchor-satu2")
	if (Image_Id.src.match("imgs/monocroma.jpg")) {
		Image_Id.src = "imgs/saturada.jpg";
		document.body.style.backgroundColor = "rgb(158, 25, 25)";
		
		
	}
	else {
		Image_Id.src = "imgs/monocroma.jpg";
		document.body.style.backgroundColor = "#161414";
		
		
	}
	};
	
	
        
	