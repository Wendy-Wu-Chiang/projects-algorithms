// 1: Push Front
// Given an array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods.

// function pushToFront(oldArr, newValue){
//     for (var i=oldArr.length-1; i >= 0; i--){
//     oldArr[i+1]=oldArr[i];
//     }
//     oldArr[0]=newValue;
// }
// var myArr = [2,3,4,5,6,7]
// pushToFront(myArr, 1);
// console.log(myArr);
// ----------------------------------------------------

// function pushToFront(arr, val){ 
//     var temp1=arr[0], temp2=arr[1];
//     for(var i=0; i<arr.length && temp1 !=undefined; i++){
//         arr[i+1]=temp1;
//         temp1=temp2;
//         temp2=arr[i+2];
//     }
//     arr[0] = val;
// }

// var myArr = [2,3,4,5,6,7];
// pushToFront(myArr, 1);
// console.log(myArr);
// --------------------------------------------------------

// 2: Pop Front
// Given an array, remove and return the value at the beginning of the array.
//  Do this without using any built-in array methods except pop().

// function popFront(arr){
//     var returnVal = arr[0];
//     for (var i = 1; i < arr.length; i++){
//         arr[i-1] = arr[i];
//     }
//     arr.pop();
//     return returnVal
// }
// var myArr = [1,2,3,4,5,6,7];
// popFront(myArr);
// console.log(myArr)

// --------------------------------------------------------
// 3: Insert At
// Given an array, index, and additional value, insert the value into array at given index. 
// Do this without using built-in array methods. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, val, index){
    for(var i = arr.length-1; i>=index; i--){
        arr[i+1]=arr[i];
    }
    arr[index] = val;
}
var myArr = [1,2,3,5,6];
insertAt(myArr, 4, 3);
console.log(myArr);

// -----------------------------------------------------------
// 4:Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). 
// Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, ind) {
    ind = Math.floor(ind); // Rounds the index down
    // If index is out of bounds
    if (ind >= arr.length || ind < 0) {
        return null; // Return an arbitrary value
    }
    var returnVal = arr[ind]; // The value we will return
    // Loop through the array - starting at the index after the one whose value will be removed
    for (var i = ind + 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop(); // Remove the last value
    // arr.length--; // Alternate way to remove last value
    return returnVal;
}


// -----------------------------------------------------------
// 5: Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
//  For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        // Swap pairs:
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}

// ---------------------------------------------------------------
// 6:Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. 
// Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. 
// Because array elements are already in order, all duplicate values will be grouped together. 
// As with all these array challenges, do this without using any built-in array methods.
// Second: Solve this without using any nested loops.

function removeDupesV1(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] == arr[i]) { // If the value ahead is a duplicate of the current value at index i
            // Remove that value and move everything afterwards to the left an index
            // Remove the last item in the array
            while (arr[i+1] == arr[i]) {
                removeAt(arr,i+1);
            }
        }
    }
}

/* Changing the length of the array at will - useful for second version of remove duplicates */

// var x1 = [3, 'hello', 10.5];

// --------------------------------------------------------

function removeDupesV2(arr) {
    if (arr.length <= 1) { // If array is empty or has only one value, no duplicates possible
        return;
    }
    var lastUniqueVal = arr[0];
    var nextUniqueInd = 1; // The index for where the next unique value will be put in the array
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != lastUniqueVal) {
            lastUniqueVal = arr[i];
            arr[nextUniqueInd] = arr[i];
            nextUniqueInd++;
        }
    }
    arr.length = nextUniqueInd; // Remove the duplicates
}