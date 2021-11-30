/**
 * Vérification des données d'un formulaire
 */

// On attends que le DOM soit chargé
window.onload = function() {

    // Sélectionne un élément dans le DOM ayant l'ID "pseudo"
    let pseudo = document.getElementById('pseudo');

    // Applique un écouteur d'évènement sur l'élément précedemment sélectionné
    // En cas de changement de valeur du champ, la fonction "verifPseudo" sera executée
    pseudo.addEventListener('change', verifPseudo);

    // Sélection de l'élément "email"
    let email = document.getElementById('email');
    email.addEventListener('change', verifEmail);

    // Sélection de l'élément "mot de passe"
    // document.querySelector('#password'); -> Sélectionne l'ID "password"
    // document.querySelector('.register'); -> Sélectionne la classe CSS "register"
    // document.querySelector('input'); -> Sélectionne l'élément HTML "input"
    // ATTENTION ! querySelector sélectionne seulement le premier élément trouvé !
    let password = document.querySelector('#password');
    password.addEventListener('change', verifPwd);

    // Sélection du champ "confirm password"
    let confirmPassword = document.querySelector('#confirm-password');
    confirmPassword.addEventListener('change', verifConfirmPwd);

    // Sélection du bouton "eye"
    let bouton = document.querySelector('button');
    bouton.addEventListener('click', viewPassword);
}

// Permet de voir le mot de passe en clair et de le cacher
function viewPassword()
{
    let password = document.querySelector('#password');

    // getAttribute() permet de récupérer la valeur d'un attribut
    // sur un élément HTML
    let type = password.getAttribute('type');

    if (type === 'password') {
        password.setAttribute('type', 'text');
    }
    else {
        password.setAttribute('type', 'password');
    }
}

// Vérifier que la confirmation soit identique au mot de passe
function verifConfirmPwd()
{
    let error = document.querySelector('#confirmError');

    // Récupère le champ "password"
    let password = document.querySelector('#password');

    // Compare la valeur du champ 'confirm password" avec la valeur du champ "password"
    if (this.value === password.value) {
        this.style.borderColor = 'green';
        error.style.display = 'none';
    }
    else {
        this.style.borderColor = 'red';
        error.style.display = 'block';
    }
}

// Vérification du mot de passe
function verifPwd()
{
    let error = document.querySelector('#pwdError');

    if (this.value.length >= 6) {
        this.style.borderColor = 'green';
        error.style.display = 'none';
    }
    else {
        this.style.borderColor = 'red';
        error.style.display = 'block';
    }
}

// Vérification de l'adresse email
function verifEmail()
{
    // Créer un élément HTML "<p class="error">Votre adresse email est invalide</p>"
    let error = document.createElement('p'); // Création du tag HTML "p"
    error.classList.add('error'); // Ajout de la classe CSS "error"
    error.style.display = "block"; // Changement de la valeur du display
    error.innerText = "Votre adresse email est invalide"; // Ajout d'un texte

    // Si l'adresse email est correct, on met les bordures en vert
    if (checkEmail(this.value)) {
        this.style.borderColor = 'green';

        // Supprime l'élément suivant le champ "email" si celui-ci existe
        if (!this.nextSibling.length) {
            this.nextElementSibling.remove(error);
        }
    }
    else {
        this.style.borderColor = 'red';

        // Si uaucun élément suit l'élément "email", on ajoute notre message d'erreur
        // .nextSibling = récupère un élément juste après un autre élément
        if (this.nextSibling.length) {
            // Ajoute le nouvel élément HTML juste après notre champ email
            this.after(error);
        }
    }
}

// Expression régulière permettant la vérification syntaxique d'une adresse email
function checkEmail(email)
{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Vérification du pseudonyme
function verifPseudo()
{
    // Sélectionne le message d'erreur
    let error = document.getElementById('pseudoError');

    /**
     * "this" correspond à l'élément ayant enclenché cette fonction, soit
     * dans notre cas de figure "pseudo"
     */ 
    // console.log(this.value);

    // On vérifie que le nombre de caractères soit égal ou supérieur à 5
    // .value -> Récupère la valeur contenu dans le champs texte
    // .length -> Retourne le nombre de caractères de la chaîne de caractères
    if (this.value.length >= 5) {
        // Change la bordure du champ en vert
        // this.style.border = "1px solid green";
        this.style.borderColor = "green";
        error.style.display = 'none';
    }
    else {
        // Change la bordure du champ en rouge
        this.style.borderColor = "red";
        error.style.display = 'block';
    }
}