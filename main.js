
alert('Pro ultimátní zážitek ze hry povol přehrávání audia ve svém prohlížeči. Vyhraješ, pokud sesbíráš pět mincí. Ale i tak potom můžeš hrát bez obav dál.... Pro posun panáčka použij šipky na klávesnici. Hezkou zábavu!');

let audio = document.querySelector('#hudba');
let zvukMince = document.querySelector('#zvukmince');
let score = document.querySelector('#score');
let pocitadlo = 0;
let fanfara = document.querySelector('#zvukfanfara');

let panacek = document.querySelector('#panacek');
let pozicePanacekLeft;
let aktualniPozicePanacekLeft;
let pozicePanacekTop;
let aktualniPozicePanacekTop;
let panacekSirka = 64;
let panacekVyska = 70;

let krok = 20;

let mince = document.querySelector('#mince');
let sirkaMince = 40;
let vyskaMince = 40;
let poziceMinceLeft;
let poziceMinceTop;


// ******* Funkce ********************

function zapniAudio() {
	audio.volume = 0.3;
}

function zahrajPriSberuMince() {
	zvukMince.play();
}

function poziceMince() {
	poziceMinceLeft = mince.style.left = Math.floor(Math.random() * (window.innerWidth - sirkaMince)) + 'px';
	// console.log(poziceMinceLeft);
	poziceMinceTop = mince.style.top = Math.floor(Math.random() * (window.innerHeight - vyskaMince)) + 'px';
	// console.log(poziceMinceTop);
}

function vyhra() {
	if (pocitadlo === 5) {
		fanfara.play();
		score.innerHTML = '<span class="vyhra">Jupííí! Máš pět peněz! <br><br> Můžeš ale hrát dál...</span>';
	}
}

function prictiBod() {
	pocitadlo++;	
	score.textContent = pocitadlo;
	console.log(pocitadlo);
	vyhra();
}

function priNacteniStranky() {
	zapniAudio();
	poziceMince();
	panacek.style.left = '300px';
	panacek.style.top = '300px';
}

function seberMinci() {
	
	if (!(parseInt(panacek.style.left) + panacekSirka < parseInt(poziceMinceLeft) || 
	parseInt(poziceMinceLeft) + sirkaMince < parseInt(panacek.style.left) ||
	parseInt(panacek.style.top) + panacekVyska < parseInt(poziceMinceTop) ||
	parseInt(poziceMinceTop) + vyskaMince < parseInt(panacek.style.top))) {
		
		console.log('potkali se!');
		zahrajPriSberuMince();
		poziceMince();
		prictiBod();	
	}
}

function priStiskuKlavesy(udalost) {
	aktualniPozicePanacekLeft = panacek.offsetLeft;
	aktualniPozicePanacekTop = panacek.offsetTop;

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


	seberMinci();
	
}







