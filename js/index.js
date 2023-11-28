window.onload = function() {
    //Create the canvas
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");


    setInterval(function() {
        //Generating random positions
        var posX = Math.floor(Math.random() * 200);
        var posY = Math.floor(Math.random() * 200);

        //Picking selected colors at random 
        var colors = ['rgba(220, 20, 60, 0.8)', 'rgba(255, 105, 180,0.6)', 'rgba(255, 20, 147, 0.8)', 'rgba(255, 140, 0,0.6)', 'rgba(143, 188, 143,0.7)'];
        var color = Math.floor(Math.random() * colors.length);

        //Drawing on the canvas
        context.beginPath();
        context.moveTo(200, 0);
        context.lineTo(1, -1);
        context.fillStyle = colors[color];
        context.arc(posX, posY, 0, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }, 80)
};