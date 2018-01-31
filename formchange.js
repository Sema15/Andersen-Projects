function handler0() {
			const names=document.querySelector('.names'); 
			let input = document.createElement('input');
			input.type='text';
			input.className = "input1";
			input.title= "Имя"
			names.appendChild(input);
			names1.style.display = "none";
		};
		function handler1() {
			const surnames=document.querySelector('.surnames'); 
			let input = document.createElement('input');
			input.type='text';
			input.className = "input2";
			surnames.appendChild(input);
			surname.style.display = "none";
		};
		function handler2() {
			const dates1=document.querySelector('.dates1'); 
			let input = document.createElement('input');
			input.type='date';
			input.className = "input3";
			dates1.appendChild(input);
			dates.style.display = "none";
		};
		function handler3() {
			const sex1=document.querySelector('.sex1'); 
			let select = document.createElement('select');
			select.options[0] = new Option("Мужской", "str0");
			select.options[1] = new Option("Женский", "str1");
			select.className = "select4";
			sex1.appendChild(select);
			sex.style.display = "none";
		};
		function handler4() {
			const abouts1=document.querySelector('.abouts1'); 
			let textarea = document.createElement('textarea');
			textarea.className = "textarea5";
			abouts1.appendChild(textarea);
			abouts.style.display = "none";
		};
		function handler5() {
			const brack1=document.querySelector('.brack1');
			var elem = document.getElementById('brack1');
  			elem.innerHTML = '<input type="checkbox">Да'; 
			//let input = document.createElement('input');
			//input.type='checkbox';
			//input.className = "input5";
			//input.="Yes";
			brack1.appendChild(input);
			brack.style.display = "none";
			};
	function enterInput(e){
	if (e.keyCode == 13) {
    	save();
    }
}
		

		names1.addEventListener("click", handler0);
		surname.addEventListener("click", handler1); 
		dates.addEventListener("click", handler2); 
		sex.addEventListener("click", handler3 ); 
		abouts.addEventListener("click", handler4 ); 
		brack.addEventListener("click", handler5 ); 
		body.addEventListener("click", enterInput);
