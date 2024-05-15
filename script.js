
// //your JS code here. If required.
// 
// for(let i = 1; i <= 20; i++) {
// 	if(i % 15 == 0) {
// 		alert("FizzBuzz");
// 	}
// 	else if(i % 3 == 0) {
// 		alert("Fizz");
// 	}
// 	else if(i % 5 == 0) {
// 		alert("Buzz");
// 	}
// 	else {
// 		alert(i);
// 	}
// 	alert("\n")
// }


//your JS code here. If required.
let fizzBuzz = function (n) { 

	const arr = [] 
	for (i = 1; i <= n; i++) { 
		if (i % 15 === 0) arr.push("FizzBuzz") 
		else if (i % 3 === 0) arr.push("Fizz") 
		else if (i % 5 === 0) arr.push("Buzz") 
		else arr.push(i.toString()) 
	} 
	return arr 

}; 
console.log(fizzBuzz(15))
