$(document).ready(function(){

    createCircles();
    createPillars();

    anime({
        targets: '.drop-down',     
        bottom: "0%",
        opacity: 1.0,
        duration: 1000,
        delay: 500,
        complete: () => {
            document.getElementById("background-circle").style.animation = "offset 1s linear forwards";
            setTimeout(disperse, 1000);
        }
      });

    const audio = document.getElementById('audioinput');
    
    const ctx = new AudioContext();
    const audioSrc = ctx.createMediaElementSource(audio);
    const analyser = ctx.createAnalyser();

    audioSrc.connect(analyser);
    analyser.connect(ctx.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const frequencyData = new Uint8Array(bufferLength);

    $("#start").click(() => {
        const fps = 60;
        $("#intro, #drawing, #flying-circles").hide("slide", {direction: "left"});
        $("#pillars").show();
        ctx.resume();
        audio.load();
        audio.play();
        setInterval(() => {analyser.getByteFrequencyData(frequencyData);}, 1000/fps);
        setTimeout(() => {setInterval(() => {movePillars(frequencyData, fps);}, 1000/fps);}, 2000);
        setInterval(() => {console.log(frequencyData)}, 1000);
    });
});
