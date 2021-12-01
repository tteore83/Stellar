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

////////////drag and scroll sections films/tv

/*const element = document.querySelectorAll(".scrollMouse");
element.forEach(mouseEl => {
mouseEl.addEventListener("mousedown", mouseDownHandler);
});*/

const element = document.querySelector(".parent-movies");
element.scrollLeft = 0;
element.addEventListener("mousedown", mouseDownHandler);

element.scrollLeft = 0;
let pos = {
  left: 0,
  x: 0
};

function mouseDownHandler(event) {
  
  pos = {
    left: element.scrollLeft,
    x: event.clientX
  };

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
}

function mouseMoveHandler(event) {
  
  element.scrollLeft = pos.left - (event.clientX - pos.x);
}

function mouseUpHandler() {
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);
}
////////////////////////////////////////////////////////////////
const elementRate = document.querySelector(".parent-movies-rate");
elementRate.scrollLeft = 0;
elementRate.addEventListener("mousedown", mouseDownHandlerRate);

let posRate = {
  left: 0,
  x: 0
};

function mouseDownHandlerRate(event) {
  posRate = {
    left: elementRate.scrollLeft,
    x: event.clientX
  };

  document.addEventListener("mousemove", mouseMoveHandlerRate);
  document.addEventListener("mouseup", mouseUpHandlerRate);
}

function mouseMoveHandlerRate(event) {
  
  elementRate.scrollLeft = posRate.left - (event.clientX - posRate.x);
}

function mouseUpHandlerRate() {
  document.removeEventListener("mousemove", mouseMoveHandlerRate);
  document.removeEventListener("mouseup", mouseUpHandlerRate);
}

///////////////////////////////////////////////////////////////////////

const elementPopular = document.querySelector(".parent-movies-popular");
elementPopular.scrollLeft = 0;
elementPopular.addEventListener("mousedown", mouseDownHandlerPop);

let posPop = {
  left: 0,
  x: 0
};

function mouseDownHandlerPop(event) {
  posPop = {
    left: elementPopular.scrollLeft,
    x: event.clientX
  };

  document.addEventListener("mousemove", mouseMoveHandlerPop);
  document.addEventListener("mouseup", mouseUpHandlerPop);
}

function mouseMoveHandlerPop(event) {
  
  elementPopular.scrollLeft = posPop.left - (event.clientX - posPop.x);
}

function mouseUpHandlerPop() {
  document.removeEventListener("mousemove", mouseMoveHandlerPop);
  document.removeEventListener("mouseup", mouseUpHandlerPop);
}


////////////////////////////SCROLL STARS////////////////////////////////////
const elementStar = document.querySelector(".parent-movies-stars");
elementStar.scrollLeft = 0;
elementStar.addEventListener("mousedown", mouseDownHandlerStar);

let posStar = {
  left: 0,
  x: 0
};

function mouseDownHandlerStar(event) {
  posStar = {
    left: elementStar.scrollLeft,
    x: event.clientX
  };

  document.addEventListener("mousemove", mouseMoveHandlerStar);
  document.addEventListener("mouseup", mouseUpHandlerStar);
}

function mouseMoveHandlerStar(event) {
  
  elementStar.scrollLeft = posStar.left - (event.clientX - posStar.x);
}

function mouseUpHandlerStar() {
  document.removeEventListener("mousemove", mouseMoveHandlerStar);
  document.removeEventListener("mouseup", mouseUpHandlerStar);
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// TMDB
const API_KEY = 'api_key=02b73bb4996a66e2fb13ce6cd954dfab';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;  //url du fetch

/*********************************************/
        /* Toggle FILMS/TV Tendances*/
/*********************************************/
document.querySelectorAll('.trends').forEach(icon => {
    icon.addEventListener('click', ()=>{
      let filter = icon.dataset.filter;
      Trending(filter)
    });
});

                
        function Trending(filter = 'movie') {

            const API_TRENDING = `https://api.themoviedb.org/3/trending/${filter}/day?api_key=02b73bb4996a66e2fb13ce6cd954dfab&language=fr`;//url du fetch
                  
                 
          fetch(API_TRENDING, { 
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
              
            }
          })
            .then(data => data.json())
            .then(data => {
              document.querySelector('.__container-movies').innerHTML = '';
              data.results.forEach( film => {
                document.querySelector('.__container-movies').innerHTML += '<li>'+
              '<img src="https://image.tmdb.org/t/p/w200'+ film.poster_path +'"/>'+
              "<h1>" + film.title + "</h1>" + 
              "<p class='vote'>" + film.vote_average + "<p>" +
              '<div class="preview"><p>' + film.overview + '</p><a href="./detail-film.html?id=' + film.id + '">En savoir plus »</a></div>' +
              '</li>';
              });
              
      
            })
            .catch(function(err) {
              console.log('Fetch Error :-S', err);
            });
        } 
        Trending()

       

