function displayPic1(){
	if(document.getElementById("pic1").style.display=="none"){
		document.getElementById("pic1").style.display="";
		document.getElementById("pic2").style.display="none";
		document.getElementById("pic3").style.display="none";
		document.getElementById("pic4").style.display="none";
	}else{
		// document.getElementById("pic1").style.display="none";
	}
}

function displayPic2(){
	if(document.getElementById("pic2").style.display=="none"){
		document.getElementById("pic2").style.display="";
		document.getElementById("pic1").style.display="none";
		document.getElementById("pic3").style.display="none";
		document.getElementById("pic4").style.display="none";
	}else{
		// document.getElementById("pic2").style.display="none";
	}
}

function displayPic3(){
	if(document.getElementById("pic3").style.display=="none"){
		document.getElementById("pic3").style.display="";
		document.getElementById("pic1").style.display="none";
		document.getElementById("pic2").style.display="none";
		document.getElementById("pic4").style.display="none";
	}else{
		// document.getElementById("pic3").style.display="none";
	}
}

function displayPic4(){
	if(document.getElementById("pic4").style.display=="none"){
		document.getElementById("pic4").style.display="";
		document.getElementById("pic1").style.display="none";
		document.getElementById("pic2").style.display="none";
		document.getElementById("pic3").style.display="none";
	}else{
		// document.getElementById("pic4").style.display="none";
	}
}