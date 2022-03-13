var minute = document.querySelector('#minutes');
var second= document.querySelector('#seconds');
var startbutton=document.querySelector('.startbtn');
var pausebutton=document.querySelector('.pausebtn');
var resumebutton=document.querySelector('.resumebtn');
var stopbutton=document.querySelector('.stopbtn');
var button= document.querySelector('.timerBox');
var break1= document.querySelector('.break');
var breaktime=document.querySelector('.sectionbreak')
var count=0;



console.log(minute.innerText);
console.log(minute.innerHTML);
console.log(minute);




// method 1 for timer.
// function timer (){

//     button.classList.add("bg-primary");
//     startbutton.classList.add("d-none");
//     pausebutton.classList.remove("d-none");
//     resumebutton.classList.remove("d-none");
//     stopbutton.classList.remove("d-none");
    
//     // minute.innerHTML=24;
//     // second.innerHTML=59;
//     // console.log(second.innerHTML);


//    second.innerHTML=second.innerHTML-1;
// //    if(second.innerHTML==00){
// //        second.innerHTML=59;
// //        minute.innerHTML--;
// //    }



    
    
//     //  var minuteInterval= setInterval(minutesTime,60000);
//     //  var secondInterval= setInterval(secondsTimer,1000);
     
    
//     // function minutesTime(){
//     //     minute.innerHTML=minute.innerHTML-1;
      
        
//     // }
//     //  function secondsTimer(){
//     //     second.innerHTML=second.innerHTML-1;
//     //     if(second.innerHTML<=0)
        
//     //     {
//     //         // if(minute.innerHTML<=0){
//     //         //     clearInterval(minuteInterval);
//     //         //     clearInterval(secondInterval);
//     //         // }
//     //         second.innerHTML=60;
            
//     //     }
//     //     if(second.innerHTML && minute.innerHTML ==0){
//     //         second.innerHTML="00";
//     //         clearInterval(minuteInterval);
//     //         clearInterval(secondInterval);
//     //     }
        
        
//     // }
    
    

    
    
    
    
    
    
// } 



startbutton.addEventListener("click", (e)=>{
    button.classList.add("bg-primary");
    startbutton.classList.add("d-none");
    pausebutton.classList.remove("d-none");
    resumebutton.classList.remove("d-none");
    stopbutton.classList.remove("d-none");
    minute.innerHTML=24;
    second.innerHTML=59;
    function sec(){
        
        second.innerHTML=second.innerHTML-1;
        if(second.innerHTML==0){
            second.innerHTML=60;
            minute.innerHTML=minute.innerHTML-1;
            
        }
        else if(second.innerHTML ==1 && minute.innerHTML==0){
            
            clearInterval(count);
            
            alert("25 Minutes are up, its time for 5 minutes break, Click on Break");
        }
        
        // console.log(second.innerHTML);
    }
   
    count=setInterval(sec,1000);
})

break1.addEventListener('click',(e)=>{
   if(minute.innerHTML>=0 && second.innerHTML>=0){
       

   }
   else{
    minute.innerHTML=04;
    second.innerHTML=59;
    button.classList.add("bg-info");
    function sec1(){
        
        second.innerHTML=second.innerHTML-1;
        if(second.innerHTML==0){
            second.innerHTML=60;
            minute.innerHTML=minute.innerHTML-1;
            
        }
        else if(second.innerHTML ==1 && minute.innerHTML==0){
            
            clearInterval(count);
            alert("Break is Over, click on Reset Button to start.")
            break1.innerHTML--;
        }
        
        
    }
    if(break1.innerHTML==0){
        break1.innerHTML=5;

    }}
    count=setInterval(sec1,1000);

})




pausebutton.addEventListener("click", (e)=>{
    clearInterval(count);
    var count1= second.innerHTML;
    console.log(count1);
})


resumebutton.addEventListener("click",(e)=>{
    function sec(){
        
        second.innerHTML=second.innerHTML-1;
        if(second.innerHTML==0){
            second.innerHTML=60;
            minute.innerHTML=minute.innerHTML-1;
            
        }
        else if(second.innerHTML ==1 && minute.innerHTML==0){
            
            clearInterval(count);
        }
        
        
    }
    count=setInterval(sec,1000);
})





function stop(){
    clearInterval(count);
    button.classList.remove("bg-info");
    var sec1= second.innerHTML;
    var min1= minute.innerHTML;
    
    
    minute.innerHTML="00";
    second.innerHTML="00";
    button.classList.remove("bg-primary");
    startbutton.classList.remove("d-none");
    pausebutton.classList.add("d-none");
    resumebutton.classList.add("d-none");
    stopbutton.classList.add("d-none");

}