/*****************************************************/
          /* Toggle FILMS/TV Les mieux notés*/
/****************************************************/
//const API_BEST_RATES = BASE_URL + '/movie/top_rated?'+ API_KEY + '&language=fr';//url du fetch

document.querySelectorAll('.rating').forEach(iconRate => {
    iconRate.addEventListener('click', ()=>{
      let rate = iconRate.dataset.filter;
      rating(rate)
      
    });
});

                
        function rating(filter = 'movie') {

            const API_BEST_RATES = `https://api.themoviedb.org/3/${filter}/top_rated?api_key=02b73bb4996a66e2fb13ce6cd954dfab&language=fr`;//url du fetch
                  
                 
          fetch(API_BEST_RATES, { 
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
              
            }
          })
            .then(data => data.json())
            .then(data => {
              document.querySelector('.__container-rate').innerHTML = '';
              data.results.forEach( item => {
                document.querySelector('.__container-rate').innerHTML += '<li>'+
              '<img src="https://image.tmdb.org/t/p/w200'+ item.poster_path +'"/>'+
              "<h1>" + item.title + "</h1>" + 
              "<p class='vote'>" + item.vote_average + "<p>" +
              '<div class="preview"><p>' + item.overview + '</p><a href="./detail-film.html?id=' + item.id + '">En savoir plus »</a></div>' +
              '</li>';
              });
              
      
            })
            .catch(function(err) {
              console.log('Fetch Error :-S', err);
            });
        } 
        rating()

/*****************************************************/
          /* Toggle FILMS/TV Les plus populaires*/
/****************************************************/
//const API_POPULAR = BASE_URL + '/movie/popular?'+ API_KEY + '&language=fr';//url du fetch      

document.querySelectorAll('.popular').forEach(iconPopular => {
  iconPopular.addEventListener('click', ()=>{
    let popular = iconPopular.dataset.filter;
    getPopular(popular)
    
  });
});

              
      function getPopular(filter = 'movie') {

          const API_POPULAR = `https://api.themoviedb.org/3/${filter}/popular?api_key=02b73bb4996a66e2fb13ce6cd954dfab&language=fr`;//url du fetch
                
               
        fetch(API_POPULAR, { 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
            
          }
        })
          .then(data => data.json())
          .then(data => {
            document.querySelector('.__container-popular').innerHTML = '';
            data.results.forEach( itemPopular => {
              document.querySelector('.__container-popular').innerHTML += '<li>'+
            '<img src="https://image.tmdb.org/t/p/w200'+ itemPopular.poster_path +'"/>'+
            "<h1>" + itemPopular.title + "</h1>" + 
            "<p class='vote'>" + itemPopular.vote_average + "<p>" +
            '<div class="preview"><p>' + itemPopular.overview + '</p><a href="./detail-film.html?id=' + itemPopular.id + '">En savoir plus »</a></div>' +
            '</li>';
            });
            
    
          })
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
      } 
      getPopular()

      /*****************************************************/
          /* Stars populaires*/
    /****************************************************/
    //const API_STARS = BASE_URL + '/person/popular?'+ API_KEY + '&language=fr';//url du fetch        
             
          function stars() {
    
            const API_STARS = BASE_URL + '/person/popular?'+ API_KEY + '&language=fr';//url du fetch
                   
            fetch(API_STARS, { 
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
                
              }
            })
              .then(data => data.json())
              .then(data => {
                document.querySelector('.__container-stars').innerHTML = '';
                data.results.forEach( itemStar => {
                document.querySelector('.__container-stars').innerHTML += '<li>'+
              '<a href="./detail.html?id=' + itemStar.id + '"><p>' + itemStar.name + '</p></a>' +
              "<img class='saturn' src='./img/section-saturn-profile.svg'" + "/>" +
              '<img class="profile" src="https://image.tmdb.org/t/p/w200'+ itemStar.profile_path+'"/>'+ 
              '</li>';

                });
                
              })
              .catch(function(err) {
                console.log('Fetch Error :-S', err);
              });
          } 
          stars()



    

