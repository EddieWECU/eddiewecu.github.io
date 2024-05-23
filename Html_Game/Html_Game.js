(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Html_Game_atlas_1", frames: [[0,0,735,220],[0,222,1186,112]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Html_Game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2060,1566);


(lib.CachedBmp_2 = function() {
	this.initialize(ss["Html_Game_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3801,1981);


(lib.runButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Run", "50px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(145,49.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3RrUMAujAAAIAAWpMgujAAAg");
	this.shape.setTransform(149,72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3RLVIAA2pMAujAAAIAAWpg");
	this.shape_1.setTransform(149,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,300,147);


(lib.guardButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Guard", "50px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(146,41.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3Hq2MAuPAAAIAAVtMguPAAAg");
	this.shape.setTransform(148,69.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3HK3IAA1tMAuPAAAIAAVtg");
	this.shape_1.setTransform(148,69.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,298,141);


(lib.attackButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Attack", "50px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(146,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3HrPMAuPAAAIAAWfMguPAAAg");
	this.shape.setTransform(148,71.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3HLQIAA2fMAuPAAAIAAWfg");
	this.shape_1.setTransform(148,71.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,298,146);


// stage content:
(lib.Html_Game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2];
	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		var _this = this;
		
		var health = 100;
		var enemyAtkCount = 0;
		var escape = 0;
		
		_this.playerHP.text = health;
		
		this.attackButton.addEventListener('click', function () {
		    _this.textBox.text = 'You strike';
		
			setTimeout(() => {
			_this.textBox.text = 'Nothing happens';
		    }, 1000);
		
			setTimeout(() => {
			if (enemyAtkCount < 2){
				_this.textBox.text = 'Nightmare attacks';
			} else {
				_this.textBox.text = 'Nightmare rushes you';
			}
		    }, 3000);
		
		    setTimeout(() => {
			if (enemyAtkCount < 2){
				_this.textBox.text = 'Your hit';
				health -= 10;
			    _this.playerHP.text = health;
				if (health <= 0){
				_this.gotoAndPlay(2);
			}
				enemyAtkCount += 1;
			} else {
				_this.textBox.text = 'Your hurt';
				health -= 50;
			    _this.playerHP.text = health;
				if (health <= 0){
				_this.gotoAndPlay(2);
			}
				enemyAtkCount = 0;
			}
		    }, 5000);
		
		    setTimeout(() => {
			if (enemyAtkCount < 2){
				_this.textBox.text = 'what will you do';
			} else {
				_this.textBox.text = 'Nightmare seems to be trying something';
			}
		    }, 7000);
		
		if (escape > 4){
				_this.gotoAndPlay(1);
			}
		});
		
		this.guardButton.addEventListener('click', function () {
			_this.textBox.text = 'You guard';
		
			setTimeout(() => {
			if (enemyAtkCount < 2){
				_this.textBox.text = 'Nightmare attacks';
			} else {
				_this.textBox.text = 'Nightmare rushes you';
			}
		    }, 1000);
		
		    setTimeout(() => {
			if (enemyAtkCount < 2){
				_this.textBox.text = 'Your block the attack';
				health -= 0;
			    _this.playerHP.text = health;
				if (health <= 0){
				_this.gotoAndPlay(2);
			}
				enemyAtkCount += 1;
			} else {
				_this.textBox.text = 'Your brace against the attack';
				health -= 20;
			    _this.playerHP.text = health;
				if (health <= 0){
				_this.gotoAndPlay(2);
			}
				enemyAtkCount = 0;
			}
		    }, 3000);
		
		    setTimeout(() => {
			if (enemyAtkCount < 2){
				_this.textBox.text = 'what will you do';
			} else {
				_this.textBox.text = 'Nightmare seems to be trying something';
			}
		    }, 5000);
		
		if (escape > 4){
				_this.gotoAndPlay(1);
			}
		
		if (health <= 0){
				_this.gotoAndPlay(2);
			}
		});
		
		this.runButton.addEventListener('click', function () {
			_this.textBox.text = 'You run';
			escape += 1;
		
			setTimeout(() => {
			_this.textBox.text = 'The nightmare seems to get further';
		    }, 1000);
		
			setTimeout(() => {
			if (enemyAtkCount < 2){
				_this.textBox.text = 'Nightmare attacks';
			} else {
				_this.textBox.text = 'Nightmare rushes you';
			}
		    }, 3000);
		
		    setTimeout(() => {
			if (enemyAtkCount < 2){
				_this.textBox.text = 'Your hit';
				health -= 10;
			    _this.playerHP.text = health;
				if (health <= 0){
				_this.gotoAndPlay(2);
			}
				enemyAtkCount += 1;
			} else {
				_this.textBox.text = 'Your hurt';
				health -= 50;
			    _this.playerHP.text = health;
				if (health <= 0){
				_this.gotoAndPlay(2);
			}
				enemyAtkCount = 0;
			}
		    }, 5000);
		
		    setTimeout(() => {
			if (enemyAtkCount < 2){
				_this.textBox.text = 'what will you do';
			} else {
				_this.textBox.text = 'Nightmare seems to be trying something';
			}
		    }, 7000);
		
		if (escape > 4){
				_this.gotoAndPlay(1);
			}
		});
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#000000","#FFFFFF"],[0,1],-318.8,0,318.8,0).ss(1,1,1).p("EgxugotMBjdAAAMAAABRbMhjdAAAg");
	this.shape.setTransform(341.425,277.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#000000"],[0,0.365],0,0,0,0,0,411.4).s().p("EgxuAouMAAAhRbMBjdAAAMAAABRbg");
	this.shape_1.setTransform(341.425,277.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(2));

	// PlayerHealth
	this.playerHP = new cjs.Text("", "60px 'Helvetica'", "#FFFFFF");
	this.playerHP.name = "playerHP";
	this.playerHP.textAlign = "center";
	this.playerHP.lineHeight = 62;
	this.playerHP.lineWidth = 167;
	this.playerHP.parent = this;
	this.playerHP.setTransform(844.5,41.7);

	this.timeline.addTween(cjs.Tween.get(this.playerHP).to({_off:true},1).wait(2));

	// textbox
	this.textBox = new cjs.Text("What will you do?", "18px 'Helvetica'", "#FFFFFF");
	this.textBox.name = "textBox";
	this.textBox.lineHeight = 20;
	this.textBox.lineWidth = 607;
	this.textBox.parent = this;
	this.textBox.setTransform(33.05,577.5);

	this.timeline.addTween(cjs.Tween.get(this.textBox).to({_off:true},1).wait(2));

	// buttons
	this.runButton = new lib.runButton();
	this.runButton.name = "runButton";
	this.runButton.setTransform(844.05,584.7,0.9296,0.9296,0,0,0,149.1,72.5);
	new cjs.ButtonHelper(this.runButton, 0, 1, 1);

	this.guardButton = new lib.guardButton();
	this.guardButton.name = "guardButton";
	this.guardButton.setTransform(842.15,433.15,0.9296,0.9296,0,0,0,148,69.5);
	new cjs.ButtonHelper(this.guardButton, 0, 1, 1);

	this.attackButton = new lib.attackButton();
	this.attackButton.name = "attackButton";
	this.attackButton.setTransform(842.15,286.85,0.9296,0.9296,0,0,0,148,72);
	new cjs.ButtonHelper(this.attackButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.attackButton},{t:this.guardButton},{t:this.runButton}]}).to({state:[]},1).wait(2));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EAbUg76MAyYAAAIAAXsMgyYAAAgEhLmAY9MBjoAAAIAAdWMhjoAAAgAbU//MAyiAAAMAAABWmMgyiAAAgEhLxg7wMBjeAAAMAAABRaMhjeAAAgEhhvhJuMDDfAAAMAAACTdMjDfAAAg");
	this.shape_2.setTransform(507,399.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgxuAouMAAAhRbMBjdAAAMAAABRbg");
	this.shape_3.setTransform(340.375,277.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("EAaNA5RMAAAhWmMAyiAAAMAAABWmgEhMtA49IAA9WMBjnAAAIAAdWgEAaNghkIAA3sMAyYAAAIAAXsg");
	this.shape_4.setTransform(514.15,382.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("EhhuBJvMAAAiTdMDDeAAAMAAACTdgEAbUA2nMAyiAAAMAAAhWmMgyiAAAgEhLmA2TMBjoAAAIAA9WMhjoAAAgEhLwAVqMBjdAAAMAAAhRaMhjdAAAgEAbUgkOMAyYAAAIAA3sMgyYAAAg");
	this.shape_5.setTransform(507,399.025);

	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(205.9,459.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(-410.6,-10.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(327.45,343.15,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(-2.45,-1.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(101.4,310.2,1388.5,669.4000000000001);
// library properties:
lib.properties = {
	id: 'B01B43BE53374A468BB2FB61812B3D3E',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_3.png?1715921438625", id:"CachedBmp_3"},
		{src:"images/CachedBmp_5.png?1715921438625", id:"CachedBmp_5"},
		{src:"images/Html_Game_atlas_1.png?1715921438614", id:"Html_Game_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B01B43BE53374A468BB2FB61812B3D3E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;