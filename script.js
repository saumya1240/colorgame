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
function comparison(ans){
     var ques=document.getElementById("best").innerHTML;
    if(ques==ans){
        ++score;
    document.getElementById("points").innerHTML=score;
    }
}
function dual1(){
    var ans=document.getElementById("first").innerHTML;
    comparison(ans);
    naming();
}
function dual2(){
    var ans=document.getElementById("second").innerHTML;
   comparison(ans);
    naming();
}
function dual3(){
    var ans=document.getElementById("third").innerHTML;
     comparison(ans);
    naming();
}
function dual4(){
        var ans=document.getElementById("fourth").innerHTML;
     comparison(ans);
    naming();
}
function dual5(){
        var ans=document.getElementById("fifth").innerHTML;
     comparison(ans);
    naming();
}
function dual6(){
    var ans=document.getElementById("sixth").innerHTML;
     comparison(ans);
        naming();
}
function dual7(){
    var ans=document.getElementById("seventh").innerHTML;
    comparison(ans);
    naming();
}
function dual8(){
    var ans=document.getElementById("eight").innerHTML;
    comparison(ans);
    naming();
}
function dual9(){
    var ans=document.getElementById("ninth").innerHTML;
    comparison(ans);
        naming();
}
    function clock(){
     naming();
    var timer = 20;
         document.getElementById("one").disabled=true;
    document.getElementById("two").style.backgroundColor="green";
            document.getElementById("first").disabled=false;
            document.getElementById("second").disabled=false;
            document.getElementById("third").disabled=false;
            document.getElementById("fourth").disabled=false;                document.getElementById("fifth").disabled=false;
            document.getElementById("sixth").disabled=false;
            document.getElementById("seventh").disabled=false;
            document.getElementById("eight").disabled=false;
            document.getElementById("ninth").disabled=false;  
        document.getElementById("first").style.color="black";
        document.getElementById("second").style.color="black";
        document.getElementById("third").style.color="black";
        document.getElementById("fourth").style.color="black";
        document.getElementById("fifth").style.color="black";
        document.getElementById("sixth").style.color="black";
        document.getElementById("seventh").style.color="black";
        document.getElementById("eight").style.color="black";
        document.getElementById("ninth").style.color="black";
    var downloadTimer = setInterval(function(){
    timer--;
    document.getElementById("two").innerHTML= timer;
    if(timer <= 0){
        document.getElementById("two").style.backgroundColor="red";
        clearInterval(downloadTimer);
        stop(timer);
    document.getElementById("first").disabled=true;
    document.getElementById("second").disabled=true;
    document.getElementById("third").disabled=true;
    document.getElementById("fourth").disabled=true;
    document.getElementById("fifth").disabled=true;
    document.getElementById("sixth").disabled=true;
    document.getElementById("seventh").disabled=true;
    document.getElementById("eight").disabled=true;
    document.getElementById("ninth").disabled=true;
        document.getElementById("one").disabled=false;
    }
    },1000);
    function stop(timer){
        if(timer==0){
            alert("TIME UP! POINTS : " +score );
            document.getElementById("points").innerHTML=0;
            score=0;
        }
    }

}