// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

// -------- poloha panacka při startu
let panacek = document.querySelector('#panacek');
panacek.style.left = '100px';
panacek.style.top = '100px';

document.querySelector('#hudba').volume = 0.3;

// alert('Pro ultimátní zážitek ze hry povol přehrávání audia ve svém prohlížeči :)');


/* ---- funkce stisk klaves a hodnota
function stiskKlavesy(udalost) {  
console.log(udalost.key);	
}
*/

// ---- mince
let mince = document.querySelector('#mince');
let sirkaMince = 40;
let vyskaMince = 40;

// ---- panacek
let aktualniPozicePanacekLeft = panacek.offsetLeft;
// console.log(aktualniPozicePanacekLeft);
let aktualniPozicePanacekTop = panacek.offsetTop;
// console.log(aktualniPozicePanacekTop);
let panacekSirka = 64;
let panacekVyska = 70;

let krok = 20;
let poziceMinceLeft;
let poziceMinceTop;

function umistiMinci() {
	
	mince.style.left = Math.floor(Math.random() * (window.innerWidth - sirkaMince)) + 'px';
	console.log(poziceMinceLeft);

	mince.style.top = Math.floor(Math.random() * (window.innerHeight - vyskaMince)) + 'px';
	console.log(poziceMinceTop);
}	

function sezerMinci() {

		// ---- zleva
	if (!(parseInt(panacek.style.left) + panacekSirka < parseInt(poziceMinceLeft) || 
		// ---- zprava
	parseInt(poziceMinceLeft) + sirkaMince < parseInt(panacek.style.left) ||
		// ---- shora
	parseInt(panacek.style.top) + panacekVyska < parseInt(poziceMinceTop) ||
		// ---- zespoda
	parseInt(poziceMinceTop) + vyskaMince < parseInt(panacek.style.top))) {
		
		//panacek a mince se potkavaji
		console.log('potkali se!');
		// mince.style.display = 'none';
		
	}
}


function porovnejPozici()



function stiskKlavesy(udalost) {
	
	if (udalost.keyCode === 40) {
		// console.log('zmáčkla jsem šipku dolu');
		panacek.style.top = aktualniPozicePanacekTop + krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek.png";

		if (parseInt(panacek.style.top) >= 0 && parseInt(panacek.style.top) < window.innerHeight - panacekVyska) {
			panacek.style.top = aktualniPozicePanacekTop + krok + 'px';
		} else {
			panacek.style.top = aktualniPozicePanacekTop - krok + 'px';
		}

	} else if (udalost.keyCode === 39) {
		// console.log('zmáčkla jsem šipku doprava');
		panacek.style.left = aktualniPozicePanacekLeft + krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek-vpravo.png";

		if (parseInt(panacek.style.left) >= 0 && parseInt(panacek.style.left) < window.innerWidth - panacekSirka) {
			panacek.style.left = aktualniPozicePanacekLeft + krok + 'px';
		} else {
			panacek.style.left = aktualniPozicePanacekLeft - krok + 'px';
		}

	} else if (udalost.keyCode === 38) {
		// console.log('zmáčkla jsem šipku nahoru');
		panacek.style.top = aktualniPozicePanacekTop - krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek-nahoru.png";

		if (parseInt(panacek.style.top) > 0 && parseInt(panacek.style.top) < window.innerHeight - panacekVyska) {
			panacek.style.top = aktualniPozicePanacekTop - krok + 'px';
		} else {
			panacek.style.top = aktualniPozicePanacekTop + krok + 'px';
		}

	} else if (udalost.keyCode === 37) {
		// console.log('zmáčkla jsem šipku doleva');
		panacek.style.left = aktualniPozicePanacekLeft - krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek-vlevo.png";

		if (parseInt(panacek.style.left) > 0 && parseInt(panacek.style.left) < window.innerWidth - panacekSirka) {
			panacek.style.left = aktualniPozicePanacekLeft - krok + 'px';
		} else {
			panacek.style.left = aktualniPozicePanacekLeft + krok + 'px';
		}
	}

	sezerMinci()

}





