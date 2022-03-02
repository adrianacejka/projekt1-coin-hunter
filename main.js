// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

function stiskKlavesy(udalost) {
	console.log(udalost.key);

}


let panacek = document.querySelector('#panacek');

// panacek.style.left = '400px';
// panacek.style.top = '200px';

let pozicePanackaLeft = panacek.style.left = '50px';
let pozicePanackaTop = panacek.style.top = '100px';

let aktualniPanacekLeft = panacek.offsetLeft + 'px';
console.log(aktualniPanacekLeft);

let aktualniPanacekTop = panacek.offsetTop + 'px';
console.log(aktualniPanacekTop);


let krok


udalost.key.ArrowDown
udalost.key.ArrowRight
udalost.key.ArrowUp
udalost.key.ArrowLeft





