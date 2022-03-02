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
  
//aktualni poloha panacka
let aktualniPanacekLeft = panacek.offsetLeft + 'px';
console.log(aktualniPanacekLeft);

let aktualniPanacekTop = panacek.offsetTop + 'px';
console.log(aktualniPanacekTop);

//funkce stisk klaves a hodnota

// function stiskKlavesy(udalost) {
// console.log(udalost.key);
	
// }

function stiskKlavesy(udalost) {

	//console.log(udalost);

	if (udalost.keyCode === 40) {
		console.log('zmáčkla jsem šipku dolu');
	} else if (udalost.keyCode === 39) {
		console.log('zmáčkla jsem šipku doprava');
	} else if (udalost.keyCode === 38) {
		console.log('zmáčkla jsem šipku nahoru');
	}	else if (udalost.keyCode === 37) {
		console.log('zmáčkla jsem šipku doleva');
	}


	
	let aktualniPozicePanacekLeft = panacek.offsetLeft + 'px';
	console.log(aktualniPozicePanacekLeft);

	let aktualniPozicePanacekTop = panacek.offsetTop + 'px';
	console.log(aktualniPozicePanacekTop);


}




let krok


// udalost.key.ArrowDown
// udalost.key.ArrowRight
// udalost.key.ArrowUp
// udalost.key.ArrowLeft





