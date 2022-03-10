// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

// ---------------- poloha panacka při startu
let panacek = document.querySelector('#panacek');
panacek.style.left = '300px';
panacek.style.top = '300px';

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


let mince = document.querySelector('#mince');
let sirkaMince = 40;
let vyskaMince = 40;

let poziceMinceLeft = Math.floor(Math.random() * (window.innerWidth - sirkaMince)) + 'px';
mince.style.left = poziceMinceLeft;
console.log(poziceMinceLeft);

let poziceMinceTop = Math.floor(Math.random() * (window.innerHeight - vyskaMince)) + 'px';
mince.style.top = poziceMinceTop;
console.log(poziceMinceTop);


let panacekSirka = 64;
let panacekVyska = 70;

function stiskKlavesy(udalost) {

	let aktualniPozicePanacekLeft = panacek.offsetLeft;
	// console.log(aktualniPozicePanacekLeft);

	let aktualniPozicePanacekTop = panacek.offsetTop;
	// console.log(aktualniPozicePanacekTop);

	let krok = 20;
	

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


	// ----------- prolnuti pozic panacka a mince

	if (!(parseInt(panacek.style.left) + panacekSirka < parseInt(poziceMinceLeft) || 
	// ---- zprava
	parseInt(poziceMinceLeft) + sirkaMince < parseInt(panacek.style.left) ||
	// ---- shora
	parseInt(panacek.style.top) + panacekVyska < parseInt(poziceMinceTop) ||
	// ---- zespoda
	parseInt(poziceMinceTop) + vyskaMince < parseInt(panacek.style.top))) {
		
		//panacek a mince se potkavaji
		console.log('potkali se!');
		mince.style.display = 'none';
		
	}

}





