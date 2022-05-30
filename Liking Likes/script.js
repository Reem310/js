function addLike(e){
    var count = e.parentElement.querySelector("#countLikes")
    var num = parseInt(count.innerText)
    count.innerText = num+1 
}