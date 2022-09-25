left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 400);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("Left wrist x = " + left_wrist_x + "right wrist x = " + right_wrist_x + "difference = " + difference);
    }
}

function draw(){
    background('blue');
    document.getElementById("font_size").innerHTML = "The font size = " + difference + "px";
    textSize(difference);
    fill('#1aff1a');
    text('U just got rickrolled', 100, 200);
}

