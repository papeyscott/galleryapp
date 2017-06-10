/*function prepareGallery(){

	//get the thumbs
	var thumbs = document.getElementById("thumbs");

	//get the links
	var links = thumbs.getElementsByTagName("a");
	
	//loop through the elements and attach events
	for(var i = 0; i < links.length; ++i){

		links[i].addEventListener('click', function(e){

			var href = this.getAttribute("href");
			var place = document.getElementById("placeholder");
			var mainimg = place.childNodes[0];

			//swap 
			mainimg.setAttribute("src", href);

			e.preventDefault();
		},false)
	}
}

prepareGallery();


	var display = (function(){
		var place = document.getElementById("placeholder");
		var mainimg = place.childNodes[0];

		return{
		setmainimg:function(src, href){

				mainimg = (src,href);
			},

		getmainimg:function(){
			return mainimg;
		}
	}
	})();

	var changeImg = (function(){
			var img = [0];
		return{
			setlinks:function(href){
				img = "href";
			},

			
			updateimg:function(display){
				display.setmainimg(this.change());
			}
		}
	})();

	var thumbs = document.getElementById("thumbs");
	//get the links
	var links = thumbs.getElementsByTagName("a");
	for(var i = 0; i < links.length; ++i){

		links[i].addEventListener('click', function(e){

			var href = this.getAttribute("href");
	
	
			
			e.preventDefault();
		
		},false)

	}
*/


	window.$on = function(target, type,cb){
		target.addEventListener(type,cb,false);
	}
var CORE =(function(){
	"use strict";

	//keep track of modules
	var modules = {};

	function addModule(module_id, mod){
		modules[module_id]= mod;
	}

	function registerEvents(evt,module_id){
		modules[module_id].events=evt;
	}

	function triggerEvents(evt){
		var mod;
		for(mod in modules){
			if(modules.hasOwnProperty(mod)){
				mod = modules[mod];
				if(mod.events && mod.events[evt.type]){
					mod.events[evt.type](evt.data);
				}
			}
		}
	}

	return{
		addModule: addModule,
		registerEvents: registerEvents,
		triggerEvents:triggerEvents,
	}
})();
			
			var sb = (function(){
				function listen(evt, module_id){
					CORE.registerEvents(evt,module_id);
				}

				function notify(evt){
					CORE.triggerEvents(evt);
				
				}

				return{
					listen:listen,
					notify:notify
				}

			})();





































/*
(function scopeme(w){
	var count = 0;
	
	w.api = {
		increment: function(){
		return ++count;
	},
	gimmecount:count
	}

	//return w.api;
})(window);

console.log(api.increment());



var user = {
	name: "molly",
	age: 30,
};

function showme(){
//	console.log("this is" + this.name);
}


showme.call(user);



var arraylike = {"0": "prof", "1": "dimeji", "2": "mercy", length:3};
for(var i = 0; i < arraylike.length; ++i){
//	console.log(arraylike[i]);
}

var arr = ["james", "bill", "mark", "mary"];
//console.log(arr.join(":"));
//console.log(arr.splice(1,2));
//console.log(arr);

//arr.forEach(function(v,i,a){
//	console.log(v);
//	a[i] = v + "'s";
//});

//console.log(arr);

array.protoype.forEach.call(arraylike, function(v){
	console.log(v);
})

//var spl = array.protoype.splice.call(arraylike,1,2);
//console.log(spl);*/