'use strict';

import { api_key, fetchDataFromServer } from "./api.js";

export function sidebar(){
    const genreList = {};

    fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function({genres}){

        for(const {id, name}of genres){
            genreList[id] = name;
        }
        genreLink();
        });

        const sidebarInner = document.createElement("div"); // crea un div para el sidebar
        sidebarInner.classList.add("sidebar-inner"); // agrega la clase sidebar-inner

        sidebarInner.innerHTML = `
        
            <div class="sidebar-list">
                <p class="title">Genero</p>
           
            </div>

        <div class="sidebar-list">
            <p class="title">Lenguaje</p>
            <a href="./movie-list.html" menu-close
                class="sidebar-link" onclick='getMoviesList("with_original_language=es","Español")'>Español</a>

            <a href="./movie-list.html" menu-close
                class="sidebar-link" onclick='getMoviesList("with_original_language=en","Ingles")'>ingles</a>

        </div>

        <div class="sidebar-footer">
            <p class="copyright">
                Copyright 2024
            </p>
            <img src="./assets/images/tmdb-logo.svg" width="130"
                height="17" alt="database logo">
        </div>
        `;
    const genreLink = function(){
        for(const [genreId, genreName] of Object.entries(genreList)){
            
            const link = document.createElement("a"); // crea un link
            link.classList.add("sidebar-link"); // agrega la clase sidebar-link
            link.setAttribute("href", "./movie-list.html"); // agrega el atributo href
            link.setAttribute("menu-close", ""); // agrega el atributo menu-close
            link.setAttribute("onclick",`getMoviesList("with_genres=${genreId}","${genreName}")`);
            link.textContent = genreName;
            sidebarInner.querySelectorAll('.sidebar-list')[0].appendChild(link); // agrega el link al sidebarInner de la clase sidebar-list
    }
    const sidebar = document.querySelector("[sidebar]"); // obtiene el elemento sidebar
    sidebar.appendChild(sidebarInner); // agrega el sidebarInner
    toggleSidebar(sidebar); // toggleSidebar 
    }
    const toggleSidebar = function(sidebar){ // toggleSidebar


        const sidebarBtn = document.querySelector("[menu-btn]"); // obtiene el elemento menu-btn
        const sidebarTogglers = document.querySelectorAll("[menu-toggler]"); // obtiene el elemento menu-toggle 
        const sidebarClose = document.querySelectorAll("[menu-close]"); // obtiene el elemento menu-close 
        const overlay = document.querySelector("[overlay]"); // obtiene el elemento overlay 

        addEventOnElements(sidebarTogglers, "click", function(){ // escucha el evento click del elemento
            sidebar.classList.toggle("active");
            sidebarBtn.classList.toggle("active");
            overlay.classList.toggle("active");
        });
        addEventOnElements(sidebarClose, "click", function(){ // escucha el evento click del elemento
            sidebar.classList.remove("active");
            sidebarBtn.classList.remove("active");
            overlay.classList.remove("active");
        });
    }
}

