var tableCmds = ['j_command_gu_b.png', 'j_command_ch_b.png', 'j_command_pa_b.png'];
var myCmds = document.querySelectorAll('#myself .command');
var myTable = document.querySelector('#myself .table_command');
var compTable = document.querySelector('#computer .table_command');
var lights = document.querySelectorAll('.light li');
var myCmdNum;
var compCmdNum;
var lightLength = 0;
var winLength = 0;
var loseLength = 0;

function select(){
	clearEvent();

	myCmdNum = this.className.substr(-1);
	compCmdNum = Math.floor( Math.random() * 3);

	myTable.style.backgroundImage = 'url(' + tableCmds[myCmdNum] + ')';
	compTable.style.backgroundImage = 'url(' + tableCmds[compCmdNum] + ')';

	judgment();
}

function judgment(){
	var judgNum = myCmdNum - compCmdNum;
	if(judgNum == 2 || judgNum == -1){
		point(1);
	}else if(judgNum == -2 || judgNum == 1){
		point(0);
	}else {
		setEvent();
	}
}

function point(gamepoint){
	if(gamepoint == 1) {
		lights[lightLength].style.backgroundImage = 'url(light_win.png)';
		winLength++;
	}else{
		lights[lightLength].style.backgroundImage = 'url(light_lose.png)';
		loseLength++;
	}

	lightLength++;
	if(winLength == 2 || loseLength == 2) {
		result();
	}else{
		setEvent();
	}
}

function result(){
	setTimeout(function(){
		if(winLength == 2) {
			myTable.style.backgroundImage = 'url(pose_win_boy.png)';
			compTable.style.backgroundImage = 'url(pose_lose_boy.png)';
		}else{
			myTable.style.backgroundImage = 'url(pose_lose_boy.png)';
			compTable.style.backgroundImage = 'url(pose_win_boy.png)';
		}
	}, 1000);
};


function setEvent(){
	for(var i = 0; i < myCmds.length; i++){
		myCmds[i].addEventListener('click', select);
	}
}

function clearEvent(){
	for(var i = 0; i < myCmds.length; i++){
		myCmds[i].removeEventListener('click', select);
	}
}

setEvent();
console.log(myCmds);