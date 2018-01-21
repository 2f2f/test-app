var data = document.getElementsByClassName('FormData');
var option = [];
var issuer = [];
var cusip = [];
var value = [];
var prn = [];
var callput = []; 
var lines = [];
var Lines = [];

for (let i = 0; i < data.length; i++){
	if (data[i].textContent == 'Call' || data[i].textContent == 'Put'){
		option.push(data[i]);
	}
}
for (let i = 0; i < option.length; i++){
	issuer.push(option[i].parentNode.children[0].textContent);
	cusip.push(option[i].parentNode.children[2].textContent);
	callput.push(option[i].parentNode.children[6].textContent);
	value.push(option[i].parentNode.children[3].textContent);
	prn.push(option[i].parentNode.children[4].textContent);
}

for (let i = 0; i < option.length; i++){
	lines.push(issuer[i]);
	lines.push(cusip[i]);
	lines.push(callput[i]);
	lines.push(value[i]);
	lines.push(prn[i]);
}

while (lines.length > 0){
	Lines.push(lines.splice(0,5));
}

console.log(Lines[0]);

var table = document.createElement('table');
var tableBody = document.createElement('TBODY')
table.border = '1'
table.appendChild(tableBody);

var heading = new Array();
heading[0] = "Issuer"
heading[1] = "CUSIP"
heading[2] = "CALL/PUT"
heading[3] = "VALUE"
heading[4] = "AMT"


var tr = document.createElement('TR');
tableBody.appendChild(tr);

for (let i = 0; i < heading.length; i++) {
    var th = document.createElement('TH')
    th.width = '75';
    th.appendChild(document.createTextNode(heading[i]));
				tr.appendChild(th);
	}

for (var k = 0 ; k < Lines.length; k++){
	var tr = document.createElement('TR');

	for (var j = 0; j < Lines[k].length; j++){
		var td = document.createElement('TD')
		td.appendChild(document.createTextNode(Lines[k][j]));
		tr.appendChild(td)
		}

	tableBody.appendChild(tr);
	}


document.write('OPTIONS DATA')
document.body.appendChild(table);