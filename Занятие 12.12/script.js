const form = document.querySelector('form');
form.addEventListener('click', changeText);
const nameDiv = document.querySelector('.name');
let elementSpan;
let divChange;

function changeText(e){
	const currentElement = e.target;
	if(!currentElement.dataset.type) {
		return;
	}
	const div = document.createElement('div');
	if(currentElement.dataset.type != 'select' && currentElement.dataset.type != 'textarea'){
		const input = document.createElement('input');
		input.type = currentElement.dataset.type;
		input.addEventListener('keypress', enterInput);
		input.value = currentElement.innerText;
		div.appendChild(input);
	} else {
		const teg = document.createElement(currentElement.dataset.type);
		teg.value = currentElement.innerText;
		if(currentElement.dataset.type == 'select'){
			const optMan = document.createElement('option');
			const optWoman = document.createElement('option');
			optMan.innerHTML = 'Man';
			optWoman.innerHTML = 'Woman';
			teg.appendChild(optMan);
			teg.appendChild(optWoman);
		}
		div.appendChild(teg);
	}
	const saveBut = document.createElement('button');
	const calcelBut = document.createElement('button');
	saveBut.innerHTML = 'Change';
	calcelBut.innerHTML = 'Cancel';
	saveBut.addEventListener('click', save);
	calcelBut.addEventListener('click', cancel);
	currentElement.style.display = 'none';
	
	div.appendChild(saveBut);
	div.appendChild(calcelBut);
	currentElement.parentNode.appendChild(div);
	elementSpan = currentElement;
	divChange = div;
}

function save(){
	elementSpan.style.display = 'inline';
	divChange.style.display = 'none';
	if(elementSpan.dataset.type == 'text' || elementSpan.dataset.type == 'date'){
		elementSpan.innerHTML = divChange.querySelector('input').value;
	} else if(elementSpan.dataset.type == 'select'){
		elementSpan.innerHTML = divChange.querySelector('select').value;
	} else if(elementSpan.dataset.type == 'textarea'){
		elementSpan.innerHTML = divChange.querySelector('textarea').value;
	} else if(elementSpan.dataset.type == 'checkbox'){
		divChange.querySelector('input').checked ? elementSpan.innerHTML = 'Yes' : elementSpan.innerHTML = 'No';
	}
}

function cancel(){
	elementSpan.style.display = 'inline';
	divChange.style.display = 'none';
}

function enterInput(e){
	if (e.keyCode == 13) {
    	save();
    }
}


/*function add (){
	let li = document.createElement('li');
	li.innerHTML ='<input type="checkbox"><button value="Change">Change</button>	<button value="Delete">Delete</button><span>'+input.value+'</span>';
	li.addEventListener('click', changeOrRemove);
	ol.appendChild(li);
	input.value = '';
}

function save (){
	addBut.style.display = 'inline ';
	saveBut.style.display = 'none';
	element.querySelector('span').innerHTML = input.value;
	input.value = '';
	element = true;
}

function changeOrRemove (){
	if(event.target.value == 'Delete'){
		this.parentNode.removeChild(this);
	} else if (event.target.value == 'Change'){
		element = this;
		addBut.style.display = 'none';
		saveBut.style.display = 'inline ';
		input.value = this.querySelector('span').innerHTML;
		input.focus();
	}
}

function removeAll(){
	const allLi = ol.querySelectorAll('li');
	for(let i of allLi){
		i.parentNode.removeChild(i);
	}
}

function enterInput(e){
	if (e.keyCode == 13) {
		if (element === true){
        	add();
    	} else {
    		save();
    	}
    }
}*/

