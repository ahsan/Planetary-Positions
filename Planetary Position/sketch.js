var url = "http://www.astro-phys.com/api/de406/states?date=2016-1-31&bodies=sun,mercury,venus,earth&type=polynomial&unit=km";

var sunX = 0, sunY = 0, sunZ = 0, sunD = 0;
var mercuryX = 0, mercuryY = 0, mercuryZ = 0, mercuryD;
var venusX = 0, venusY = 0, venusZ = 0, venusD;
var earthX = 0, earthY = 0, earthZ = 0, earthD;
var sunDia = 1392000, earthDia = 12742, mercuryDia = 4879, venusDia = 12104;
var scaler;


function setup() {
	createCanvas(1000, 1000);
	sunX = width/2;
	sunY = height/2;
	
	loadJSON(url, gotData, 'jsonp');
}

function gotData(data){
	//console.log(data);
	
	var earthCoords = data.results.earth[0];
	
	var distToEarth = dist(0, 0, earthCoords[0], earthCoords[1]);
	var scaler = ((width/2)-20)/distToEarth;
	
	earthX = sunX + earthCoords[0]*scaler;
	earthY = sunY + earthCoords[1]*scaler;
	earthD = earthDia * scaler;
	
	var mercuryCoords = data.results.mercury[0];
	mercuryX = sunX + mercuryCoords[0]*scaler;
	mercuryY = sunY + mercuryCoords[1]*scaler;
	mercuryD = mercuryDia * scaler;
	
	var venusCoords = data.results.venus[0];
	venusX = sunX + venusCoords[0]*scaler;
	venusY = sunY + venusCoords[1]*scaler;
	venusD = venusDia * scaler;
	
	sunD = sunDia * scaler;
}

function draw() {
	background(200);
	
	//draw the sun
	fill(235, 235, 36);
	//ellipse(sunX, sunY, sunD, sunD);
	ellipse(sunX, sunY, 50, 50);
	
	
	//draw the earth
	fill(26, 163, 26);
	//ellipse(earthX, earthY, earthD, earthD);
	ellipse(earthX, earthY, 30, 30);
	
	
	//draw the mercury
	fill(49, 55, 232);
	//ellipse(mercuryX, mercuryY, mercuryD, mercuryD);
	ellipse(mercuryX, mercuryY, 15, 15);
	
	
	//draw the venus
	fill(49, 55, 232);
	//ellipse(mercuryX, mercuryY, mercuryD, mercuryD);
	ellipse(venusX, venusY, 15, 15);

}