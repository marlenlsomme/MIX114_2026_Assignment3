//Task 1. b

function TextToArray (textlist){
    return textlist.map(Number)
}

function convert(){
    let input=document.getElementById("textInput").value
    let array=JSON.parse(input)
    let result=TextToArray(array)
    document.getElementById("result").textContent=JSON.stringify(result)
}

//Task 1.c

function SumNumbers(numbers){
    let list=document.getElementById("sumList")
    list.innerHTML=""
    for(let i=0;i<numbers.length-1; i++){
        let sum=numbers[i]+numbers[i+1]
        let li=document.createElement('li')
        li.textContent=numbers[i]+"+"+numbers[i+1]+"="+sum
        list.appendChild(li)
    }
}

function sums(){
    let input=document.getElementById("numbersInput").value
    let numbers=input.split(",").map(Number)
    SumNumbers(numbers)
}