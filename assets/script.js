
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');

let compteur = 0;

// On initialise l'image et la tagline en fonction du tableau
bannerImg.src = `assets/images/slideshow/${slides[compteur].image}`;
tagLine.innerHTML = slides[compteur].tagLine;

// le clic sur la flèche gauche
arrowLeft.addEventListener('click', function () {
	// Compteur négatif
    compteur--;
	// On retourne à la fin du tableau si le compteur est inférieur à 0
	if(compteur < 0){
		compteur = slides.length-1;
	}
	// On met à jour l'image et la tagline
	bannerImg.src = `assets/images/slideshow/${slides[compteur].image}`;
	tagLine.innerHTML = slides[compteur].tagLine;
	// Retirer la classe 'dot_selected' de tous les dots
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    // Ajouter la classe 'dot_selected' au dot correspondant
    dots[compteur].classList.add('dot_selected');
});

// le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
	// Compteur positif
	compteur++;
	// On remet le compteur à 0 lorsque l'on arrive à la fin du tableau
	if(compteur == slides.length){
		compteur = 0;
	}
	// On met à jour l'image et la tagline
	bannerImg.src = `assets/images/slideshow/${slides[compteur].image}`;
	tagLine.innerHTML = slides[compteur].tagLine;
	// Retirer la classe 'dot_selected' de tous les dots
	dots.forEach(dot => dot.classList.remove('dot_selected'));
    // Ajouter la classe 'dot_selected' au dot correspondant
    dots[compteur].classList.add('dot_selected');
});