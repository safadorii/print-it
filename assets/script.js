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
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');

let compteur = 0;

function Carousel() {
    
    const image = `assets/images/slideshow/${slides[compteur].image}`;
    bannerImg.src = image;
    

    const tagLine = slides[compteur].tagLine;
    document.querySelector('p').innerHTML = tagLine;

   }


// le clic sur la flèche gauche
arrowLeft.addEventListener('click', function () {
    compteur = (compteur - 1);
    Carousel(compteur, 'left');
});

// le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
    compteur = (compteur + 1) ;
    Carousel(compteur, 'right');
});


