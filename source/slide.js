var slide=document.getElementsByClassName('slide_container');
var index=0;
var currentBar;
var progressBar=document.getElementsByClassName('progressbar');
var currentNum=document.getElementsByClassName('current_num');
setInterval(clickNext,5000)

function clickPrev() {
    if(index==0) { //첫번째 페이지일때 실행
        slide[slide.length-1].style="left:0; transition: left 0.5s ease-in-out;";
        slide[index].style="left:100%; transition: left 0.5s ease-in-out;";
        slide[slide.length-2].style="left:-100%;";
        index=slide.length-1;

        currentBar = 100-(100/(slide.length+1));
        progressBar[index].style.width=currentBar+"%";
        currentNum[index].innerHTML=slide.length;      
    }
    
    else if(index!=slide.length-1) { //마지막 페이지가 아닐때 실행  
        slide[index-1].style="left:0; transition: left 0.5s ease-in-out;";
        slide[index].style="left:100%; transition: left 0.5s ease-in-out;";                
        if(index==1) {slide[slide.length-1].style="left:-100%;";}
        else {slide[index-2].style="left:-100%;";}
        index-=1;

        currentBar = (index+1)*(100/(slide.length+1));
        progressBar[index].style.width=currentBar+"%";
        currentNum[index].innerHTML=index+1;
    }
               
    else { //마지막 페이지일때 실행
        slide[index-1].style="left:0; transition: left 0.5s ease-in-out;";
        slide[index].style="left:100%; transition: left 0.5s ease-in-out;";
        slide[index-2].style="left:-100%;";
        index-=1;

        currentBar = (index+1)*(100/(slide.length+1));
        progressBar[index].style.width=currentBar+"%";
        currentNum[index].innerHTML=index+1;
    }             
}

function clickNext() {                    
    if(index==0) { //첫번째 페이지일때 실행
        slide[index+1].style="left:0px; transition:left 0.5s ease-in-out";
        slide[index].style="left:-100%; transition:left 0.5s ease-in-out";
        slide[slide.length-1].style="left:100%;";
        index+=1; 

        currentBar = (index+1)*(100/(slide.length+1));
        progressBar[index].style.width=currentBar+"%";
        currentNum[index].innerHTML=index+1;
    }            

    else if(index!=slide.length-1) { //마지막 페이지가 아닐때 실행
        slide[index+1].style="left:0px; transition:left 0.5s ease-in-out";
        slide[index].style="left:-100%; transition:left 0.5s ease-in-out";
        slide[index-1].style="left:100%;";
        index+=1;

        currentBar = (index+1)*(100/(slide.length+1));
        progressBar[index].style.width=currentBar+"%";
        currentNum[index].innerHTML=index+1;
    }
    
    else { //마지막 페이지일때 실행
        slide[0].style="left:0px; transition:left 0.5s ease-in-out";
        slide[slide.length-1].style="left:-100%; transition:left 0.5s ease-in-out";
        slide[index-1].style="left:100%;";
        index=0;

        currentBar = (index+1)*(100/(slide.length+1));
        progressBar[0].style.width=currentBar+"%";
        currentNum[0].innerHTML=index+1;
    }               
}