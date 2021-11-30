// Récupère la DIV ayant la classe CSS "dropdown"
let dropdown = document.querySelector('.dropdown');

// Ajoute un écouteur d'évènement sur le bouton à l'intérieur de la DIV "dropdown"
dropdown.querySelector('.dropdown__button').addEventListener('click', function() {
  // Le "toggle" permet d'ajouter une classe CSS si elle n'est pas présente sur un élément ou la retire si
  // celle-ci est présente sur un élément
  dropdown.querySelector('.dropdown__menu').classList.toggle('dropdown__menu--open');
});

// Clic en dehors du bouton dropdown active la fermeture du menu
window.addEventListener('click', function(event) {
  // Si la cible du clic ne correspond pas au bouton de la dropdown
  if (!event.target.matches('.dropdown__button')) {
    // Alors je ferme le menu de la dropdown
    dropdown.querySelector('.dropdown__menu').classList.remove('dropdown__menu--open');
  }
});