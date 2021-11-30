
//connexion a l'api via l'URL
fetch (`https://api.themoviedb.org/3/person/2888?api_key=d31b3c78860c89e16a7dc07680568b1c&language=fr-FR`,{
    method: 'GET',
    headers : {
        'Content-Type': 'application/json'
    }
})

//demande de reponse sous forme JSON
.then ( response => response.json())
.then((person) => {
    //selection de la class pour afficher l'image récuperée
    document.querySelector('.back__picture--photo').src="https://image.tmdb.org/t/p/h632"+ person.profile_path;
    //affichage du nom
        document.querySelector('.back__picture--overlay--biopic--text--title').textContent = person.name;
        //affichage de la date de naissance
            document.querySelector('.back__picture--overlay--biopic--text').textContent = person.birthday;
            //affichage du lieu de naissance
            document.querySelector('.place').textContent = person.place_of_birth;


})
.catch ((error) => {(alert(error))}); 



fetch (`https://api.themoviedb.org/3/person/2888/movie_credits?api_key=d31b3c78860c89e16a7dc07680568b1c&language=fr-FR`,{
    method: 'GET',
    headers : {
        'Content-Type': 'application/json'
    }
})
    .then ( response => response.json())
    .then ((films) =>{
        films.cast.forEach(film =>{
            //selection 
            document.querySelector('.back__picture--overlay--cards__films').innerHTML+=` <a class="back__picture--overlay--cards__films--img" href="#">
            <img class="back__picture--overlay--cards__films--img"
                src="https://image.tmdb.org/t/p/h632${film.poster_path}"
                alt="affiche film">
            <div class="cards--title">
                <p class="card-text">${film.title}</p>
            </div>
        </a>`
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            document.querySelector('.cards__films').innerHTML+=` <a class="cards__films--img" href="#">
            <img class="cards__films--imgOne"
                src="https://image.tmdb.org/t/p/h632${film.poster_path}"
                alt="affiche film">
            <div class="cards__films--title">
                <p class="card-text">${film.title}</p>
            </div>
        </a>`
           }
        })
    })
