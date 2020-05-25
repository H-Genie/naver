var mySlide=document.getElementsByClassName('slide_container_full');
var slideIndex=1;
var currentBar;
var progressBar=document.getElementsByClassName('progressbar');
var currentNum=document.getElementsByClassName('current_num');

var interval=setInterval(clickNext,5000);

function clickPrev() {    
    clearInterval(interval);
    
    for (i=0; i<mySlide.length; i++) {
        mySlide[i].style.display="none";
        }

        if(slideIndex==1) {
        mySlide[mySlide.length-1].style.display="block";
        slideIndex=mySlide.length;

        currentBar = 100-(100/(mySlide.length+1));
        progressBar[mySlide.length-1].style.width=currentBar+"%";
        currentNum[mySlide.length-1].innerHTML=slideIndex;
        }

        else {
        mySlide[slideIndex-2].style.display="block";
        slideIndex=slideIndex-1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[slideIndex-1].style.width=currentBar+"%";
        currentNum[slideIndex-1].innerHTML=slideIndex;
        }
    interval++
}

function clickNext() {    
    //clearInterval(interval);

    for (i=0; i<mySlide.length; i++) {
        mySlide[i].style.display="none";
        }

    if(slideIndex==mySlide.length) {
        mySlide[0].style.display="block";
        slideIndex=1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[0].style.width=currentBar+"%";
        currentNum[0].innerHTML=slideIndex;
    }

    else {
        mySlide[slideIndex].style.display="block";
        slideIndex=slideIndex+1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[slideIndex-1].style.width=currentBar+"%";
        currentNum[slideIndex-1].innerHTML=slideIndex;
    }     
    
}


/*타임아웃
var mySlide=document.getElementsByClassName('slide_container_full');
var slideIndex=1;
var currentBar;
var progressBar=document.getElementsByClassName('progressbar');
var currentNum=document.getElementsByClassName('current_num');
setTimeout(clickNext, 5000);  //시작하는 이벤트

function clickPrev() {
    
    for (i=0; i<mySlide.length; i++) {
        mySlide[i].style.display="none";
        }

        if(slideIndex==1) {
        mySlide[mySlide.length-1].style.display="block";
        slideIndex=mySlide.length;

        currentBar = 100-(100/(mySlide.length+1));
        progressBar[mySlide.length-1].style.width=currentBar+"%";
        currentNum[mySlide.length-1].innerHTML=slideIndex;
        }

        else {
        mySlide[slideIndex-2].style.display="block";
        slideIndex=slideIndex-1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[slideIndex-1].style.width=currentBar+"%";
        currentNum[slideIndex-1].innerHTML=slideIndex;
        }
}

function clickNext() {

    for (i=0; i<mySlide.length; i++) {
        mySlide[i].style.display="none";
        }

    if(slideIndex==mySlide.length) {
        mySlide[0].style.display="block";
        slideIndex=1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[0].style.width=currentBar+"%";
        currentNum[0].innerHTML=slideIndex;
    }

    else {
        mySlide[slideIndex].style.display="block";
        slideIndex=slideIndex+1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[slideIndex-1].style.width=currentBar+"%";
        currentNum[slideIndex-1].innerHTML=slideIndex;
    }
    
    setTimeout(clickNext, 5000); //시작하는 이벤트 필요함 
}
*/


/*인터벌
var mySlide=document.getElementsByClassName('slide_container_full');
var slideIndex=1;
var currentBar;
var progressBar=document.getElementsByClassName('progressbar');
var currentNum=document.getElementsByClassName('current_num');
setInterval(clickNext, 5000);

function clickPrev() {
    
    for (i=0; i<mySlide.length; i++) {
        mySlide[i].style.display="none";
        }

        if(slideIndex==1) {
        mySlide[mySlide.length-1].style.display="block";
        slideIndex=mySlide.length;

        currentBar = 100-(100/(mySlide.length+1));
        progressBar[mySlide.length-1].style.width=currentBar+"%";
        currentNum[mySlide.length-1].innerHTML=slideIndex;
        }

        else {
        mySlide[slideIndex-2].style.display="block";
        slideIndex=slideIndex-1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[slideIndex-1].style.width=currentBar+"%";
        currentNum[slideIndex-1].innerHTML=slideIndex;
        }
}

function clickNext() {

    for (i=0; i<mySlide.length; i++) {
        mySlide[i].style.display="none";
        }

    if(slideIndex==mySlide.length) {
        mySlide[0].style.display="block";
        slideIndex=1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[0].style.width=currentBar+"%";
        currentNum[0].innerHTML=slideIndex;
    }

    else {
        mySlide[slideIndex].style.display="block";
        slideIndex=slideIndex+1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[slideIndex-1].style.width=currentBar+"%";
        currentNum[slideIndex-1].innerHTML=slideIndex;
    }  
}
*/


/* 원본 백업
var mySlide=document.getElementsByClassName('slide_container_full');
var slideIndex=1;
var currentBar;
var progressBar=document.getElementsByClassName('progressbar');
var currentNum=document.getElementsByClassName('current_num');

function clickPrev() {
    
    for (i=0; i<mySlide.length; i++) {
        mySlide[i].style.display="none";
        }

        if(slideIndex==1) {
        mySlide[mySlide.length-1].style.display="block";
        slideIndex=mySlide.length;

        currentBar = 100-(100/(mySlide.length+1));
        progressBar[mySlide.length-1].style.width=currentBar+"%";
        currentNum[mySlide.length-1].innerHTML=slideIndex;
        }

        else {
        mySlide[slideIndex-2].style.display="block";
        slideIndex=slideIndex-1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[slideIndex-1].style.width=currentBar+"%";
        currentNum[slideIndex-1].innerHTML=slideIndex;
        }
}

function clickNext() {

    for (i=0; i<mySlide.length; i++) {
        mySlide[i].style.display="none";
        }

    if(slideIndex==mySlide.length) {
        mySlide[0].style.display="block";
        slideIndex=1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[0].style.width=currentBar+"%";
        currentNum[0].innerHTML=slideIndex;
    }

    else {
        mySlide[slideIndex].style.display="block";
        slideIndex=slideIndex+1;

        currentBar = slideIndex*(100/(mySlide.length+1));
        progressBar[slideIndex-1].style.width=currentBar+"%";
        currentNum[slideIndex-1].innerHTML=slideIndex;
    }
}
*/