// Récupère le bouton :
let mybutton = document.getElementById("myBtn");

// Lorsque l'utilisateur fait défiler la page, exécute la fonction "scrollFunction"
window.onscroll = function() {scrollFunction()};

// Fonction qui vérifie le défilement et affiche le bouton
function scrollFunction() {
    // Vérifie si le défilement est supérieur à 20px
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"; // Affiche le bouton
    } else {
        mybutton.style.display = "none"; // Cache le bouton
    }
}

// Lorsque l'utilisateur clique sur le bouton, fait défiler la page vers le haut
function topFunction() {
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
}
