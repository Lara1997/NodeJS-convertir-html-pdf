
const pdf = require("html-pdf");


const content = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Resultado de plantilla PDF</title>
    <style>
      h1 {
        color: green;
      }
    </style>
  </head>
  <body>
    <div
      id="pageHeader"
      style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"
    >
      <p>- Ejemplo de cabecera en HTML PDF</p>
    </div>
    <div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px;">
      Footer de Ejemplo
    </div>
    <h1>DANIEL SANTOS LARA</h1>
    <p>Generando un PDF con un HTML sencillo</p>
  </body>
</html>`;

pdf.create(content).toFile("./resultadoPDF/html2-pdf.pdf", function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

//Para obtener el archivo HTML guardado
var fs = require("fs");
var html = fs.readFileSync("./plantilla.html", "utf8");
//path para obtener la direccion absoluta de la carpeta pdf donde se encuentran nuestros CSS y HTML
var path = require("path");
var options = {
  //Format determina el tamaño de pagina para el PDF
  format: "Tabloid",
  //path.resolve se concatena al prefijo file:// que necesita llevar la propiedad base
  base: "file://" + path.resolve("./pdf")
};

pdf
  .create(html, options)
  .toFile("./resultadoPDF/plantilla_Personalizada.pdf", function (err, res) {
    if (err) return console.log(err);
    console.log(res);
  });