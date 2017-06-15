getTriangleArea(10, 6);
getTriangleArea(0, 5);
getTriangleArea(10, 15);
getTriangleArea(20,30);
getTriangleArea(0, 0);


    function getTriangleArea(a, h) {

        if (a > 0 && h > 0) {
    		 return (a*h)/2;
		} 
		else{
    		return 'Nieprawidłowe dane';
		} 		
		
	}
console.log('wynik: ' +  getTriangleArea(10, 6));

console.log('wynik: ' +  getTriangleArea(0, 5));

console.log('wynik: ' +  getTriangleArea(10, 15));

console.log('wynik: ' +  getTriangleArea(20, 30));

console.log('wynik: ' +  getTriangleArea(0,0));

