document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 100,
		outDuration: 100
	});
});
  
function cambiar() {
	var x = document.getElementById("myP");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
	/*
function mostrar() {
	div = document.getElementById('flotante');
	div.style.display = '';
}

function cerrar() {
	div = document.getElementById('flotante');
	div.style.display = 'none';
}

  }*/