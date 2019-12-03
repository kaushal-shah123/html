
function Hello(){

var user = prompt("What is your name?");
document.getElementById('here').innerHTML = "Hello " + user + " Welcome to my website";

}


function Hello(){

var user = prompt("What is your name?");
document.getElementById('here').innerHTML = "Hello " + user + " Welcome to my website";

}


function Average(){
	parseInt()
	var grade1 = parseInt(document.getElementById("grade1").value)
	var grade2 = parseInt(document.getElementById("grade2").value)
	var grade3 = parseInt(document.getElementById("grade3").value)
	var result = (grade1 + grade2 + grade3)/3;

		if (result < 6){
			document.getElementById("status").innerHTML = "You Failed";
		}else{
			document.getElementById("status").innerHTML = "You are approved";
		}

	document.getElementById('result').innerHTML = "Your Average is" + result;
}


function Sum(){
	parseInt()
	var number1 = parseInt(document.getElementById("number1").value)
	var number2 = parseInt(document.getElementById("number2").value)
	var number3 = parseInt(document.getElementById("number3").value)
	var Total = number1 + number2 + number3;

	document.getElementById('Total').innerHTML = Total;

}


function RainCheck(){


	var rain = prompt("Is it raining? Yes:1, No:0");

	if(rain == 0){
		console.log("Don't take your umbrella");
	} else { console.log ("Take your umbrella")};


}

function Multiply(){
	
	var num1 = parseInt(document.getElementById("num1").value)
	var num2 = parseInt(document.getElementById("num2").value)
	var Tal = num1 * num2;

	document.getElementById('Tal').innerHTML = Tal;

}

function Subtract(){
	
	var numb1 = parseInt(document.getElementById("numb1").value)
	var numb2 = parseInt(document.getElementById("numb2").value)
	var Tol = numb1 - numb2;

	document.getElementById('Tol').innerHTML = Tol;
}
