var imagenes = [];
imagenes["aguila"] = "aguila.png";
imagenes["caballo"] = "caballo.png";
imagenes["vaca"] = "vaca.png";

class Pakiman
{
 constructor(n, v, a)

 {
   console.log(n);
   this.imagen = new Image();
   this.nombre = n;
   this.vida = v;
   this.ataque = a;

   this.imagen.src = imagenes[this.nombre];

 }
 
 hablar()
 {
   alert(this.nombre);
 }

 mostrar()
 {
   console.log(this.imagen);
    document.body.appendChild(this.imagen);
   document.write("<p>");
   document.write("<strong>" + this.nombre + "<strong/><br />");
   document.write("vida: " + this.vida + "<br />");
   document.write("ataque: " + this.ataque);
   document.write("<p/>");
 }
}

var aguila = new Pakiman("aguila", 100, 30);
var caballo = new Pakiman("caballo", 120, 100);
var vaca = new Pakiman("vaca", 70, 70);


aguila.mostrar();
caballo.mostrar();
vaca.mostrar();
