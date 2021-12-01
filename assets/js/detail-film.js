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

  function detailFilm(id) {

    let urlDetail = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=02b73bb4996a66e2fb13ce6cd954dfab&language=fr';
   
    fetch(urlDetail, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
            
          }
    })
    
    .then(response => response.json())
    .then(movie => {
        document.querySelector('.detail-movie').innerHTML += '<div>'+
              "<p>" + movie.title + "</p>" + 
              '<img class="poster" src="https://image.tmdb.org/t/p/w200'+ movie.poster_path +'"/>'+ 
              '</div>';
    })
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
      
}

detailFilm(params.get("id"));



