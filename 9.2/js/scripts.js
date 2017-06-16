var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek',
'Łukasz','Staś'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Marian'
	if(allNames.indexOf(newName) === -1){
		 allNames.push(newName);
	}

var indexOfnewName = allNames.indexOf('newName');
console.log(allNames);
console.log(indexOfnewName);

