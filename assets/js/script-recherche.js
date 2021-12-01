const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
 
const API_KEY = 'api_key=02b73bb4996a66e2fb13ce6cd954dfab';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_SEARCH = BASE_URL + '/search/movie?'+ API_KEY + '&append_to_response=videos,tv,images,person' + '&language=fr';//url du fetch
const newURL = API_SEARCH + '&query=' + params.mySearch;
const visuelSearch = 'https://image.tmdb.org/t/p/w500';
  
  fetch(newURL, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
     
    }
  })
    .then(data => data.json())
    .then(resultat => { 
      
        const movies = resultat.results;
        movies.forEach(movie => {
            const movieBlock = createMovieContainer(movie);
            movieSearchable.appendChild(movieBlock);
        })
    })

    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });



    function createMovieContainer (movie) {
        const movieElement = document.createElement('div');
        movieElement.setAttribute('class', 'movie');
      
        const movieTemplate = `
          <section class="section">
          ${movieSelection(movie)}
          </section>
        `;
      
        movieElement.innerHTML = movieTemplate;
        return movieElement;
      }

      const movieSearchable = document.querySelector('.movie-searchable');


function movieSelection(movie) {
     
    return `<a href="./detail-film.html?id=${resultat.id}">
    <img class="img_search" src="${visuelSearch}${movie.poster_path}" data-movie-id="${movie.id}">
    </a>`;
 

}