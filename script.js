var score=0;
function randomgeneration(){
    
    var colors=["red","yellow","green","orange","blue","purple","white","lightpink","brown"];
    var index=Math.floor(Math.random() * colors.length);
    var name = colors[index]; 
    return name;
}
function naming(){
     var text=randomgeneration();
     var box1=randomgeneration();
     var box2=randomgeneration();
     var box3=randomgeneration();
     var box4=randomgeneration();
     var box5=randomgeneration();
     var box6=randomgeneration();
     var box7=randomgeneration();
     var box8=randomgeneration();
     var box9=randomgeneration();
    document.getElementById("best").innerHTML=text;
     var box=[box1,box2,box3,box4,box5,box6,box7,box8,box9]; 
     var strict=Math.floor(Math.random() * box.length);
     box[strict]=text;
    document.getElementById("first").innerHTML=box[0];
    document.getElementById("second").innerHTML=box[1];
    document.getElementById("third").innerHTML=box[2];
    document.getElementById("fourth").innerHTML=box[3];
    document.getElementById("fifth").innerHTML=box[4];
    document.getElementById("sixth").innerHTML=box[5];
    document.getElementById("seventh").innerHTML=box[6];
    document.getElementById("eight").innerHTML=box[7];
    document.getElementById("ninth").innerHTML=box[8];
    
}
function clock(){
     naming();
    var timer = 20;
    var downloadTimer = setInterval(function(){
    timer--;
    document.getElementById("two").innerHTML= timer;
    if(timer <= 0)
        clearInterval(downloadTimer);
    },1000);

}
function dual1(){
    var text=document.getElementById("best").innerHTML;
    var one=document.getElementById("first").innerHTML;
    if(text==one){
        ++score;
    document.getElementById("points").innerHTML=score;
    }
    naming();
}
function dual2(){
    var text=document.getElementById("best").innerHTML;
    var two=document.getElementById("second").innerHTML;
    if(text==two){
        ++score;
    document.getElementById("points").innerHTML=score;
    }
    naming();
}
function dual3(){
    var text=document.getElementById("best").innerHTML;
    var three=document.getElementById("third").innerHTML;
    if(text==three){
        ++score;
    document.getElementById("points").innerHTML=score;
    }
    naming();
}
function dual4(){
    var text=document.getElementById("best").innerHTML;
    var four=document.getElementById("fourth").innerHTML;
    if(text==four){
        ++score;
    document.getElementById("points").innerHTML=score;
    }
    naming();
}
function dual5(){
    var text=document.getElementById("best").innerHTML;
    var five=document.getElementById("fifth").innerHTML;
    if(text==five){
        ++score;
    document.getElementById("points").innerHTML=score;
    }
    naming();
}
function dual6(){
    var text=document.getElementById("best").innerHTML;
    var six=document.getElementById("sixth").innerHTML;
    if(text==six){
        ++score;
    document.getElementById("points").innerHTML=score;
    }
        naming();
}
function dual7(){
    var text=document.getElementById("best").innerHTML;
    var seven=document.getElementById("seventh").innerHTML;
    if(text==seven){
        ++score;
    document.getElementById("points").innerHTML=score;
    }
    naming();
}
function dual8(){
    var text=document.getElementById("best").innerHTML;
    var eigth=document.getElementById("eight").innerHTML;
    if(text==eigth){
        ++score;
    document.getElementById("points").innerHTML=score;
    }
    naming();
}
function dual9(){
    var text=document.getElementById("best").innerHTML;
    var nine=document.getElementById("ninth").innerHTML;
    if(text==nine){
        ++score;
    document.getElementById("points").innerHTML=score;
    }
        naming();
}

    