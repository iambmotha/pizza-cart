
const button = document.querySelector(".btn")
const input = document.querySelector(".input")
const mes = document.querySelector(".mes")


button.addEventListener("click", function(){
    mes.innerHTML = input.value
    

})
