// JavaScript Document

var per = 0;
function perr(a){
	per = a;
	document.getElementById("custom").value="";
	if(per < 5){
		per = document.getElementById("custom").value;
	}	

;var bill;
var num;
var x;
var tamount;
bill = document.getElementById("bill").value;
num = document.getElementById("input-num").value;
if(bill == 0){
	document.getElementById("billerror").style.visibility="visible";
	
}else{
	document.getElementById("billerror").style.visibility="hidden";
}
if(num == 0){
	document.getElementById("numerror").style.visibility="visible";
	
}else{
	document.getElementById("numerror").style.visibility="hidden";
}
x = bill / num;

tamount = x*(per/100);
document.getElementById("tamount").innerHTML = (tamount);
document.getElementById("total").innerHTML = (x-tamount);
}	
function cal(){
	
	if(per < 5){
		per = document.getElementById("custom").value;
	}	

;var bill;
var num;
var x;
var tamount;
bill = document.getElementById("bill").value;
num = document.getElementById("input-num").value;
if(bill == 0){
	document.getElementById("billerror").style.visibility="visible";
	
}else{
	document.getElementById("billerror").style.visibility="hidden";
}
if(num == 0){
	document.getElementById("numerror").style.visibility="visible";
	
}else{
	document.getElementById("numerror").style.visibility="hidden";
}
x = bill / num;

tamount = x*(per/100);
document.getElementById("tamount").innerHTML = (tamount);
document.getElementById("total").innerHTML = (x-tamount);

}
function call(){
	

per = document.getElementById("custom").value;
	

;var bill;
var num;
var x;
var tamount;
bill = document.getElementById("bill").value;
num = document.getElementById("input-num").value;
if(bill == 0){
	document.getElementById("billerror").style.visibility="visible";
	
}else{
	document.getElementById("billerror").style.visibility="hidden";
}
if(num == 0){
	document.getElementById("numerror").style.visibility="visible";
	
}else{
	document.getElementById("numerror").style.visibility="hidden";
}
x = bill / num;

tamount = x*(per/100);
document.getElementById("tamount").innerHTML = (tamount);
document.getElementById("total").innerHTML = (x-tamount);

}

function res(){
	document.getElementById("tamount").innerHTML = "";
	document.getElementById("total").innerHTML = "";
	document.getElementById("bill").value="";
	document.getElementById("input-num").value="";
}
