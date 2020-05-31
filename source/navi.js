function gnbOver (openIndex) {    
    for (i=0; i<document.getElementsByClassName('lnb').length; i++)
    document.getElementsByClassName('lnb')[i].style="height:0;";
    document.getElementsByClassName('lnb')[openIndex].style="height:276px;";
}

function gnbOut () {
    for (i=0; i<document.getElementsByClassName('lnb').length; i++)
    document.getElementsByClassName('lnb')[i].style="height:0;";
}


var button_state=0;
var line=document.getElementsByClassName('menu_line');

function langButton () {
    if(document.body.clientWidth>599) {
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

    else {
        if(button_state==0) {
            line[0].style="top: 12px; transform: rotate(-45deg);";
            line[1].style="display:none;";
            line[2].style="top: 12px; transform: rotate(45deg);";
    
            document.querySelector('nav').style="display:none;";
            document.getElementsByClassName('sitemap_mobile')[0].style="right:0;";
            button_state=1;
        }
        else {
            line[0].style="top: 25%; transform: rotate(0deg);";
            line[1].style="display:block;";
            line[2].style="top: 75%; transform: rotate(0deg);";
            
            document.querySelector('nav').style="display:none;";
            document.getElementsByClassName('sitemap_mobile')[0].style="right:-100%;";
            button_state=0;
        }
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
            gnbOut();
            setTimeout(function(){document.querySelector('header').style="top:-80px;"},400)
        }
    }
    prevScroll = currentScroll;
}

function clickFlip(a) {
    var flip=document.getElementsByClassName('sitemap_flip')
    var icon=document.getElementsByClassName('flip_icon')
    
    if(a.nextElementSibling.style.display=="block") {
        a.nextElementSibling.style.display="none";
        a.lastElementChild.style.transform="rotate(0deg)";
    }
    else {
        for(i=0; i<flip.length; i++) {
            flip[i].style.display="none";    
            icon[i].style.transform="rotate(0deg)";
        }
        a.nextElementSibling.style.display="block"; 
        a.lastElementChild.style.transform="rotate(180deg)";   
    }  
}