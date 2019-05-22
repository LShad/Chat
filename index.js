function timer()
{
	var timer = document.getElementById("timer");
	var today = new Date();
	timer.innerHTML = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
}
	
function send(event)
{
	if (event.type == "click" || event.key == "Enter") 
	{
		var typemassage = document.getElementById("typemassage");
		var typemassagetext = typemassage.value;
		var name = document.getElementById("name");
		var nametext = name.value;
		var showmassage1 = document.getElementById("showmassage");
		showmassage1.value = showmassage1.value + timer() + " " + nametext + ": " + typemassagetext + "\n";
		typemassage.value = "";
		showmassage1.scrollTop = showmassage1.scrollHeight;
	}
}
	
var idInterwalu = window.setInterval(timer, 1000);
showmassage.scrollTop = showmassage.scrollHeight; 

const socket = io('localhost');

console.log(socket);