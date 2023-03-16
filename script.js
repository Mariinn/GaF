let mainbtn = document.querySelector('.mainbtn')
let second1btn = document.querySelector('.second1btn')
let second2btn = document.querySelector('.second2btn')
let second3btn = document.querySelector('.second3btn')
let body1 = document.querySelector('.body1')
let body2 = document.querySelector('.body2')
let body3 = document.querySelector('.body3')
let body4 = document.querySelector('.body4')
mainbtn.onclick = function(){
	body2.style.display = 'none';
	body3.style.display = 'none';
	body4.style.display = 'none';
	body1.style.display = 'block';
}
second1btn.onclick = function(){
	body1.style.display = 'none';
	body3.style.display = 'none';
	body4.style.display = 'none';
	body2.style.display = 'block';
}
second2btn.onclick = function(){
	body1.style.display = 'none';
	body2.style.display = 'none';
	body4.style.display = 'none';
	body3.style.display = 'block';
}
second3btn.onclick = function(){
	body1.style.display = 'none';
	body2.style.display = 'none';
	body3.style.display = 'none';
	body4.style.display = 'block'
}