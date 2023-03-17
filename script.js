function calculateMinCost() {
  //your code here
	var inputdata = document.querySelector("#rope-lengths").value;
	var inputarr = inputdata.split(",");

	for(var i=0;i<inputarr.length;i++){
		inputarr[i] = Number(inputArr[i]);
	}
	var cost =0;

	 while(inputarr.length>1){
		 	inputarr.sort(function(a,b){return a-b;});
		 var newRope = inputarr[0]+inputarr[1];
		 cost+=newrope;
		 inputarr.splice(0,2);
		 inputarr.push(newRope);

	 }
	document.querySelectore("#result").textContent=cost;
  
  
  
}  
