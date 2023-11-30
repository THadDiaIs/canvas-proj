var canvas = document.getElementById("lienzo");
var contexto = canvas.getContext("2d");
var imageData = contexto.getImageData(0, 0, 300, 300);
var data = imageData.data;
for (var i = 0; i < data.length; i += 4) {
	var radio = 80;
	var temp;
	for (var componente = 0; componente < 3; componente++) {
		temp = 0;
		for (var x = 0; x <= (radio * 4); x += 4) {
			for (var y = 0; y <= (radio * 1200); y += 1200) {
				temp += data[i + componente + x + y];
			}
		}
		data[i + componente] = temp / (radio * radio);
	}
}
contexto.putImageData(imageData, 0, 0)
var n = $("#lee").html();
postMessage(n);
