
noseX = "";
Nosey = "";



function preload(){

clown_image = loadimage("https://i.postimg.cc/wvmNYmb1/clown-nose.png")

}

function setup(){

canvas = createCanvas( 425 , 425 )
canvas.center()
video=createCapture(VIDEO)
video.size(425 , 425)
video.hide()

poseNet  =  ml5.poseNet(video, modelloaded)


poseNet.on('pose' , gotposes)

}


function modelloaded(){

console.log("Posenet is Loaded")

}

function gotposes(results){

if(results.length > 0){

console.log(results)

noseX = results[0].pose.nose.x
Nosey = results[0].pose.nose.y

console.log("noseX = " +results[0].pose.nose.x) 

console.log("noseY = " +results[0].pose.nose.y)

}


}



function draw(){

image(video , 0 , 0 , 425 , 425)

//circle(noseX, Nosey, 20)
//fill(255, 0, 0)
//stroke(255, 0 , 0 )

image(clown_image , noseX , Nosey , 30 , 30)


}

function snapshot(){

save("Clown_filter.png");

}