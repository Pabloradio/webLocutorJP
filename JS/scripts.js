
elements = document.querySelectorAll(".Menu_list_elements a");

function runMenuFormat() {
    for (var i = 0; i < elements.length; i++){
        elements[i].style.textDecoration = "none";
        elements[i].style.color = "black";  
    }
}   

window.onload = runMenuFormat;




/*

document.getElementById
document.getElementsByClassName
document.getElementsByTagName

document.querySelector
document.querySelectorAll

Aquí tienes algunos otros selectores utilizados en JavaScript para seleccionar elementos HTML:

1. `querySelectorAll`: Además de ser capaz de seleccionar elementos por clases, también puedes utilizar selectores más avanzados con `querySelectorAll`. Puedes seleccionar elementos por atributos, relaciones entre elementos, estados, etc. Por ejemplo:

```javascript
var elementos = document.querySelectorAll("input[type='text']");
```

2. `parentNode`: Este selector te permite acceder al elemento padre de un elemento específico en el DOM. Puedes utilizarlo para navegar y realizar acciones en elementos superiores. Por ejemplo:

```javascript
var padre = miElemento.parentNode;
```

3. `childNodes`: Este selector devuelve una lista de todos los nodos hijos de un elemento, incluidos los nodos de texto y los elementos HTML. Puedes utilizarlo para recorrer y manipular los nodos hijos de un elemento. Por ejemplo:

```javascript
var hijos = miElemento.childNodes;
```

4. `nextSibling` y `previousSibling`: Estos selectores te permiten acceder al siguiente y al anterior hermano de un elemento en el DOM, respectivamente. Puedes utilizarlos para recorrer y manipular elementos hermanos. Por ejemplo:

```javascript
var siguienteHermano = miElemento.nextSibling;
var anteriorHermano = miElemento.previousSibling;
```

Estos son solo algunos ejemplos adicionales de selectores utilizados en JavaScript. El lenguaje proporciona una variedad de métodos para seleccionar y manipular elementos HTML según tus necesidades específicas.

*/