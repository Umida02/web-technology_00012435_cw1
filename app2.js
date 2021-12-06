const val = document.getElementById("validation") //validation form to protect the site
const answer = document.getElementById("answer_bot")
const num1 = document.getElementById("num_1")
const num2 = document.getElementById("num_2")
const input = document.getElementById("input_num")
const btn = document.getElementById("btn_answer")
const submit = document.getElementById("submit_btn")

// Creating random numbers 

let random_num1 = Math.floor(Math.random()* 15)
let random_num2 = Math.floor(Math.random()* 15)

num1.innerHTML = random_num1.toString()
num2.innerHTML = random_num2.toString()

let result = random_num1 * random_num2

btn.addEventListener("click", ()=>{
 
    console.log(input.value)
    if(parseInt(input.value) === result){
        document.getElementById('submit-btn').classList.add('visible')
        document.getElementById("validation").style.display = 'none'


    }else if(parseInt(input.value) !== result){
        answer.innerHTML = "You answered incorrect";
    }
})

