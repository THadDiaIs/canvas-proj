$(document).ready(inicio);
function inicio() {
   setTimeout(dibujar, 500);
   setTimeout(dibujar, 1000);
   $("#archivo").on("change", archivo);
   $("#efectos").on("change", efectos);
}

function archivo() {
   console.log('archivo')
   if ($("#archivo").attr("value") == "nuevo") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      contexto.clearRect(0, 0, 300, 300);
   }
   if ($("#archivo").attr("value") == "abrir") {
      $("#files").append("<form method='POST' action='upload.php' enctype='multipart/form-data'><input type='file' name='archivo'><input type='submit'></form>'");
   }
   if ($("#archivo").attr("value") == "guardar") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      window.location = canvas.toDataURL("image/png")
   }
}

function reconocimientovocal() {
   if ($("#vocal").attr("value") == "negativo") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      var imageData = contexto.getImageData(0, 0, 500, 500);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
         data[i] = 255 - data[i];
         data[i + 1] = 255 - data[i + 1];
         data[i + 2] = 255 - data[i + 2];
      }
      contexto.putImageData(imageData, 0, 0)
   }
   if ($("#vocal").attr("value") == "aclarar") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      var imageData = contexto.getImageData(0, 0, 500, 500);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
         data[i] = data[i] + 100;
         data[i + 1] = data[i + 1] + 100;
         data[i + 2] = data[i + 2] + 100;
      }
      contexto.putImageData(imageData, 0, 0)
   }
   if ($("#vocal").attr("value") == "oscurecer") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      var imageData = contexto.getImageData(0, 0, 500, 500);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
         data[i] = data[i] - 100;
         data[i + 1] = data[i + 1] - 100;
         data[i + 2] = data[i + 2] - 100;
      }
      contexto.putImageData(imageData, 0, 0)
   }
   if ($("#vocal").attr("value") == "escalagrises") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      var imageData = contexto.getImageData(0, 0, 500, 500);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
         data[i] = (data[i] + data[i + 1] + data[i + 2]) / 3;
         data[i + 1] = (data[i] + data[i + 1] + data[i + 2]) / 3;
         data[i + 2] = (data[i] + data[i + 1] + data[i + 2]) / 3;
      }
      contexto.putImageData(imageData, 0, 0)
   }
   if ($("#vocal").attr("value") == "solarizar") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      var imageData = contexto.getImageData(0, 0, 500, 500);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
         if (data[i] < 122) { data[i] = 0 } else { data[i] = 255 }
         if (data[i + 1] < 122) { data[i + 1] = 0 } else { data[i + 1] = 255 }
         if (data[i + 2] < 122) { data[i + 2] = 0 } else { data[i + 2] = 255 }

      }
      contexto.putImageData(imageData, 0, 0)
   }
}

function efectos() {
   console.log('efecto');
   if ($("#efectos").attr("value") == "negativo") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      var imageData = contexto.getImageData(0, 0, 500, 500);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
         data[i] = 255 - data[i];
         data[i + 1] = 255 - data[i + 1];
         data[i + 2] = 255 - data[i + 2];
      }
      contexto.putImageData(imageData, 0, 0)
   }
   if ($("#efectos").attr("value") == "aclarar") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      var imageData = contexto.getImageData(0, 0, 500, 500);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
         data[i] = data[i] + 100;
         data[i + 1] = data[i + 1] + 100;
         data[i + 2] = data[i + 2] + 100;
      }
      contexto.putImageData(imageData, 0, 0)
   }
   if ($("#efectos").attr("value") == "oscurecer") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      var imageData = contexto.getImageData(0, 0, 500, 500);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
         data[i] = data[i] - 100;
         data[i + 1] = data[i + 1] - 100;
         data[i + 2] = data[i + 2] - 100;
      }
      contexto.putImageData(imageData, 0, 0)
   }
   if ($("#efectos").attr("value") == "escalagrises") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      var imageData = contexto.getImageData(0, 0, 500, 500);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
         data[i] = (data[i] + data[i + 1] + data[i + 2]) / 3;
         data[i + 1] = (data[i] + data[i + 1] + data[i + 2]) / 3;
         data[i + 2] = (data[i] + data[i + 1] + data[i + 2]) / 3;
      }
      contexto.putImageData(imageData, 0, 0)
   }
   if ($("#efectos").attr("value") == "solarizar") {
      var canvas = document.getElementById("lienzo");
      var contexto = canvas.getContext("2d");
      var imageData = contexto.getImageData(0, 0, 500, 500);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
         if (data[i] < 122) { data[i] = 0 } else { data[i] = 255 }
         if (data[i + 1] < 122) { data[i + 1] = 0 } else { data[i + 1] = 255 }
         if (data[i + 2] < 122) { data[i + 2] = 0 } else { data[i + 2] = 255 }

      }
      contexto.putImageData(imageData, 0, 0)
   }

   if ($("#efectos").attr("value") == "desenfocar") {
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
   }
}


function dibujar() {
   var canvas = document.getElementById("lienzo");
   var contexto = canvas.getContext("2d");
   var img = new Image();
   img.src = "imagenes/inicial.jpg";
   img.addEventListener("load", function () {
      contexto.drawImage(img, 0, 0);
      var imageData = contexto.getImageData(0, 0, 500, 500);
      contexto.putImageData(imageData, 0, 0);
   });
}
