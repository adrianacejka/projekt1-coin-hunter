// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

// ---------------- poloha panacka při startu
let panacek = document.querySelector('#panacek');
let panacekX = panacek.style.left = '300px';
let panacekY = panacek.style.top = '300px'

document.querySelector('#hudba').volume = 0.3;

// alert('Pro ultimátní zážitek ze hry povol přehrávání audia ve svém prohlížeči :)');

  
/* ---------------- aktualni poloha panacka

	let aktualniPanacekLeft = panacek.offsetLeft + 'px';
	console.log(aktualniPanacekLeft);

	let aktualniPanacekTop = panacek.offsetTop + 'px';
	console.log(aktualniPanacekTop);
*/

/* ---------------- funkce stisk klaves a hodnota

	function stiskKlavesy(udalost) {  
	console.log(udalost.key);	
	}
*/


function stiskKlavesy(udalost) {

	let aktualniPozicePanacekLeft = panacek.offsetLeft;
	// console.log(aktualniPozicePanacekLeft);

	let aktualniPozicePanacekTop = panacek.offsetTop;
	// console.log(aktualniPozicePanacekTop);

	let krok = 20;
	let panacekSirka = 64;
	let panacekVyska = 70;

	if (udalost.keyCode === 40) {
		// console.log('zmáčkla jsem šipku dolu');
		panacekY = aktualniPozicePanacekTop + krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek.png";

		if (parseInt(panacek.style.top) >= 0 && parseInt(panacek.style.top) < window.innerHeight - panacekVyska) {
			panacekY = aktualniPozicePanacekTop + krok + 'px';
		} else {
			panacekY = aktualniPozicePanacekTop - krok + 'px';
		}

	} else if (udalost.keyCode === 39) {
		// console.log('zmáčkla jsem šipku doprava');
		panacekX = aktualniPozicePanacekLeft + krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek-vpravo.png";

		if (parseInt(panacek.style.left) >= 0 && parseInt(panacek.style.left) < window.innerWidth - panacekSirka) {
			panacekX = aktualniPozicePanacekLeft + krok + 'px';
		} else {
			panacekX = aktualniPozicePanacekLeft - krok + 'px';
		}

	} else if (udalost.keyCode === 38) {
		// console.log('zmáčkla jsem šipku nahoru');
		panacekY = aktualniPozicePanacekTop - krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek-nahoru.png";

		if (parseInt(panacek.style.top) > 0 && parseInt(panacek.style.top) < window.innerHeight - panacekVyska) {
			panacekY = aktualniPozicePanacekTop - krok + 'px';
		} else {
			panacekY = aktualniPozicePanacekTop + krok + 'px';
		}

	} else if (udalost.keyCode === 37) {
		// console.log('zmáčkla jsem šipku doleva');
		panacekX = aktualniPozicePanacekLeft - krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek-vlevo.png";

		if (parseInt(panacek.style.left) > 0 && parseInt(panacek.style.left) < window.innerWidth - panacekSirka) {
			panacekX = aktualniPozicePanacekLeft - krok + 'px';
		} else {
			panacekX = aktualniPozicePanacekLeft + krok + 'px';
		}
	}
 
}

// ------------ náhodná pozice mince

let mince = document.querySelector('#mince');
let minceSirka = 40;
let minceVyska = 40;

let minceX = mince.style.left = Math.floor(Math.random() * (window.innerWidth - minceSirka)) + 'px';
console.log(minceX);

let minceY = mince.style.top = Math.floor(Math.random() * (window.innerHeight - minceVyska)) + 'px';
console.log(minceY);


// ----------- prolnuti pozic panacka a mince
let panacekSirka = 64;
let panacekVyska = 70;

	// ---- zleva
if (!(panacekX + panacekSirka < minceX || 
	// ---- zprava
	minceX + minceSirka < panacekX ||
	// ---- shora
	panacekY + panacekVyska < minceY ||
	// ---- zespoda
	minceY + minceVyska < panacekY)) {
		//panacek a mince se potkavaji
		mince.style.position = hidden;
	}