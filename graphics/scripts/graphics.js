window.onload = init;

function init() {
    var canvasRef = document.getElementsByTagName('canvas')[0];
    console.log(canvasRef);
    var context = canvasRef.getContext('2d');

    var centerX = canvasRef.width / 2;
    var centerY = canvasRef.height / 2;

    var arr = ['blue', 'green', 'yellow'];
    var x = -40,y=-25;
    for (var i = 0; i < arr.length; i++) {
        context.beginPath();
        context.arc(centerX+x, centerY+y, 30, 0, 2 * Math.PI, false);
        context.lineWidth=2;
        context.strokeStyle = arr[i];
        context.stroke();
        context.closePath();
        x=x+40;
    }

    var arr2 = ['brown', 'yellow'];
    var x2 = -20,y2=15;
    for (var i = 0; i < arr2.length; i++) {
        context.beginPath();
        context.arc(centerX+x2, centerY+y2, 30, 0, 2 * Math.PI, false);
        context.lineWidth=2;
        context.strokeStyle = arr2[i];
        context.stroke();
        context.closePath();
        x2=x2+40;
    }


}
