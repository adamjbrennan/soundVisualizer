function scaleIt(t, s, dur, del){
    anime({
        targets: t,
        scale: s,
        duration: dur,
        delay: del
    });
}
function translateIt(t, tx, ty, dur, del, eas){
    anime({
        targets: t,
        translateX: tx,
        translateY: ty,
        duration: dur,
        delay: del,
        easing: eas
    });
}
function heightAnimation(t, hval, dur, del, eas){
    anime({
        targets: t,
        height: hval,
        duration: dur,
        delay: del,
        easing: eas
    });
}