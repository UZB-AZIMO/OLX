let count = document.querySelector(".count")


let offset = 0

function inc(){
    offset++
    count.innerHTML=offset
}

function reset (){
    offset = 0
    count.innerHTML=offset
}


function dec(){
    offset--
    count.innerHTML=offset
}