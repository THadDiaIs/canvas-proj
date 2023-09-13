this.onmessage = function(event){
	for(var x = 0;x<event.data.length;x++){
		event.data[x] = event.data[x]*event.data[x]; 
	}
	
	postMessage("El worker dice que: "+event.data);
}
