document.addEventListener("DOMContentLoaded", function() {
    changeGrid()
    let rangeInput = document.getElementById('gridSize');
    let rangeLabel = document.getElementById('gridSizeLabel');
    rangeInput.addEventListener('input', function() {
    rangeLabel.innerText = rangeInput.value+"x"+rangeInput.value;
    changeGrid()
    });
});

function erase(){
    let gridDiv=Array.from(document.getElementsByClassName("gridDiv"))
    gridDiv.forEach(function(square){
        square.classList.remove('gridDivColor')
    });
}

function changeGrid(){
    let rangeInput = document.getElementById('gridSize');    
    let gridSquareSize=400/rangeInput.value;
    let gridSquareQuantity=Math.round(160000/(gridSquareSize**2));
    let subcontainer=document.createElement('div');
    let fragment = document.createDocumentFragment();
    let gridContainer = document.getElementById('gridContainer');
    let existingSubcontainer = document.getElementById('subcontainer');
    subcontainer.setAttribute('id','subcontainer');

    for (let i = 1; i <= gridSquareQuantity; i++) {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add('gridDiv');
        gridDiv.style.height = gridSquareSize + "px";
        gridDiv.style.width = gridSquareSize + "px";
        gridDiv.addEventListener("mouseover", function() {
        gridDiv.classList.add('gridDivColor');
        });
        fragment.appendChild(gridDiv);
    }
    
    if (existingSubcontainer) {
    gridContainer.replaceChild(subcontainer, existingSubcontainer);
    } else {
    gridContainer.appendChild(subcontainer);
    }

    subcontainer.appendChild(fragment);
}