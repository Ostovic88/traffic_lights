function semafor() {

var boje1 = document.getElementsByClassName('boje1');
var boje2 = document.getElementsByClassName('boje2');

	boje1[0].style.background = 'red';
	boje1[1].style.background = 'grey';
	boje1[2].style.background = 'grey';
	boje2[0].style.background = 'red';
	boje2[1].style.background = 'grey';
	boje2[2].style.background = 'grey';

	function promijeniUZutoPrvi() {
		boje1[1].style.background = 'yellow';
	}


function promijeniUZelenoPrvi() {
	boje1[0].style.background = 'grey';
	boje1[1].style.background = 'grey';
	boje1[2].style.background = 'green';
	boje2[0].style.background = 'red';
	boje2[1].style.background = 'grey';
	boje2[2].style.background = 'grey';
}

function vratiUCrvenoPrvi(){
	boje1[0].style.background = 'red';
	boje1[1].style.background = 'grey';
	boje1[2].style.background = 'grey';
}

function promijeniUZutoDrugi() {
	boje2[1].style.background = 'yellow';
}

function promijeniUZelenoDrugi() {
	boje1[0].style.background = 'red';
	boje1[1].style.background = 'grey';
	boje1[2].style.background = 'grey';
	boje2[0].style.background = 'grey';
	boje2[1].style.background = 'grey';
	boje2[2].style.background = 'green';
}

var pjzu = setTimeout(promijeniUZutoPrvi,2000);
var pjzep = setTimeout(promijeniUZelenoPrvi,4000);
var vcp = setTimeout(vratiUCrvenoPrvi,6000);
var puzd = setTimeout(promijeniUZutoDrugi, 6500)
var puzed = setTimeout(promijeniUZelenoDrugi, 7500)
var z = setInterval(semafor,10000);

}

semafor();