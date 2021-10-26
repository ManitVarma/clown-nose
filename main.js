noseX = 0
noseY = 0

function preload(){
    clownNose = loadImage("https://i.postimg.cc/Gmgx3FyL/clown-nose-transparent.png")
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(410, 270);

    //Part 1//
    video = createCapture(VIDEO)
    video.size(400, 400)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

//Part 2//

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log('nose x = ' + noseX);
        console.log('nose y = ' + noseY);
    }
}

function draw(){
    image(video,0,0,400,400);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(clownNose, noseX - 30, noseY - 10, 60,30)
}

function take_snapshot(){
    save("myFilteredImage.png");
}