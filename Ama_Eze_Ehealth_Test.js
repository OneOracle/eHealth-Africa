// JavaScript Document

//question 3
// where inputArr is an array e.g var inputArr = [1, 3, 7, 7, 8, 9, 9, 9, 10] 
function compactArray (inputArr){
	var transformedArr=new Array();
	inputArr.sort();
	for(i=0;i<inputArr.length;i++){
		if(inputArr[i]==inputArr[i+1]) {continue}
		transformedArr[transformedArr.length]=inputArr[i];
	}
	return transformedArr;
}

//question 4
//where inputArr is an array e.g var inputArr = [1, 2, 3, 4, 5, 6] and rotationOrder an integer e.g var rotationOrder = 2
function rotateArray (inputArr, rotationOrder){
	var inputArrCount = inputArr.length;
    if (inputArr == null || rotationOrder <= 0 || rotationOrder > inputArrCount ) {
		//The input array must not be empty and the order must not be less than or equal to zero and also order must not be more than count of input array
        throw new IllegalArgumentException("invalid function inputs");
    }
    var offset = inputArr.length - rotationOrder % inputArr.length;
    if (offset > 0) {
        var copyInputArr = inputArr.clone();
        for (i = 0; i < inputArr.length; ++i) {
            j = (i + offset) % inputArr.length;
            inputArr[i] = copyInputArr[j];
        }
    }
	return inputArr;
}

//question 5
//where inputArr is an array e.g var inputArr = [3, 6, 8] as the case may be
function LCMArray(inputArr) {  
    if (toString.call(inputArr) !== "[object Array]"){    
        return false;  
	}
 	var r1 = 0, r2 = 0;  
    var l = inputArr.length;  
    for(i=0; i<l; i++) {  
        r1 = inputArr[i] % inputArr[i + 1];  
        if(r1 === 0) {  
            inputArr[i + 1] = (inputArr[i] * inputArr[i+1]) / inputArr[i + 1];  
        }else{  
            r2 = inputArr[i + 1] % r1;  
            if(r2 === 0) {  
                inputArr[i + 1] = (inputArr[i] * inputArr[i + 1]) / r1;  
            }else{  
                inputArr[i+1] = (inputArr[i] * inputArr[i + 1]) / r2;  
            }  
        }  
    }  
    return inputArr[l - 1];  
}  

//question 1
/*
 
There are 3 types of depth-first traversals considering the diagram below:

A _> B _> C
|_> D _> E
    |_> F

1. pre-order
	A. Display the data part of the current or root element
	B. Traverse the left subtree by repeatedly calling the pre-order function
	C. Traverse the right subtree by repeatedly calling the pre-order function
	Result: A, D, F, E, B, C
	
2. in-order
	A. Traverse the left subtree by repeatedly calling the in-order function
	B. Display the data part of the current or root element
	C. Traverse the right subtree by repeatedly calling the in-order function
	Result: F, D, E, A, B, C
	
3.	post-order
	A. Traverse the left subtree by repeatedly calling the post-order function
	B. Traverse the right subtree by repeatedly calling the post-order function
	C. Display the data part of current or root element
	Result: F, E, D, C, B, A
	
*/

//question 2
// where string1 and string 2 are string variables e.g string1 = "wonderful", string2 = "fdkowzu"
// i believe from your question, N = position of characters found in string1 respectively

//String return version
function find_chars(string1, string2) {
	var arr1 = string1.split(''),
	arr2 = string2.split(''),
	newString = "",
	indexOfChar;

	arr2.forEach(function(char) {
		indexOfChar = arr1.indexOf(char);
		if (indexOfChar > -1) {
			// Remove the character that was found to avoid matching against it again and add to form new word
			newString = newString+arr1.splice(indexOfChar, 1);
		} else {
			return;
		}
	});

  return newString;
}

//N version (output will look like this [6,0,2])
function find_chars(string1, string2) {
	var arr1 = string1.split(''),
	arr2 = string2.split(''),
	N = "",
	indexOfChar;

	arr2.forEach(function(char) {
		indexOfChar = arr1.indexOf(char);
		if (indexOfChar > -1) {
			// Remove the character that was found to avoid matching against it again and add to form new word
			N = N+", "+indexOfChar;
		} else {
			return;
		}
	});

  return N;
}

//N*N Verson
function find_chars(string1, string2) {
	var arr1 = string1.split(''),
	arr2 = string2.split(''),
	N = "",
	indexOfChar;

	arr2.forEach(function(char) {
		indexOfChar = arr1.indexOf(char);
		if (indexOfChar > -1) {
			// Remove the character that was found to avoid matching against it again and add to form new word
			N = N*indexOfChar;
		} else {
			return;
		}
	});

  return N;
}

//question 6
// Do not have indepth knowledge of Angular.js with Pouchdb but can learn on the fly
// Based on my study on it, i was able to come up with this codes...

//include pouchDB plugin to your App frontEnd Design
/*
<script src="pouchdb-nightly.min.js"></script>
<form id="addTestForm" method="post" action="">
	<input id="name" name="name" type="text" value="" />
	<input id="addName" name="addName" type="submit" value="Add Name" />
</form>
*/

//instantiate database schema which creates _pouch_pouchtest
var pdb = new PouchDB('pouchtest');

var form, addName;

//get form fields value by their ID of the submited form
form = document.getElementById('addTestForm');

addName = function(event) {
	var t = {};
	
	t.name = form.name.value;
	
	//since we are using put method, we need generate an ID, i am using computer's timestamp else use form ID
	if (event.target._id.value == '') {
		t._id = new Date().getTime() + '';
	} else {
		t._id = event.target._id.value;
	}
	
	pdb.put(t, function(error, response) {
		if (error) {
			console.log(error);
			return;
		} else if(response && response.ok) {
		  //Do something with the response.
		  alert('name entered successfully!');
		}
	});
}

//Add an event handler
form.addEventListener('submit', addName);

//add Jasmine and Karma via the frontEnd Design
