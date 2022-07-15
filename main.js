noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
sidelength=0;


function setup(){
    video = createCapture(VIDEO)
    video.size(550, 415)
    video.position(5, 175)

    canvas = createCanvas(550, 415)
    canvas.position(860, 170)

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotPoses)
}

function preload(){
}

function draw(){
    background('#FFA500');

    textSize(sidelength);
    fill('#F90093');
    document.getElementById("result").innerHTML = "The Font Size Will be " + sidelength;
   

    text("Faaiz", noseX, noseY);
}

function modelloaded(){
    console.log("Model Has Loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.x;
        console.log("Nose X: " + noseX + ", Nose Y: " + noseY);

        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
        sidelength = floor(leftwristX - rightwristX)
        console.log("Right Wrist X: " + rightwristX + ", Left Wrist X: " + leftwristX + ", Side Length: " + sidelength);
    }
}