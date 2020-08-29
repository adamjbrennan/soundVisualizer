var circles = [];

function createCircles() {
    let numCircles = 250;
    let svgNS = "http://www.w3.org/2000/svg";
    let canvas = document.getElementById("flying-circles");
    let colors = ["red", "yellow", "green", "blue", "indigo", "violet"];
    for(var i = 0; i < numCircles; i++){
        let newCircle = document.createElementNS(svgNS, 'circle');
        setAttributes(newCircle, {"r": "1%", "stroke": "white", "stroke-width": "1px", "cx": "10%", "cy": "10%", "fill": colors[Math.trunc(randomNumber(0,6))]});
        newCircle.classList.add("manycircles");
        circles[i] = newCircle;
        canvas.appendChild(newCircle);
    }
}     
function convergeOnRandomPoint(){
    let x = randomInteger(0,100);
    let y = randomInteger(0,100);
    for(var i = 0; i < circles.length; i++){
        let x2 = removePercentageFromAttribute(circles[i], "cx");
        let y2 = removePercentageFromAttribute(circles[i], "cy");
       translateIt(circles[i], x-x2 + "%", y-y2 + "%", 2000, 0, "linear");
    }
    setTimeout(disperse, 5000);
}
function disperse(){
    for(var i = 0; i < circles.length; i++){
        let x = 100;
        let y = 100;
        let x2 = removePercentageFromAttribute(circles[i], "cx");
        let y2 = removePercentageFromAttribute(circles[i], "cy");
        while(x + x2 > 100 && y + y2 > 100){
         x = randomInteger(-100,100);
         y = randomInteger(-100,100);
        }
        translateIt(circles[i], x + "%", y + "%", 4000, 0, "easeOutElastic")
    }
    setTimeout(convergeOnRandomPoint, 5000);
}