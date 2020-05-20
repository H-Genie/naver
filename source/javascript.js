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

//타임아웃
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

function gnb01 () {    
    for (i=0; i<document.getElementsByClassName('lnb').length; i++)
    document.getElementsByClassName('lnb')[i].style="height:0;";
    document.getElementsByClassName('lnb')[0].style="height:276px;";
}

function gnb02 () {      
    for (i=0; i<document.getElementsByClassName('lnb').length; i++)
    document.getElementsByClassName('lnb')[i].style="height:0;";
    document.getElementsByClassName('lnb')[1].style="height:276px;";
}

function gnb03 () {   
    for (i=0; i<document.getElementsByClassName('lnb').length; i++)
    document.getElementsByClassName('lnb')[i].style="height:0;";
    document.getElementsByClassName('lnb')[2].style="height:276px;";
}

function gnb04 () {   
    for (i=0; i<document.getElementsByClassName('lnb').length; i++)
    document.getElementsByClassName('lnb')[i].style="height:0;";
    document.getElementsByClassName('lnb')[3].style="height:276px;";
}

function gnb05 () {   
    for (i=0; i<document.getElementsByClassName('lnb').length; i++)
    document.getElementsByClassName('lnb')[i].style="height:0;";
    document.getElementsByClassName('lnb')[4].style="height:276px;";
}

function gnb06 () {   
    for (i=0; i<document.getElementsByClassName('lnb').length; i++)
    document.getElementsByClassName('lnb')[i].style="height:0;";
    document.getElementsByClassName('lnb')[5].style="height:276px;";
}

function gnbOut () {
    for (i=0; i<document.getElementsByClassName('lnb').length; i++)
    document.getElementsByClassName('lnb')[i].style="height:0;";
}


var button_state=0;
var line=document.getElementsByClassName('menu_line');

function langButton () {
    if(button_state==0) {
        line[0].style="top: 12px; transform: rotate(-45deg);";
        line[1].style="display:none;";
        line[2].style="top: 12px; transform: rotate(45deg);";
        button_state=1;
    }
    else {
        line[0].style="top: 25%; transform: rotate(0deg);";
        line[1].style="display:block;";
        line[2].style="top: 75%; transform: rotate(0deg);";
        button_state=0;
    }
}