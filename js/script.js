// JavaScript Document

/*room 515*/
document.getElementById("one").onclick= 
	function(){
		one();
	}
	
function one(){
	document.getElementById("one").style.backgroundImage = "url(img/515_H.jpg)";
	document.getElementById("onePopUp").style.width = "1000px";
	document.getElementById("onePopUp").style.height = "500px";
	document.getElementById("onePopUp").style.opacity = "1";
	document.getElementById("onePopUp").style.zIndex = "50";
	
	document.getElementById("onePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("onePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[0].onclick= 
	function(){
		onePop();
	}
	
document.getElementsByTagName("a")[1].onclick= 
	function(){
		onePopClose();
	}
	
function onePopClose(){
	document.getElementById("one").style.backgroundImage = "url(img/515.jpg)";
	document.getElementById("onePopUp").style.width = "0px";
	document.getElementById("onePopUp").style.height = "0px";
	document.getElementById("onePopUp").style.opacity = "0";
	document.getElementById("onePopUp").style.zIndex = "1";
	
	document.getElementById("onePopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("onePopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function onePop(){
	document.getElementById("onePopUp").style.width = "0px";
	document.getElementById("onePopUp").style.height = "0px";
	document.getElementById("onePopUp").style.opacity = "0";
	document.getElementById("onePopUp").style.zIndex = "1";
	
	document.getElementById("onePopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("onePopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "680px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("oneArrowB").style.opacity = "1";
	document.getElementById("oneArrowB").style.height = "26px";
	
	document.getElementById("oneArrowA").style.opacity = "1";
	document.getElementById("oneArrowA").style.width = "20px";
	
	document.getElementById("oneArrowA").style.transition = "width .3s ease-out .8s,opacity .3s ease-out .8s";
	document.getElementById("oneArrowA").style.webkitTransition = "width .3s ease-out .8s,opacity .3s ease-out .8s";
	
	document.getElementById("oneArrowB").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("oneArrowB").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}



/*room 514*/
document.getElementById("two").onclick= 
	function(){
		two();
	}
	
function two(){
	document.getElementById("two").style.backgroundImage = "url(img/514_H.jpg)";
	document.getElementById("twoPopUp").style.width = "1000px";
	document.getElementById("twoPopUp").style.height = "500px";
	document.getElementById("twoPopUp").style.opacity = "1";
	document.getElementById("twoPopUp").style.zIndex = "50";
	
	document.getElementById("twoPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("twoPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[2].onclick= 
	function(){
		twoPop();
	}
	
document.getElementsByTagName("a")[3].onclick= 
	function(){
		twoPopClose();
	}
	
function twoPopClose(){
	document.getElementById("two").style.backgroundImage = "url(img/514.jpg)";
	document.getElementById("twoPopUp").style.width = "0px";
	document.getElementById("twoPopUp").style.height = "0px";
	document.getElementById("twoPopUp").style.opacity = "0";
	document.getElementById("twoPopUp").style.zIndex = "1";
	
	document.getElementById("twoPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("twoPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function twoPop(){
	document.getElementById("twoPopUp").style.width = "0px";
	document.getElementById("twoPopUp").style.height = "0px";
	document.getElementById("twoPopUp").style.opacity = "0";
	document.getElementById("twoPopUp").style.zIndex = "1";
	
	document.getElementById("twoPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("twoPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "680px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("twoArrow").style.opacity = "1";
	document.getElementById("twoArrow").style.height = "34px";
	
	document.getElementById("twoArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("twoArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//513
document.getElementById("three").onclick= 
	function(){
		three();
	}
	
function three(){
	document.getElementById("three").style.backgroundImage = "url(img/513_H.jpg)";
	document.getElementById("threePopUp").style.width = "1000px";
	document.getElementById("threePopUp").style.height = "500px";
	document.getElementById("threePopUp").style.opacity = "1";
	document.getElementById("threePopUp").style.zIndex = "50";
	
	document.getElementById("threePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("threePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[4].onclick= 
	function(){
		threePop();
	}
	
document.getElementsByTagName("a")[5].onclick= 
	function(){
		threePopClose();
	}
	
function threePopClose(){
	document.getElementById("three").style.backgroundImage = "url(img/513.jpg)";
	document.getElementById("threePopUp").style.width = "0px";
	document.getElementById("threePopUp").style.height = "0px";
	document.getElementById("threePopUp").style.opacity = "0";
	document.getElementById("threePopUp").style.zIndex = "1";
	
	document.getElementById("threePopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("threePopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function threePop(){
	document.getElementById("threePopUp").style.width = "0px";
	document.getElementById("threePopUp").style.height = "0px";
	document.getElementById("threePopUp").style.opacity = "0";
	document.getElementById("threePopUp").style.zIndex = "1";
	
	document.getElementById("threePopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("threePopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "431px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("threeArrow").style.opacity = "1";
	document.getElementById("threeArrow").style.height = "20px";
	
	document.getElementById("threeArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("threeArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//511

document.getElementById("four").onclick= 
	function(){
		four();
	}
	
function four(){
	document.getElementById("four").style.backgroundImage = "url(img/511_H.jpg)";
	document.getElementById("fourPopUp").style.width = "1000px";
	document.getElementById("fourPopUp").style.height = "500px";
	document.getElementById("fourPopUp").style.opacity = "1";
	document.getElementById("fourPopUp").style.zIndex = "50";
	
	document.getElementById("fourPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("fourPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[6].onclick= 
	function(){
		fourPop();
	}
	
document.getElementsByTagName("a")[7].onclick= 
	function(){
		fourPopClose();
	}
	
function fourPopClose(){
	document.getElementById("four").style.backgroundImage = "url(img/511.jpg)";
	document.getElementById("fourPopUp").style.width = "0px";
	document.getElementById("fourPopUp").style.height = "0px";
	document.getElementById("fourPopUp").style.opacity = "0";
	document.getElementById("fourPopUp").style.zIndex = "1";
	
	document.getElementById("fourPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("fourPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function fourPop(){
	document.getElementById("fourPopUp").style.width = "0px";
	document.getElementById("fourPopUp").style.height = "0px";
	document.getElementById("fourPopUp").style.opacity = "0";
	document.getElementById("fourPopUp").style.zIndex = "1";
	
	document.getElementById("fourPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("fourPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "418px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("fourArrow").style.opacity = "1";
	document.getElementById("fourArrow").style.height = "20px";
	
	document.getElementById("fourArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("fourArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}

//509
document.getElementById("five").onclick= 
	function(){
		five();
	}
	
function five(){
	document.getElementById("five").style.backgroundImage = "url(img/509_H.jpg)";
	document.getElementById("fivePopUp").style.width = "1000px";
	document.getElementById("fivePopUp").style.height = "500px";
	document.getElementById("fivePopUp").style.opacity = "1";
	document.getElementById("fivePopUp").style.zIndex = "50";
	
	document.getElementById("fivePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("fivePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[8].onclick= 
	function(){
		fivePop();
	}
	
document.getElementsByTagName("a")[9].onclick= 
	function(){
		fivePopClose();
	}
	
function fivePopClose(){
	document.getElementById("five").style.backgroundImage = "url(img/509.jpg)";
	document.getElementById("fivePopUp").style.width = "0px";
	document.getElementById("fivePopUp").style.height = "0px";
	document.getElementById("fivePopUp").style.opacity = "0";
	document.getElementById("fivePopUp").style.zIndex = "1";
	
	document.getElementById("fivePopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("fivePopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function fivePop(){
	document.getElementById("fivePopUp").style.width = "0px";
	document.getElementById("fivePopUp").style.height = "0px";
	document.getElementById("fivePopUp").style.opacity = "0";
	document.getElementById("fivePopUp").style.zIndex = "1";
	
	document.getElementById("fivePopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("fivePopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "170px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("fiveArrow").style.opacity = "1";
	document.getElementById("fiveArrow").style.height = "20px";
	
	document.getElementById("fiveArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("fiveArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}

//507
document.getElementById("six").onclick= 
	function(){
		six();
	}
	
function six(){
	document.getElementById("six").style.backgroundImage = "url(img/507_H.jpg)";
	document.getElementById("sixPopUp").style.width = "1000px";
	document.getElementById("sixPopUp").style.height = "500px";
	document.getElementById("sixPopUp").style.opacity = "1";
	document.getElementById("sixPopUp").style.zIndex = "50";
	
	document.getElementById("sixPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("sixPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[10].onclick= 
	function(){
		sixPop();
	}
	
document.getElementsByTagName("a")[11].onclick= 
	function(){
		sixPopClose();
	}
	
function sixPopClose(){
	document.getElementById("six").style.backgroundImage = "url(img/507.jpg)";
	document.getElementById("sixPopUp").style.width = "0px";
	document.getElementById("sixPopUp").style.height = "0px";
	document.getElementById("sixPopUp").style.opacity = "0";
	document.getElementById("sixPopUp").style.zIndex = "1";
	
	document.getElementById("sixPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("sixPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function sixPop(){
	document.getElementById("sixPopUp").style.width = "0px";
	document.getElementById("sixPopUp").style.height = "0px";
	document.getElementById("sixPopUp").style.opacity = "0";
	document.getElementById("sixPopUp").style.zIndex = "1";
	
	document.getElementById("sixPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("sixPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "156px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("sixArrow").style.opacity = "1";
	document.getElementById("sixArrow").style.height = "20px";
	
	document.getElementById("sixArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("sixArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}

//506
document.getElementById("seven").onclick= 
	function(){
		seven();
	}
	
function seven(){
	document.getElementById("seven").style.backgroundImage = "url(img/506_H.jpg)";
	document.getElementById("sevenPopUp").style.width = "1000px";
	document.getElementById("sevenPopUp").style.height = "500px";
	document.getElementById("sevenPopUp").style.opacity = "1";
	document.getElementById("sevenPopUp").style.zIndex = "50";
	
	document.getElementById("sevenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("sevenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[12].onclick= 
	function(){
		sevenPop();
	}
	
document.getElementsByTagName("a")[13].onclick= 
	function(){
		sevenPopClose();
	}
	
function sevenPopClose(){
	document.getElementById("seven").style.backgroundImage = "url(img/506.jpg)";
	document.getElementById("sevenPopUp").style.width = "0px";
	document.getElementById("sevenPopUp").style.height = "0px";
	document.getElementById("sevenPopUp").style.opacity = "0";
	document.getElementById("sevenPopUp").style.zIndex = "1";
	
	document.getElementById("sevenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("sixPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function sevenPop(){
	document.getElementById("sevenPopUp").style.width = "0px";
	document.getElementById("sevenPopUp").style.height = "0px";
	document.getElementById("sevenPopUp").style.opacity = "0";
	document.getElementById("sevenPopUp").style.zIndex = "1";
	
	document.getElementById("sevenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("sevenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("rightArrow").style.width = "115px";
	document.getElementById("rightArrow").style.opacity = "1";
	document.getElementById("sevenArrow").style.opacity = "1";
	document.getElementById("sevenArrow").style.height = "45px";
	
	document.getElementById("sevenArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("sevenArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("rightArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("rightArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}

//505
document.getElementById("eight").onclick= 
	function(){
		eight();
	}
	
function eight(){
	document.getElementById("eight").style.backgroundImage = "url(img/505_H.jpg)";
	document.getElementById("eightPopUp").style.width = "1000px";
	document.getElementById("eightPopUp").style.height = "500px";
	document.getElementById("eightPopUp").style.opacity = "1";
	document.getElementById("eightPopUp").style.zIndex = "50";
	
	document.getElementById("eightPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("eightPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[14].onclick= 
	function(){
		eightPop();
	}
	
document.getElementsByTagName("a")[15].onclick= 
	function(){
		eightPopClose();
	}
	
function eightPopClose(){
	document.getElementById("eight").style.backgroundImage = "url(img/505.jpg)";
	document.getElementById("eightPopUp").style.width = "0px";
	document.getElementById("eightPopUp").style.height = "0px";
	document.getElementById("eightPopUp").style.opacity = "0";
	document.getElementById("eightPopUp").style.zIndex = "1";
	
	document.getElementById("eightPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("eightPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function eightPop(){
	document.getElementById("eightPopUp").style.width = "0px";
	document.getElementById("eightPopUp").style.height = "0px";
	document.getElementById("eightPopUp").style.opacity = "0";
	document.getElementById("eightPopUp").style.zIndex = "1";
	
	document.getElementById("eightPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("sevenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("rightArrow").style.width = "115px";
	document.getElementById("rightArrow").style.opacity = "1";
	document.getElementById("eightArrow").style.opacity = "1";
	document.getElementById("eightArrow").style.width = "22px";
	document.getElementById("sevenArrow").style.opacity = "1";
	document.getElementById("sevenArrow").style.height = "25px";
	
	document.getElementById("sevenArrow").style.transition = "height .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("sevenArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("eightArrow").style.transition = "height .3s linear .5s,opacity .3s linear .9s";
	document.getElementById("eightArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .9s";
	
	document.getElementById("rightArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("rightArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//516
document.getElementById("nine").onclick= 
	function(){
		nine();
	}
	
function nine(){
	document.getElementById("nine").style.backgroundImage = "url(img/516_H.jpg)";
	document.getElementById("ninePopUp").style.width = "1000px";
	document.getElementById("ninePopUp").style.height = "500px";
	document.getElementById("ninePopUp").style.opacity = "1";
	document.getElementById("ninePopUp").style.zIndex = "50";
	
	document.getElementById("ninePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("ninePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[16].onclick= 
	function(){
		ninePop();
	}
	
document.getElementsByTagName("a")[17].onclick= 
	function(){
		ninePopClose();
	}
	
function ninePopClose(){
	document.getElementById("nine").style.backgroundImage = "url(img/516.jpg)";
	document.getElementById("ninePopUp").style.width = "0px";
	document.getElementById("ninePopUp").style.height = "0px";
	document.getElementById("ninePopUp").style.opacity = "0";
	document.getElementById("ninePopUp").style.zIndex = "1";
	
	document.getElementById("ninePopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("ninePopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function ninePop(){
	document.getElementById("ninePopUp").style.width = "0px";
	document.getElementById("ninePopUp").style.height = "0px";
	document.getElementById("ninePopUp").style.opacity = "0";
	document.getElementById("ninePopUp").style.zIndex = "1";
	
	document.getElementById("ninePopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("ninePopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "590px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("nineArrowB").style.opacity = "1";
	document.getElementById("nineArrowB").style.height = "90px";
	document.getElementById("nineArrow").style.opacity = "1";
	document.getElementById("nineArrow").style.width = "95px";
	
	document.getElementById("nineArrowB").style.transition = "height .3s linear .5s";
	document.getElementById("nineArrowB").style.webkitTransition = "height .3s linear .5s";
	
	document.getElementById("nineArrow").style.transition = "width .3s linear .8s";
	document.getElementById("nineArrow").style.webkitTransition = "width .3s linear .8s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//508
document.getElementById("fourteen").onclick= 
	function(){
		fourteen();
	}
	
function fourteen(){
	document.getElementById("fourteen").style.backgroundImage = "url(img/508_H.jpg)";
	document.getElementById("fourteenPopUp").style.width = "1000px";
	document.getElementById("fourteenPopUp").style.height = "500px";
	document.getElementById("fourteenPopUp").style.opacity = "1";
	document.getElementById("fourteenPopUp").style.zIndex = "50";
	
	document.getElementById("fourteenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("fourteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[18].onclick= 
	function(){
		fourteenPop();
	}
	
document.getElementsByTagName("a")[19].onclick= 
	function(){
		fourteenPopClose();
	}
	
function fourteenPopClose(){
	document.getElementById("fourteen").style.backgroundImage = "url(img/508.jpg)";
	document.getElementById("fourteenPopUp").style.width = "0px";
	document.getElementById("fourteenPopUp").style.height = "0px";
	document.getElementById("fourteenPopUp").style.opacity = "0";
	document.getElementById("fourteenPopUp").style.zIndex = "1";
	
	document.getElementById("fourteenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("fourteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function fourteenPop(){
	document.getElementById("fourteenPopUp").style.width = "0px";
	document.getElementById("fourteenPopUp").style.height = "0px";
	document.getElementById("fourteenPopUp").style.opacity = "0";
	document.getElementById("fourteenPopUp").style.zIndex = "1";
	
	document.getElementById("fourteenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("fourteenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "162px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("fourteenArrow").style.opacity = "1";
	document.getElementById("fourteenArrow").style.height = "22px";
	
	document.getElementById("fourteenArrow").style.transition = "height .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("fourteenArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//510
document.getElementById("thirteen").onclick= 
	function(){
		thirteen();
	}
	
function thirteen(){
	document.getElementById("thirteen").style.backgroundImage = "url(img/510_H.jpg)";
	document.getElementById("thirteenPopUp").style.width = "1000px";
	document.getElementById("thirteenPopUp").style.height = "500px";
	document.getElementById("thirteenPopUp").style.opacity = "1";
	document.getElementById("thirteenPopUp").style.zIndex = "50";
	
	document.getElementById("thirteenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("thirteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[20].onclick= 
	function(){
		thirteenPop();
	}
	
document.getElementsByTagName("a")[21].onclick= 
	function(){
		thirteenPopClose();
	}
	
function thirteenPopClose(){
	document.getElementById("thirteen").style.backgroundImage = "url(img/510.jpg)";
	document.getElementById("thirteenPopUp").style.width = "0px";
	document.getElementById("thirteenPopUp").style.height = "0px";
	document.getElementById("thirteenPopUp").style.opacity = "0";
	document.getElementById("thirteenPopUp").style.zIndex = "1";
	
	document.getElementById("thirteenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("thirteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function thirteenPop(){
	document.getElementById("thirteenPopUp").style.width = "0px";
	document.getElementById("thirteenPopUp").style.height = "0px";
	document.getElementById("thirteenPopUp").style.opacity = "0";
	document.getElementById("thirteenPopUp").style.zIndex = "1";
	
	document.getElementById("thirteenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("thirteenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "172px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("thirteenArrow").style.opacity = "1";
	document.getElementById("thirteenArrow").style.height = "22px";
	
	document.getElementById("thirteenArrow").style.transition = "height .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("thirteenArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//512
document.getElementById("twelve").onclick= 
	function(){
		twelve();
	}
	
function twelve(){
	document.getElementById("twelve").style.backgroundImage = "url(img/512_H.jpg)";
	document.getElementById("twelvePopUp").style.width = "1000px";
	document.getElementById("twelvePopUp").style.height = "500px";
	document.getElementById("twelvePopUp").style.opacity = "1";
	document.getElementById("twelvePopUp").style.zIndex = "50";
	
	document.getElementById("twelvePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("twelvePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[22].onclick= 
	function(){
		twelvePop();
	}
	
document.getElementsByTagName("a")[23].onclick= 
	function(){
		twelvePopClose();
	}
	
function twelvePopClose(){
	document.getElementById("twelve").style.backgroundImage = "url(img/512.jpg)";
	document.getElementById("twelvePopUp").style.width = "0px";
	document.getElementById("twelvePopUp").style.height = "0px";
	document.getElementById("twelvePopUp").style.opacity = "0";
	document.getElementById("twelvePopUp").style.zIndex = "1";
	
	document.getElementById("twelvePopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("twelvePopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function twelvePop(){
	document.getElementById("twelvePopUp").style.width = "0px";
	document.getElementById("twelvePopUp").style.height = "0px";
	document.getElementById("twelvePopUp").style.opacity = "0";
	document.getElementById("twelvePopUp").style.zIndex = "1";
	
	document.getElementById("twelvePopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("twelvePopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "425px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("twelveArrow").style.opacity = "1";
	document.getElementById("twelveArrow").style.height = "22px";
	
	document.getElementById("twelveArrow").style.transition = "height .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("twelveArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}



// JavaScript Document

//504
document.getElementById("ten").onclick= 
	function(){
		ten();
	}
	
function ten(){
	document.getElementById("ten").style.backgroundImage = "url(img/504_H.jpg)";
	document.getElementById("tenPopUp").style.width = "1000px";
	document.getElementById("tenPopUp").style.height = "500px";
	document.getElementById("tenPopUp").style.opacity = "1";
	document.getElementById("tenPopUp").style.zIndex = "50";
	
	document.getElementById("tenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("tenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[24].onclick= 
	function(){
		tenPop();
	}
	
document.getElementsByTagName("a")[25].onclick= 
	function(){
		tenPopClose();
	}
	
function tenPopClose(){
	document.getElementById("ten").style.backgroundImage = "url(img/504.jpg)";
	document.getElementById("tenPopUp").style.width = "0px";
	document.getElementById("tenPopUp").style.height = "0px";
	document.getElementById("tenPopUp").style.opacity = "0";
	document.getElementById("tenPopUp").style.zIndex = "1";
	
	document.getElementById("tenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("tenPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function tenPop(){
	document.getElementById("tenPopUp").style.width = "0px";
	document.getElementById("tenPopUp").style.height = "0px";
	document.getElementById("tenPopUp").style.opacity = "0";
	document.getElementById("tenPopUp").style.zIndex = "1";
	
	document.getElementById("tenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("tenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("downArrow").style.height = "120px";
	document.getElementById("downArrow").style.opacity = "1";
	document.getElementById("tenArrowB").style.opacity = "1";
	document.getElementById("tenArrowB").style.width = "92px";
	document.getElementById("tenArrow").style.height = "30px";
	
	document.getElementById("tenArrow").style.transition = "height .3s linear .8s";
	document.getElementById("tenArrow").style.webkitTransition = "height .3s linear .8s";
	
	document.getElementById("tenArrowB").style.transition = "width .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("tenArrowB").style.webkitTransition = "width .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("downArrow").style.transition = "height .5s linear, opacity .5s";
	document.getElementById("downArrow").style.webkitTransition = "height .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//502
document.getElementById("eleven").onclick= 
	function(){
		eleven();
	}
	
function eleven(){
	document.getElementById("eleven").style.backgroundImage = "url(img/502_H.jpg)";
	document.getElementById("elevenPopUp").style.width = "1000px";
	document.getElementById("elevenPopUp").style.height = "500px";
	document.getElementById("elevenPopUp").style.opacity = "1";
	document.getElementById("elevenPopUp").style.zIndex = "50";
	
	document.getElementById("elevenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("elevenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[26].onclick= 
	function(){
		elevenPop();
	}
	
document.getElementsByTagName("a")[27].onclick= 
	function(){
		elevenPopClose();
	}
	
function elevenPopClose(){
	document.getElementById("eleven").style.backgroundImage = "url(img/502.jpg)";
	document.getElementById("elevenPopUp").style.width = "0px";
	document.getElementById("elevenPopUp").style.height = "0px";
	document.getElementById("elevenPopUp").style.opacity = "0";
	document.getElementById("elevenPopUp").style.zIndex = "1";
	
	document.getElementById("elevenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("elevenPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function elevenPop(){
	document.getElementById("elevenPopUp").style.width = "0px";
	document.getElementById("elevenPopUp").style.height = "0px";
	document.getElementById("elevenPopUp").style.opacity = "0";
	document.getElementById("elevenPopUp").style.zIndex = "1";
	
	document.getElementById("elevenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("elevenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("downArrow").style.height = "120px";
	document.getElementById("downArrow").style.opacity = "1";
	document.getElementById("tenArrowB").style.opacity = "1";
	document.getElementById("tenArrowB").style.width = "30px";
	document.getElementById("elevenArrow").style.height = "30px";
	
	document.getElementById("elevenArrow").style.transition = "height .3s linear .8s";
	document.getElementById("elevenArrow").style.webkitTransition = "height .3s linear .8s";
	
	document.getElementById("tenArrowB").style.transition = "width .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("tenArrowB").style.webkitTransition = "width .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("downArrow").style.transition = "height .5s linear, opacity .5s";
	document.getElementById("downArrow").style.webkitTransition = "height .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}
	
//501
document.getElementById("fifteen").onclick= 
	function(){
		fifteen();
	}
	
function fifteen(){
	document.getElementById("fifteen").style.backgroundImage = "url(img/501_H.jpg)";
	document.getElementById("fifteenPopUp").style.width = "1000px";
	document.getElementById("fifteenPopUp").style.height = "500px";
	document.getElementById("fifteenPopUp").style.opacity = "1";
	document.getElementById("fifteenPopUp").style.zIndex = "50";
	
	document.getElementById("fifteenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("fifteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[28].onclick= 
	function(){
		fifteenPop();
	}
	
document.getElementsByTagName("a")[29].onclick= 
	function(){
		fifteenPopClose();
	}
	
function fifteenPopClose(){
	document.getElementById("fifteen").style.backgroundImage = "url(img/501.jpg)";
	document.getElementById("fifteenPopUp").style.width = "0px";
	document.getElementById("fifteenPopUp").style.height = "0px";
	document.getElementById("fifteenPopUp").style.opacity = "0";
	document.getElementById("fifteenPopUp").style.zIndex = "1";
	
	document.getElementById("fifteenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("fifteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function fifteenPop(){
	document.getElementById("fifteenPopUp").style.width = "0px";
	document.getElementById("fifteenPopUp").style.height = "0px";
	document.getElementById("fifteenPopUp").style.opacity = "0";
	document.getElementById("fifteenPopUp").style.zIndex = "1";
	
	document.getElementById("fifteenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("fifteenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("downArrow").style.height = "266px";
	document.getElementById("downArrow").style.opacity = "1";
	document.getElementById("fifteenArrow").style.width = "30px";
	
	document.getElementById("fifteenArrow").style.transition = "width .3s linear .5s";
	document.getElementById("fifteenArrow").style.webkitTransition = "width .3s linear .5s";
	
	
	document.getElementById("downArrow").style.transition = "height .5s linear, opacity .5s";
	document.getElementById("downArrow").style.webkitTransition = "height .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//military Room
document.getElementById("military").onclick= 
	function(){
		military();
	}
	
function military(){
	document.getElementById("militaryPopUp").style.width = "1000px";
	document.getElementById("militaryPopUp").style.height = "500px";
	document.getElementById("militaryPopUp").style.opacity = "1";
	document.getElementById("militaryPopUp").style.zIndex = "50";
	
	document.getElementById("militaryPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("militaryPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("getMilitary").onclick= 
	function(){
		militaryPop();
	}
	
document.getElementById("closeMilitary").onclick= 
	function(){
		militaryPopClose();
	}
	
function militaryPopClose(){
	document.getElementById("militaryPopUp").style.width = "0px";
	document.getElementById("militaryPopUp").style.height = "0px";
	document.getElementById("militaryPopUp").style.opacity = "0";
	document.getElementById("militaryPopUp").style.zIndex = "1";
	
	document.getElementById("militaryPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("militaryPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function militaryPop(){
	document.getElementById("militaryPopUp").style.width = "0px";
	document.getElementById("militaryPopUp").style.height = "0px";
	document.getElementById("militaryPopUp").style.opacity = "0";
	document.getElementById("militaryPopUp").style.zIndex = "1";
	
	document.getElementById("militaryPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("militaryPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("downArrow").style.height = "120px";
	document.getElementById("downArrow").style.opacity = "1";
	document.getElementById("militaryArrow").style.height = "30px";
	document.getElementById("tenArrowB").style.width = "75px";
	
	document.getElementById("tenArrowB").style.transition = "width .3s linear .5s";
	document.getElementById("tenArrowB").style.webkitTransition = "width .3s linear .5s";
	
	document.getElementById("militaryArrow").style.transition = "height .3s linear .8s";
	document.getElementById("militaryArrow").style.webkitTransition = "height .3s linear .8s";
	
	
	document.getElementById("downArrow").style.transition = "height .5s linear, opacity .5s";
	document.getElementById("downArrow").style.webkitTransition = "height .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}



//ladies room
document.getElementById("ladiesRoom").onclick= 
	function(){
		ladies();
	}
	
function ladies(){
	document.getElementById("ladiesPopUp").style.width = "1000px";
	document.getElementById("ladiesPopUp").style.height = "500px";
	document.getElementById("ladiesPopUp").style.opacity = "1";
	document.getElementById("ladiesPopUp").style.zIndex = "50";
	
	document.getElementById("ladiesPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("ladiesPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[32].onclick= 
	function(){
		ladiesPop();
	}
	
document.getElementsByTagName("a")[33].onclick= 
	function(){
		ladiesPopClose();
	}
	
function ladiesPopClose(){
	document.getElementById("ladiesPopUp").style.width = "0px";
	document.getElementById("ladiesPopUp").style.height = "0px";
	document.getElementById("ladiesPopUp").style.opacity = "0";
	document.getElementById("ladiesPopUp").style.zIndex = "1";
	
	document.getElementById("ladiesPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("ladiesPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function ladiesPop(){
	document.getElementById("ladiesPopUp").style.width = "0px";
	document.getElementById("ladiesPopUp").style.height = "0px";
	document.getElementById("ladiesPopUp").style.opacity = "0";
	document.getElementById("ladiesPopUp").style.zIndex = "1";
	
	document.getElementById("ladiesPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("ladiesPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "460px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("ladiesArrow").style.height = "20px";
	
	document.getElementById("ladiesArrow").style.transition = "height .3s linear .5s";
	document.getElementById("ladiesArrow").style.webkitTransition = "height .3s linear .5s";
	
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//mens room
document.getElementById("boysRoom").onclick = 
	function(){
		mensRoom();
	}
	
function mensRoom(){
	document.getElementById("mensPopUp").style.width = "1000px";
	document.getElementById("mensPopUp").style.height = "500px";
	document.getElementById("mensPopUp").style.opacity = "1";
	document.getElementById("mensPopUp").style.zIndex = "50";
	
	document.getElementById("mensPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("mensPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[34].onclick= 
	function(){
		mensPop();
	}
	
document.getElementsByTagName("a")[35].onclick= 
	function(){
		mensPopClose();
	}
	
function mensPopClose(){
	document.getElementById("mensPopUp").style.width = "0px";
	document.getElementById("mensPopUp").style.height = "0px";
	document.getElementById("mensPopUp").style.opacity = "0";
	document.getElementById("mensPopUp").style.zIndex = "1";
	
	document.getElementById("mensPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("mensPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function mensPop(){
	document.getElementById("mensPopUp").style.width = "0px";
	document.getElementById("mensPopUp").style.height = "0px";
	document.getElementById("mensPopUp").style.opacity = "0";
	document.getElementById("mensPopUp").style.zIndex = "1";
	
	document.getElementById("mensPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("mensPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "530px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("mensArrow").style.height = "20px";
	
	document.getElementById("mensArrow").style.transition = "height .3s linear .5s";
	document.getElementById("mensArrow").style.webkitTransition = "height .3s linear .5s";
	
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}	



//gallery room
document.getElementById("gallery").onclick = 
	function(){
		galleryRoom();
	}
	
function galleryRoom(){
	document.getElementById("gallery").style.backgroundImage = "url(../img/gallery_H.jpg)";
	document.getElementById("galleryPopUp").style.width = "1000px";
	document.getElementById("galleryPopUp").style.height = "500px";
	document.getElementById("galleryPopUp").style.opacity = "1";
	document.getElementById("galleryPopUp").style.zIndex = "50";
	
	document.getElementById("galleryPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("galleryPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("getGallery").onclick= 
	function(){
		galleryPop();
	}
	
document.getElementsByTagName("galleryClose")[0].onclick= 
	function(){
		galleryPopClose();
	}
	
function galleryPopClose(){
	document.getElementById("fifteen").style.backgroundImage = "url(../img/gallery.jpg)";
	document.getElementById("galleryPopUp").style.width = "0px";
	document.getElementById("galleryPopUp").style.height = "0px";
	document.getElementById("galleryPopUp").style.opacity = "0";
	document.getElementById("galleryPopUp").style.zIndex = "1";
	
	document.getElementById("galleryPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("galleryPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function galleryPop(){
	document.getElementById("galleryPopUp").style.width = "0px";
	document.getElementById("galleryPopUp").style.height = "0px";
	document.getElementById("galleryPopUp").style.opacity = "0";
	document.getElementById("galleryPopUp").style.zIndex = "1";
	
	document.getElementById("galleryPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("galleryPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("downArrow").style.height = "120px";
	document.getElementById("downArrow").style.opacity = "1";
	document.getElementById("galleryArrow2").style.width = "70px";
	document.getElementById("galleryArrow").style.height = "20px";
	
	document.getElementById("galleryArrow").style.transition = "height .3s linear .8s";
	document.getElementById("galleryArrow").style.webkitTransition = "height .3s linear .8s";
	
	document.getElementById("galleryArrow2").style.transition = "width .3s linear .5s";
	document.getElementById("galleryArrow2").style.webkitTransition = "width .3s linear .5s";
	
	
	document.getElementById("downArrow").style.transition = "height .5s linear, opacity .5s";
	document.getElementById("downArrow").style.webkitTransition = "height .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}	
	
	
/*restart function*/
document.getElementsByClassName("done")[0].onclick = 
	function(){
		restart();
	}
	
function restart(){
	//restart
	document.getElementById("restart").style.opacity = "0";
	document.getElementById("restart").style.zIndex ="0";
	
	//left/right/down arrow restarts
	document.getElementById("rightArrow").style.width = "0px";
	document.getElementById("rightArrow").style.opacity = "0";
	document.getElementById("leftArrow").style.width = "0px";
	document.getElementById("leftArrow").style.opacity = "0";
	document.getElementById("downArrow").style.height = "0px";
	document.getElementById("downArrow").style.opacity = "0";
	
	
	//room 515
	document.getElementById("one").style.backgroundImage = "url(img/515.jpg)";
	document.getElementById("oneArrowB").style.opacity = "1";
	document.getElementById("oneArrowB").style.height = "0px";
	document.getElementById("oneArrowA").style.opacity = "1";
	document.getElementById("oneArrowA").style.width = "0px";
	document.getElementById("oneArrowA").style.transition = "width 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("oneArrowA").style.webkitTransition = "width 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("oneArrowB").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("oneArrowB").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	
	//room 514
	document.getElementById("two").style.backgroundImage = "url(img/514.jpg)";
	document.getElementById("twoArrow").style.opacity = "0";
	document.getElementById("twoArrow").style.height = "0px";
	document.getElementById("twoArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("twoArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//513
	document.getElementById("three").style.backgroundImage = "url(img/513.jpg)";
	document.getElementById("threeArrow").style.opacity = "0";
	document.getElementById("threeArrow").style.height = "0px";
	document.getElementById("threeArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("threeArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//511
	document.getElementById("four").style.backgroundImage = "url(img/511.jpg)";
	document.getElementById("fourArrow").style.opacity = "0";
	document.getElementById("fourArrow").style.height = "0px";
	document.getElementById("fourArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("fourArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//509
	document.getElementById("five").style.backgroundImage = "url(img/509.jpg)";
	document.getElementById("fiveArrow").style.opacity = "1";
	document.getElementById("fiveArrow").style.height = "0px";
	document.getElementById("fiveArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("fiveArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//507
	document.getElementById("six").style.backgroundImage = "url(img/507.jpg)";
	document.getElementById("sixArrow").style.opacity = "1";
	document.getElementById("sixArrow").style.height = "0px";
	document.getElementById("sixArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("sixArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//506
	document.getElementById("seven").style.backgroundImage = "url(img/506.jpg)";
	document.getElementById("sevenArrow").style.opacity = "1";
	document.getElementById("sevenArrow").style.height = "0px";
	document.getElementById("sevenArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("sevenArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//505
	document.getElementById("eight").style.backgroundImage = "url(img/505.jpg)";
	document.getElementById("eightArrow").style.opacity = "1";
	document.getElementById("eightArrow").style.height = "0px";
	document.getElementById("eightArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("eightArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//516
	document.getElementById("nine").style.backgroundImage = "url(img/516.jpg)";
	document.getElementById("nineArrow").style.opacity = "0px";
	document.getElementById("nineArrow").style.width = "0px";
	document.getElementById("nineArrow").style.transition = "height .3s linear .5s,opacity .3s linear .9s";
	document.getElementById("nineArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .9s";
	document.getElementById("nineArrowB").style.opacity = "1";
	document.getElementById("nineArrowB").style.height = "0px";
	document.getElementById("nineArrowB").style.transition = "height .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("nineArrowB").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .5s";
	
	//508
	document.getElementById("fourteen").style.backgroundImage = "url(img/508.jpg)";
	document.getElementById("fourteenArrow").style.opacity = "0";
	document.getElementById("fourteenArrow").style.height = "0px";
	document.getElementById("fourteenArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("fourteenArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//510
	document.getElementById("thirteen").style.backgroundImage = "url(img/510.jpg)";
	document.getElementById("thirteenArrow").style.opacity = "0";
	document.getElementById("thirteenArrow").style.height = "0px";
	document.getElementById("thirteenArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("thirteenArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//512
	document.getElementById("twelve").style.backgroundImage = "url(img/510.jpg)";
	document.getElementById("twelveArrow").style.opacity = "0";
	document.getElementById("twelveArrow").style.height = "0px";
	document.getElementById("twelveArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("twelveArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//504
	document.getElementById("ten").style.backgroundImage = "url(img/504.jpg)";
	document.getElementById("tenArrowB").style.opacity = "0";
	document.getElementById("tenArrowB").style.width = "0px";
	document.getElementById("tenArrowB").style.transition = "width 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("tenArrowB").style.webkitTransition = "width 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("tenArrow").style.opacity = "0";
	document.getElementById("tenArrow").style.height = "0px";
	document.getElementById("tenArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("tenArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//502
	document.getElementById("eleven").style.backgroundImage = "url(img/502.jpg)";
	document.getElementById("elevenArrow").style.opacity = "0";
	document.getElementById("elevenArrow").style.height = "0px";
	document.getElementById("elevenArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("elevenArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//501
	document.getElementById("fifteen").style.backgroundImage = "url(img/501.jpg)";
	document.getElementById("fifteenArrow").style.width = "0px";
	document.getElementById("fifteenArrow").style.transition = "width 0s linear 0s";
	document.getElementById("fifteenArrow").style.webkitTransition = "width 0s linear 0s";
	
	//military Room
	document.getElementById("militaryArrow").style.width = "0px";
	document.getElementById("militaryArrow").style.transition = "width 0s linear 0s";
	document.getElementById("militaryArrow").style.webkitTransition = "width 0s linear 0s";
	
	//ladiesRoom
	document.getElementById("ladiesArrow").style.height = "0px";
	document.getElementById("ladiesArrow").style.transition = "height 0s linear 0s";
	document.getElementById("ladiesArrow").style.webkitTransition = "height 0s linear 0s";
	
	//mensRoom
	document.getElementById("mensArrow").style.height = "0px";
	document.getElementById("mensArrow").style.transition = "height 0s linear 0s";
	document.getElementById("mensArrow").style.webkitTransition = "height 0s linear 0s";
}
	
