'use strict';

const api_key = '02fff9adaa06a80ff26a70010329fb7a';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

// recuperar datos de un servidor usando la url

const fetchDataFromServer= function(url, callback, optionalParam){
    fetch(url).then(response => response.json()).then(data => callback(data, optionalParam));
}

export {imageBaseURL, api_key, fetchDataFromServer};