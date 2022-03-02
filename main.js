// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

//poloha panacka start
let panacek = document.querySelector('#panacek');
panacek.style.left = '300px';
panacek.style.top = '300px';
  
// aktualni poloha panacka
// let aktualniPanacekLeft = panacek.offsetLeft + 'px';
// console.log(aktualniPanacekLeft);

// let aktualniPanacekTop = panacek.offsetTop + 'px';
// console.log(aktualniPanacekTop);

//funkce stisk klaves a hodnota

// function stiskKlavesy(udalost) {
// console.log(udalost.key);
	
// }



function stiskKlavesy(udalost) {

	//console.log(udalost);

	let aktualniPozicePanacekLeft = panacek.offsetLeft
	console.log(aktualniPozicePanacekLeft);

	let aktualniPozicePanacekTop = panacek.offsetTop
	console.log(aktualniPozicePanacekTop);

	let krok = 20;

	if (udalost.keyCode === 40) {
		console.log('zmáčkla jsem šipku dolu');
		panacek.style.top = aktualniPozicePanacekTop + krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek.png";

		if (parseInt(panacek.style.top) + 70 >= 0 && parseInt(panacek.style.top) < window.innerHeight - 70) {
			panacek.style.top = aktualniPozicePanacekTop + krok + 'px';
		} else {
			panacek.style.top = aktualniPozicePanacekTop - krok + 'px';
		}

	} else if (udalost.keyCode === 39) {
		console.log('zmáčkla jsem šipku doprava');
		panacek.style.left = aktualniPozicePanacekLeft + krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek-vpravo.png";

		if (parseInt(panacek.style.left) >= 0 && parseInt(panacek.style.left) < window.innerWidth - 70) {
			panacek.style.left = aktualniPozicePanacekLeft + krok + 'px';
		} else {
			panacek.style.left = aktualniPozicePanacekLeft - krok + 'px';
		}

	} else if (udalost.keyCode === 38) {
		console.log('zmáčkla jsem šipku nahoru');
		panacek.style.top = aktualniPozicePanacekTop - krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek-nahoru.png";

		if (parseInt(panacek.style.top) >= 0 && parseInt(panacek.style.top) < window.innerHeight - 70) {
			panacek.style.top = aktualniPozicePanacekTop - krok + 'px';
		} else {
			panacek.style.top = aktualniPozicePanacekTop + krok + 'px';
		}

	} else if (udalost.keyCode === 37) {
		console.log('zmáčkla jsem šipku doleva');
		panacek.style.left = aktualniPozicePanacekLeft - krok + 'px';
		document.querySelector('#panacek').src = "obrazky/panacek-vlevo.png";

		if (parseInt(panacek.style.left) >= 0 && parseInt(panacek.style.left) < window.innerWidth - 70) {
			panacek.style.left = aktualniPozicePanacekLeft - krok + 'px';
		} else {
			panacek.style.left = aktualniPozicePanacekLeft + krok + 'px';
		}
	}




}











