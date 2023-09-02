var score=0;
var lives=3;

function increase_the_score(){
    score=score+1;
}
function decrease_the_lives(){
    lives=lives-1;
}
function s1(){
    while(lives>0){
        var enterthevalue=prompt("enter i the increase the score");
        if(enterthevalue=="i"){
            increase_the_score();
        }
        else{
            decrease_the_lives();
        }
       
    }
}
}