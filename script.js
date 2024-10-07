let countDivs=document.querySelectorAll(".num");
let interval=5000;
console.log(countDivs);

countDivs.forEach((div)=>{
    let startValue=0;
    let endValue=parseInt(div.getAttribute('data-val'));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
        startValue +=1;
        div.textContent=startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    },duration)

})

