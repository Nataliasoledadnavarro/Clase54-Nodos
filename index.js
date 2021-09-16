//Ejercicios

//Los ejercicios a continuación, a menos que se indique lo contrario, deben realizarse manipulando el DOM mediante JavaScript, es decir, creando elementos y modificando sus atributos y propiedades, no definiéndolos en el documento html.

//Recordá que luego de crear los elementos deben agregarse al documento o a algún otro elemento que se encuentre en el mismo.

//Ejercicio 1 : Creación de nodo.
/*Crear un nodo de tipo h1
Asignarle un texto Hola DOM!
Colocarle un color, un tamaño de texto y una familia de fuente a elección.*/

/*const tituloPrincipal = document.createElement("h1");

tituloPrincipal.textContent = "Hola";

tituloPrincipal.style.color = "red";
tituloPrincipal.style.fontFamily = "Arial";
tituloPrincipal.style.fontSize = "28px";

const body = document.querySelector("body")

body.appendChild(tituloPrincipal)*/

//Ejercicio 2: Creación de listas
//Crear un elemento desde el DOM de tipo ol

//Asignarle 3 elementos de tipo li, con lo siguientes textos:

/*const ul = document.createElement("ul");
const body = document.querySelector("body");

const nombreLista = ["Nosotros", "Contacto", "Información"];

for (let i = 0; i < nombreLista.length; i++) {
  const li = document.createElement("li");

  li.textContent = `${nombreLista[i]}`;
  ul.appendChild(li);
}

body.appendChild(ul);*/

//Ejercicio 2: Listas anidadas
//Replica la siguiente estructura HTML creando nodos mediante javascript


/*<ul>
  <li>Verduras</li>
  <li>Garbanzos</li>
  <li>
    Frutas
    <ul>
      <li>Manzanas</li>
      <li>Naranjas</li>
      <li>Bananas</li>
      <li>Frutillas</li>
    </ul>
  </li>
</ul>*/


/*const listas = ["Verduras","Garbanzos","Frutas","Manzanas", "Naranjas", "Bananas", "Frutillas"]
const body = document.querySelector("body") 
const ul = document.createElement("ul")

for (let i = 0; i < listas.length-4; i++) {
    const li = document.createElement("li")
    li.textContent = `${listas[i]}`
    ul.appendChild(li)
    body.appendChild(ul)
}
const liFrutas = document.querySelector("ul li:last-child")
const ulAnidado = document.createElement("ul")
for (let i = 3; i < listas.length; i++) {
    const li = document.createElement("li")
    li.textContent = `${listas[i]}`
    ulAnidado.appendChild(li)
    liFrutas.appendChild(ulAnidado)
     
}*/

/*const body = document.querySelector("body")
const ul = document.createElement("ul")
const li = document.createElement("li")*/

//Ejercicio 3: Botones
//Por cada ítem de la siguiente lista, crear un botón con el texto de dicho ítem. Al clickear un botón, debe aparecer un alert que diga Has clickeado el mes X, dependiendo del mes clickeado (por ejemplo, Has clickeado el mes: Mayo)

/*const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const body = document.querySelector("body");

for (let i = 0; i < meses.length; i++) {
  const boton = document.createElement("button");
  boton.textContent = `${meses[i]}`;

  boton.onclick = () => {
    alert("Has clickeado el mes" + ` ${meses[i]}`);
  };

  body.appendChild(boton);
}*/

/*Ejercicio 4: Lista de tareas
Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem y un botón que diga Eliminar. Al clickear el botón, se debe eliminar de la lista el nodo correspondiente.*/

/*const tareas = [
  "Comprar comida",
  "Estudiar para examen",
  "Pagar impuestos",
  "Pasear a perro",
  "Comprar entradas para el cine",
];

const body = document.querySelector("body");
const ul = document.createElement("ul");

for (let i = 0; i < tareas.length; i++) {
  const li = document.createElement("li");
  const boton = document.createElement("button");
  boton.textContent = "Eliminar";
  li.textContent = `${tareas[i]} `;

  boton.onclick = () => {
    ul.removeChild(li);
  };

  li.appendChild(boton);
  ul.appendChild(li);
  body.appendChild(ul);
}*/

//Ejercicio 5: Prioridades
//Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem. Cada vez que se clickea el ítem, debe ir cambiando de color, siguiendo este orden: gris -> celeste -> amarillo -> rojo. Cuando llega al último color y se lo vuelve a clickear, debe volver al primer color.

/*const tareas = [
  "Comprar comida",
  "Estudiar para examen",
  "Pagar impuestos",
  "Pasear a perro",
  "Comprar entradas para el cine",
];

const colores = ["grey", "blue", "yellow", "red", "black"];

const body = document.querySelector("body");
const ul = document.createElement("ul");


for (let i = 0; i < tareas.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${tareas[i]}`;
  
  for (let j = 0; j < colores.length; j++) {

    li.onclick = () => {
      li.style.color = `${colores[i]}`;
    };
 
  }
 
  ul.appendChild(li);
  body.appendChild(ul);
}*/

