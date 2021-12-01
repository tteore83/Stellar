///Click menu burger (mobile)
let burger = document.querySelector('#burger');
burger.addEventListener('click', openMenu);

function openMenu() {
  document.querySelector('ol').style.display = 'block';
}

//Close menu (mobile)
window.addEventListener('click', menuClose);

function menuClose(event) {
    if (event.target.matches('ol')) {
        document.querySelector('ol').style.display = 'none';
    }
    
}

///Click menu dropdown (web)
let menuWeb = document.querySelector('#genres-menu');
menuWeb.addEventListener('click', openMenuWeb);

function openMenuWeb() {
  document.querySelector('ol').style.display = 'block';
}

//Close menu (web)
window.addEventListener('click', menuCloseWeb);

function menuCloseWeb(event) {
    if (event.target.matches('ol')) {
        document.querySelector('ol').style.display = 'none';
    }
    
}

/////////////////////////Recupération ID////////////////////////////

let query = window.location.search // ?id=17521
const params = new URLSearchParams(query); // ['id': 17521]

  function genresMovies(id) {

    let urlDetail = 'https://api.themoviedb.org/3/discover/movie/?api_key=02b73bb4996a66e2fb13ce6cd954dfab&sort_by=popularity.desc&with_genres='+ id +'&language=fr';
   
    fetch(urlDetail, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
            
          }
    })
    
    .then(response => response.json())
    .then(response => {
        document.querySelector('.detail-genres').innerHTML += '<div>'+
        response.results.forEach( genreMovie => {
            document.querySelector('.detail-genres').innerHTML += '<li>'+
          '<img src="https://image.tmdb.org/t/p/w200'+ genreMovie.poster_path +'"/>'+
          "<h1>" + genreMovie.title + "</h1>" + 
          "<p class='vote'>" + genreMovie.vote_average + "<p>" +
          '<div class="preview"><p>' + genreMovie.overview + '</p><a href="./detail-film.html?id=' + genreMovie.id + '">En savoir plus »</a></div>' +
          '</li>';
          });
    })
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
      
}

genresMovies(params.get("id"));



