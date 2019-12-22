// event.preventDefault() //for the forms

var title = document.getElementById('output') //For intro, questions, and reveal
var titleBtn = document.getElementById('next') //to change questions and answers

//for radio buttons
var colors = document.querySelectorAll('.color') 
var locations = document.querySelectorAll('.location') 
var fun = document.querySelectorAll('.activity')
var stone = document.querySelectorAll('.stone')
var personality = document.querySelectorAll('.type')
var career = document.querySelectorAll('.job')
var planet = document.querySelectorAll('.planet')

// //all varying choices
// var one = document.getElementById('answerA') 
// var two = document.getElementById('answerB')
// var three = document.getElementById('answerC')
// var four = document.getElementById('answerD')

var total = 0 //add points from answers
//-----------------------------------------------------------------------------
// //questions
// //Psuedo: ask question with inner text 
// //give certain answers and values to each 
// //add value to total
// //if value has been added, move to next set
//CLEARED
//-------------------------------------------
//change form slots and give each individual ids in order to hide them

function next(total) {

    titleBtn.innerText = "Next Question"
    var colors = document.querySelectorAll('.color') 

    for (let i = 0; i < colors.length; i++) {

        colors[i].addEventListener('click', function(event) {
            if (colors[i] = true) {
                var questionA = (event.target.getAttribute('value'))
                // total += parseInt(questionA)
            }

            // title.innerHTML = total //here to see if radio buttons work

        })  

    }


}




