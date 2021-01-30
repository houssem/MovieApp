// API/TMDBApi.js

import { cos } from "react-native-reanimated";

const API_TOKEN = "812141b5a8014fd771c21d73bb8aa598";

export function getFilmsFromApiWithSearchedText (text,page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  + "&page="+page;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    })
}


export function getImageFromApi (name) {
  const url = 'https://image.tmdb.org/t/p/w300' + name
  // console.log(url)
  return url 
}

// Récupération du détail d'un film
export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
