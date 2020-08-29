function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}  
function randomInteger(min, max){
    return Math.trunc(randomNumber(min,max));
}
function removePercentageFromAttribute(ele, att){
    return parseInt(ele.getAttribute(att).substring(0, ele.getAttribute(att).indexOf("%")));
}
function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }