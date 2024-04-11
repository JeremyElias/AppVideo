'use strict';


const addEventOnElements = function (elements , eventType, callback){ // funcion que agrega un evento a un elemento o una lista de elementos 
    for(const elem of elements) elem.addEventListener(eventType,callback); //recorre la lista de elementos y agrega el evento
}


const searchBox = document.querySelector("[search-box]"); // selecciona el elemento 
const searchTogglers = document.querySelectorAll("[search-toggle]"); // selecciona el elemento

addEventOnElements(searchTogglers, "click", function(){ // escucha el evento click del elemento 
    searchBox.classList.toggle("active"); // agrega o quita la clase
});


/**
 * id de peliculas a mostrar en localStorage
 */

const getMovieDetails = function(movieId){
    window.localStorage.setItem("movieId",String(movieId));
}

const getMoviesList = function(urlParam, genreName){
 window.localStorage.setItem("urlParam",urlParam);
 window.localStorage.setItem("genreName",genreName);
}