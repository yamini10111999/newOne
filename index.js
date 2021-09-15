var first = document.querySelectorAll(".first");

first.forEach(function(firstitem){
    firstitem.addEventListener("click",function(){
        first.forEach(function(firstitem){
            firstitem.classList.remove("active");
        })
        firstitem.classList.add("active");
    })
})