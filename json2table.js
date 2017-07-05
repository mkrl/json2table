
/* =======variables========== */

var inputfile = "./sample.json"; //path to JSON file
var outputfile = "./result.csv" //path to output file, comma-separated csv
var amount = 1000; //amount of table rows in the output file

/* ========================== */

var fs = require('fs'), json2csv = require('json2csv'), flatten = require('flat');
var json = JSON.parse(fs.readFileSync(inputfile, 'utf8')); //parsing local json file

//a function to sort json keys alphabetically to make sure table will be displayed correctly
function sortObject(obj) {	
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}

//getting 1st json object
var flatjson = flatten(json[0]);
var key_array = Object.keys(flatjson);

//iterating the rest starting with 1
for (i=1; i < 1000; i++) {
	
	try {
		
		var fjson = flatten(json[i]);
		var i_key_array = Object.keys(fjson);
		
		//merging arrays to create a header array
		var a = key_array, b = i_key_array;
		var c = a.concat(b);
		var d = c.filter(function (item, pos) {return c.indexOf(item) == pos});
		key_array = d;
		
	} catch (err) {
	  console.error(err);
	}
}



//Writing a header and 1st entry
try {
	var flatjson = flatten(json[0]);
	//creating non-existing values for 0th flattened json object, sorting
	var len,j;
	for (len = d.length, j=0; j<len; ++j) {
		if(!flatjson.hasOwnProperty(d[j])){flatjson[d[j]] = '';}
	}
	var sortjson = sortObject(flatjson);
	var result = json2csv({ data: sortjson}); 
	fs.writeFile(outputfile, result+"\n"); //header, writhing a file
	console.log(result);
} catch (err) {
	console.error("**** Woops! ****\n"+err);
}

//Writing everything else
for (i=1; i < amount; i++) {
	try {
		var flatjson = flatten(json[i]);
		//creating non-existing values for every flattened json object, sorting
		var len,j;
		for (len = d.length, j=0; j<len; ++j) {
			if(!flatjson.hasOwnProperty(d[j])){flatjson[d[j]] = '';}
		}
		var sortjson = sortObject(flatjson);
		var result = json2csv({ data: sortjson, hasCSVColumnTitle: false}); 
		fs.appendFile(outputfile, result+"\n"); //rest, appending a file
		console.log(result);
	} catch (err) {
		console.error("**** Woops! ****\n"+err);
	}
}


