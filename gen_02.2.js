/*
@ breathing bubble worm 1.0
@ nadine L.
@ based on bubble tutorial
*/

////// Globals //////////////////////////////////////

var bubbles = [];

////// Set and Run //////////////////////////////////////

function setup(){
	createCanvas(1000,1000);
}

function draw(){
	background(200);
	for(var i=0; i<bubbles.length; i++){
		bubbles[i].update();
		bubbles[i].display();
		if(bubbles[i].diameter < 0){
			bubbles.splice(i,1);
		}

	}
	//console.log("bubble length",bubbles.length);
}

////// Functions //////////////////////////////////////

function mouseDragged(){
	bubbles.push(new Bubble(mouseX, mouseY));
}

////// Objects //////////////////////////////////////

function Bubble(bX,bY){

	this.x = bX;
	this.y = bY;
	this.diameter = random(10,150);
	this.r = (random(100,255));
	this.g = (random(100,255));
	this.b = (random(100,255));
	this.a = (random(100,255));
	this.startD = this.diameter;
	this.boolPulse = true;
	this.expand = random(10,100);
	this.count = 0; 
	this.interval = 300; 
	this.goForth = true;

	this.display = function() {
		fill(this.r, this.g, this.b,this.a);
		stroke(0, 50, 100)
    	ellipse(this.x, this.y, this.diameter, this.diameter);
    	this.timer();
    }

    this.update = function() {
    	//console.log(this.goForth);
    	if(this.goForth){
    		if(this.diameter >= this.startD + this.expand){
    			this.boolPulse = false;
    		
	    	} else if(this.diameter <= this.startD){
	    		this.boolPulse = true;

	    	}
	    	if(this.boolPulse){
	    		this.diameter ++;
	    	} else if(!this.boolPulse){
	    		this.diameter --;
	    	}

    	} else{
    		this.diameter--;	
    	}
    	
    }
    
    this.timer = function(){
    	this.count++;
    	//console.log(this.count);
    	if(this.count > this.interval){
    		this.goForth = false;
    	}
    	
    }
}