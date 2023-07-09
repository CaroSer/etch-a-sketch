document.addEventListener("DOMContentLoaded", function() {
for(i=1;i<=256;i++){    
let gridDiv=document.createElement("div");
gridDiv.classList.add('gridDiv');
gridDiv.addEventListener("mouseover",function(){
    gridDiv.classList.add('gridDivColor')
})
document.getElementById('gridContainer').appendChild(gridDiv)
}
});

function erase(){
    let gridDiv=Array.from(document.getElementsByClassName("gridDiv"))
    
    gridDiv.forEach(function(square){
        square.classList.remove('gridDivColor')
    });
}