/*Ejercicio 6: Completar tareas
Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem y un checkbox. Si el checkbox está tildado, al texto deben agregarse los estilos text-decoration: line-through; color: gray;. Si está destildado, debe volver a la normalidad.*/

/*const tareas = [
  'Comprar comida',
  'Estudiar para examen',
  'Pagar impuestos',
  'Pasear a perro',
  'Comprar entradas para el cine',
]

const ul = document.createElement("ul")
const body = document.querySelector("body") 

for (let i = 0; i < tareas.length; i++) {
  const li = document.createElement("li")
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  li.textContent = `${tareas[i]}`

  input.oninput = ()=>{
    if(input.checked){
      li.style.textDecoration = "line-through"
      li.style.color = "gray"
    }
    else{
      li.style.textDecoration = "none"
      li.style.color = "black"
    }
  }

  li.appendChild(input)
  ul.appendChild(li)
}

body.appendChild(ul)*/

/*Ejercicio 7: Tatetí
En un documento .html, agregar dentro del body lo siguiente:
<div class="tablero"></div>
En un archivo .css, agregar lo siguiente:
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tablero {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 600px;
}

.casilla {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 10px;
  box-sizing: border-box;
  background-color: #eeeeee;
  border-radius: 5px;
  font-size: 60px;
  font-weight: bold;
}*/

//Por cada ítem de la siguiente matriz, agregar al elemento tablero un elemento div que contenga como texto dicho ítem:
/*Al clickear cada casilla, se debe cambiar el texto de la siguiente forma:
Si hay una X, cambiar a una O
Si hay una O, dejarla vacía
Si está vacía, cambiar a una X*/

/*const tablero = [
  ["X", "O", "X"],
  ["O", "X", "X"],
  ["O", "O", "X"],
];

const div = document.querySelector(".tablero");

for (let i = 0; i < tablero.length; i++) {
  for (let j = 0; j < tablero[i].length; j++) {
    let casilla = document.createElement("div");
    casilla.classList.add("casilla");
    casilla.textContent = `${tablero[i][j]}`;
    div.appendChild(casilla);

    casilla.onclick = () => {
      if (tablero[i][j] === "X") {
        casilla.textContent = "O";
      } else if (tablero[i][j] === "O") {
        casilla.textContent = " ";
      } else if (tablero[i][j] === " ") {
        casilla.textContent = "X";
      }
    };
  }
}*/




/*Ejercicio 8: Grilla
Crear una función generarGrilla(filas, columnas, contenedor, claseCasilla) que tome por parámetros:

un número filas, representando la cantidad de filas
un número columnas, representando la cantidad de columnas
un nodo HTML contenedor que es el elemento donde se va crear la grilla
un string claseCasilla, que es la clase que se le va a agregar a cada casilla
La función debe en el elemento contenedor agregar filas * columnas cantidad de casillas, con clase claseCasilla, de ancho ancho contenedor / columnas y de alto alto contenedor / filas.

*/


/*const body = document.querySelector("body")
const contenedor = document.createElement("div")

contenedor.classList.add("contenedor")


body.appendChild(contenedor)

const generarGrilla = (filas, columnas, contenedor, claseCasilla) =>{

  for (let i = 0; i < filas*columnas; i++) {
        const casilla = document.createElement("div")
        casilla.classList.add(claseCasilla)
        contenedor.appendChild(casilla)
    
    }
 
}

console.log(generarGrilla(10,10,contenedor,"claseCasilla"))
*/

/*

Ejercicio 9: Puntaje
Crear en un documento html un input y un div.

al escribir algo en el input y apretar "enter", agregue un nuevo puntaje al div
si el input está vacío, no debe agregar nada
cuando se apreta "enter", el input debe vaciarse
el puntaje (otro div contenedor) contiene: - un elemento span para mostrar el nombre (que se agregó mediante el input) - un elemento span para mostrar el puntaje (que comienza en 0) - un botón para incrementar el puntaje - un botón para disminur el puntaje
al presionar los botones se modifica el puntaje de cada jugador incrementándose o disminuyendo respectivamente
el puntaje mínimo es 0
Ejemplo

[Ingrese un nuevo nombre...]

Jeff    100 puntos    [+][-]
Britta  50 puntos     [+][-]
Abed    500 puntos    [+][-]
Troy    200 puntos    [+][-]
Annie   250 puntos    [+][-]
Shirley 400 puntos    [+][-]
Pierce  20 puntos     [+][-]
© 2021 GitHub, Inc.*/
