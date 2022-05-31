var cookie = document.querySelector("#cookie");

function accept() {
    cookie.remove();
}
var ht = document.querySelectorAll(".ht");
var cd = document.querySelectorAll(".cd");
function change_temp(e){
    if(e.value=="C"){
        for(var i=0;i<ht.length;i++){
            ht[i].innerHTML = Math.round((ht[i].innerHTML-32)*5/9);
            cd[i].innerHTML = Math.round((cd[i].innerHTML-32)*5/9);
        }
    }
    else if(e.value=="F"){
    for(var i=0;i<ht.length;i++){
        ht[i].innerHTML = Math.round((ht[i].innerHTML*9/5)+32);
        cd[i].innerHTML = Math.round((cd[i].innerHTML*9/5)+32);
    }
}
}