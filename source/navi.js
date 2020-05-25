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
        line[0].style="top: 12px; transform: rotate(-45deg); background-color:#fff;";
        line[1].style="display:none;";
        line[2].style="top: 12px; transform: rotate(45deg); background-color:#fff;";

        document.querySelector('header').style="background-color:#0fb93c;";
        document.querySelector('nav').style="display:none;";
        document.getElementsByClassName('sitemap')[0].style="display:block;";
        document.querySelector('body').style="overflow-y:hidden;";
        document.getElementsByClassName('header_logo')[0].firstElementChild.src="img/header_logo_white.png";
        document.getElementsByClassName('header_lang')[0].style="color:white;";
        button_state=1;

        
    }
    else {
        line[0].style="top: 25%; transform: rotate(0deg);";
        line[1].style="display:block;";
        line[2].style="top: 75%; transform: rotate(0deg);";

        document.querySelector('header').style="background-color:#fff;";
        document.querySelector('nav').style="display:block;";
        document.getElementsByClassName('sitemap')[0].style="display:none;";
        document.querySelector('body').style="overflow-y:visible;";
        document.getElementsByClassName('header_logo')[0].firstElementChild.src="img/header_logo_green.png";
        document.getElementsByClassName('header_lang')[0].style="color:black;";
        button_state=0;
    }
}


var prevScroll = window.pageYOffset;
window.onscroll = function() {
    var currentScroll = window.pageYOffset;
    if(currentScroll>100 && button_state==0) {
        if (prevScroll > currentScroll) {            
            document.querySelector('header').style="top:0;";
        }            
     
        else {
            document.querySelector('header').style="top:-80px;";
        }
    }
    prevScroll = currentScroll;
}