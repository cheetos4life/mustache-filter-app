nosex=0;
nosey=0;

function preload(){
  nose=loadImage("mustache.png")
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose", gotresults)
}

function gotresults(results){
    if(results.length>0){
        console.log(results)
        console.log("nosex="+results[0].pose.nose.x)
        console.log("nosey="+results[0].pose.nose.y)
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
}

function modelloaded(){
    console.log("Model has been loaded")
}

function draw(){
image( video,0,0,300,300)
image(nose,nosex -20,nosey+2,40,20)

}

function take_snapshot(){
    save ("my_filter_image.png")
}