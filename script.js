let elem = document.querySelectorAll(".elem");

elem.forEach(function(val){

    console.log(val.childNodes[3]);
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1 
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener("mousemove",function(dets){
     val.childNodes[3].style.left = dets.x + "px"
    //  val.childNodes[3].style.top = dets.y + "px" this effect not looks good
    })
})


/* This method for only one elemnt we have to make the same for another elemnt also
let elemImage = document.querySelector("#elem1 img")

elem1.addEventListener("mousemove", function(dets){
    elemImage.style.left = dets.x + "px"
    elemImage.style.top = dets.y + "px"
})

elem1.addEventListener("mouseenter", function(){
    elemImage.style.opacity = 1;
})

elem1.addEventListener("mouseleave",function(){
    elemImage.style.opacity = 0;
})
*/