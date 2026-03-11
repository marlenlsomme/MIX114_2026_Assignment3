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