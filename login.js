function test(){
	console.log("test");
}
function loadRegisterPage(){
	window.location.href="indexReg.html";
}

function loadloginPage(){
	window.location.href="login.html";
}

function login(){

let username=document.getElementById("userName").value;
let pwd=document.getElementById("pass").value;
if(username==""||pwd==""){
    alert("manadatory");
}
else{
    alert("Login successful");
}
	
}

function register(){

let username=document.getElementById("userName");
let pwd=document.getElementById("pass");
alert("Registration successful");
	
}

function cancel(){

document.getElementById("userName").value="";
document.getElementById("pass").value="";
}