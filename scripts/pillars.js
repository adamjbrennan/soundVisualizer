var pillars = [];
var pillarsHeight = [];

function createPillars(){
    const numPillars = 128;
    let svgNS = "http://www.w3.org/2000/svg";
    let canvas = document.getElementById("pillars");
    let currentWidth = 0;
    for(let i = 0; i < numPillars; i++){
        let newRect = document.createElementNS(svgNS, 'rect');
        setAttributes(newRect, {"width": ".78125%", "height": "0%", "stroke-width": "2px", "stroke": "black", "x": currentWidth + "%", "y": "0%"});
        newRect.classList.add("pillar");
        pillars[i] = newRect;
        canvas.appendChild(newRect);
        currentWidth += 100/numPillars;
    }
}
function movePillars(frequencyData, fps){
    for(let i = 0; i < pillars.length; i++){
        let currentPillarHeight = frequencyData[i]/2.56;
            if(currentPillarHeight > 0){
                heightAnimation(pillars[i], currentPillarHeight + "%", 1000/fps, 0, "easeOutElastic");
                pillarsHeight[i] = currentPillarHeight;
            }
    }
}