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

function slideChange(count){
    var element=document.getElementById("slide-items-one");
    var elementTwo=document.getElementById("slide-items-two");
    var elementThree=document.getElementById("slide-items-three");
    var redDiv=document.getElementById("red-div");
    var blueDiv=document.getElementById("blue-div");
    var orangeDiv=document.getElementById("orange-div");


    if(count=="one"){
        element.classList.add("slide-items-active");
        elementTwo.classList.remove("slide-items-active");
        elementThree.classList.remove("slide-items-active");
        
        blueDiv.classList.add("active-slide");
        redDiv.classList.remove("active-slide");
        orangeDiv.classList.remove("active-slide");
    }else if(count=="two"){
        element.classList.remove("slide-items-active");
        elementTwo.classList.add("slide-items-active");
        elementThree.classList.remove("slide-items-active");

        blueDiv.classList.remove("active-slide");
        redDiv.classList.remove("active-slide");
        orangeDiv.classList.add("active-slide");
    }
    else if(count=="three"){
        element.classList.remove("slide-items-active");
        elementTwo.classList.remove("slide-items-active");
        elementThree.classList.add("slide-items-active");

        blueDiv.classList.remove("active-slide");
        redDiv.classList.add("active-slide");
        orangeDiv.classList.remove("active-slide");
    }

}
function questionSlideChange(count){
    var elementOne=document.getElementById("question-slide-one");
    var elementTwo=document.getElementById("question-slide-two");
    var elementThree=document.getElementById("question-slide-three");
    var elementFour=document.getElementById("question-slide-four");
    var elementFive=document.getElementById("question-slide-five");
    var elementSix=document.getElementById("question-slide-six");

    var elementOneDiv=document.getElementById("question-one-div");
    var elementTwoDiv=document.getElementById("question-two-div");
    var elementThreeDiv=document.getElementById("question-three-div");
    var elementFourDiv=document.getElementById("question-four-div");
    var elementFiveDiv=document.getElementById("question-five-div");
    var elementSixDiv=document.getElementById("question-six-div");
    if(count=="one"){
        elementOne.classList.add("question-slide-active");
        elementTwo.classList.remove("question-slide-active");
        elementThree.classList.remove("question-slide-active");
        elementFour.classList.remove("question-slide-active");
        elementFive.classList.remove("question-slide-active");
        elementSix.classList.remove("question-slide-active");

        elementOneDiv.classList.add("question-slide-active-div");
        elementTwoDiv.classList.remove("question-slide-active-div");
        elementThreeDiv.classList.remove("question-slide-active-div");
        elementFourDiv.classList.remove("question-slide-active-div");
        elementFiveDiv.classList.remove("question-slide-active-div");
        elementSixDiv.classList.remove("question-slide-active-div");
    }
    else if(count=="two"){
        elementOne.classList.remove("question-slide-active");
        elementTwo.classList.add("question-slide-active");
        elementThree.classList.remove("question-slide-active");
        elementFour.classList.remove("question-slide-active");
        elementFive.classList.remove("question-slide-active");
        elementSix.classList.remove("question-slide-active");

        elementOneDiv.classList.remove("question-slide-active-div");
        elementTwoDiv.classList.add("question-slide-active-div");
        elementThreeDiv.classList.remove("question-slide-active-div");
        elementFourDiv.classList.remove("question-slide-active-div");
        elementFiveDiv.classList.remove("question-slide-active-div");
        elementSixDiv.classList.remove("question-slide-active-div");
    }
    else if(count=="three"){
        elementOne.classList.remove("question-slide-active");
        elementTwo.classList.remove("question-slide-active");
        elementThree.classList.add("question-slide-active");
        elementFour.classList.remove("question-slide-active");
        elementFive.classList.remove("question-slide-active");
        elementSix.classList.remove("question-slide-active");

        elementOneDiv.classList.remove("question-slide-active-div");
        elementTwoDiv.classList.remove("question-slide-active-div");
        elementThreeDiv.classList.add("question-slide-active-div");
        elementFourDiv.classList.remove("question-slide-active-div");
        elementFiveDiv.classList.remove("question-slide-active-div");
        elementSixDiv.classList.remove("question-slide-active-div");
    }
    else if(count=="four"){
        elementOne.classList.remove("question-slide-active");
        elementTwo.classList.remove("question-slide-active");
        elementThree.classList.remove("question-slide-active");
        elementFour.classList.add("question-slide-active");
        elementFive.classList.remove("question-slide-active");
        elementSix.classList.remove("question-slide-active");

        elementOneDiv.classList.remove("question-slide-active-div");
        elementTwoDiv.classList.remove("question-slide-active-div");
        elementThreeDiv.classList.remove("question-slide-active-div");
        elementFourDiv.classList.add("question-slide-active-div");
        elementFiveDiv.classList.remove("question-slide-active-div");
        elementSixDiv.classList.remove("question-slide-active-div");
    }
    else if(count=="five"){
        elementOne.classList.remove("question-slide-active");
        elementTwo.classList.remove("question-slide-active");
        elementThree.classList.remove("question-slide-active");
        elementFour.classList.remove("question-slide-active");
        elementFive.classList.add("question-slide-active");
        elementSix.classList.remove("question-slide-active");

        elementOneDiv.classList.remove("question-slide-active-div");
        elementTwoDiv.classList.remove("question-slide-active-div");
        elementThreeDiv.classList.remove("question-slide-active-div");
        elementFourDiv.classList.remove("question-slide-active-div");
        elementFiveDiv.classList.add("question-slide-active-div");
        elementSixDiv.classList.remove("question-slide-active-div");
    }
    else if(count=="six"){
        elementOne.classList.remove("question-slide-active");
        elementTwo.classList.remove("question-slide-active");
        elementThree.classList.remove("question-slide-active");
        elementFour.classList.remove("question-slide-active");
        elementFive.classList.remove("question-slide-active");
        elementSix.classList.add("question-slide-active");

        elementOneDiv.classList.remove("question-slide-active-div");
        elementTwoDiv.classList.remove("question-slide-active-div");
        elementThreeDiv.classList.remove("question-slide-active-div");
        elementFourDiv.classList.remove("question-slide-active-div");
        elementFiveDiv.classList.remove("question-slide-active-div");
        elementSixDiv.classList.add("question-slide-active-div");
    }


}
const text = "Your privacy is our responsibility";
const container = document.getElementById('text-container');
let i = 0;

function showNextCharacter() {
    if (i < text.length) {
        container.innerHTML += text.charAt(i);
        i++;
        setTimeout(showNextCharacter, 200); // Adjust the speed (100ms delay between each character)
    }
}


const pageLoad=()=>{
    slideChange('one');
    // questionSlideChange('one');
    showNextCharacter();
}
window.onload=pageLoad();

