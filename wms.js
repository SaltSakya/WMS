// JavaScript Document
function load(){
	alert("load");
	return;
}

function upload(name, count){
	alert("upload");
	return;
}
function fillMenu(data, lan){
	document.title = $('title').text().replace('{Title}', data[lan].Title);
	
	var innerhtml = $('body').html();
	for(var markname in data[lan]){
		var rep = new RegExp("{"+markname+"}",'g');
		innerhtml = innerhtml.replace(rep, data[lan][markname]);
	}
	alert(innerhtml);
	$('body').html(innerhtml);
}
function checkStocks(){}

$(window).load(function(){
			fillMenu(data, "ZH");
		});