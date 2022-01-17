// 1: reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, 
// with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

// function reverseArray(arr){
//     for(var i=0; i< arr.length / 2; i++){
//         var temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 -i] = temp;
//     }
// }
// var myArr = [1,2,3,4,5];
// reverseArray(myArr);
// console.log(myArr);
// ---------------------------------------------------------

// function reverseArr(arr, startingInd = 0, endingInd = arr.length - 1) {
//     var numIterations = 0; // Number of full iterations of the following for loop
//     for (var k = startingInd; k < (startingInd+endingInd)/2; k++) {
//         var temp = arr[k];
//         arr[k] = arr[endingInd - numIterations];
//         arr[endingInd - numIterations] = temp;
//         numIterations++;
//     }
// -------------------------------------------------------------
// 2: rotate
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, 
// with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function rotateArr(arr, moveBy){
    var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[arr.length - 1];
           
            for (var k = arr.length - 2; k >= 0; k--) {
                arr[k+1] = arr[k];
            }
            arr[0] = temp; 
        }
    } else {
        
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[0];
           
            for (var k = 1; k < arr.length; k++) {
                arr[k-1] = arr[k];
            }
            arr[arr.length - 1] = temp; 
           
        }
    }
}
// ---------------------------------------
function rotateArrV2(arr, moveBy) {
    reverseArr(arr); // Reverse entire array
    var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        reverseArr(arr,0,actualMovementsNeeded - 1);
        reverseArr(arr,actualMovementsNeeded, arr.length - 1);
    } else {
        reverseArr(arr,0,arr.length-actualMovementsNeeded - 1);
        reverseArr(arr, arr.length - actualMovementsNeeded,arr.length - 1);
    }
}

// 3: Filter RangeAlan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. Work in-place: 
// return the array you are given, with values in original order. No built-in array functions.
function filterRange(arr, minVal, maxVal) {
    for (var i = 0; i < arr.length; i++) {
        // If value is NOT from min to max (inclusively)
        if (arr[i] < minVal || arr[i] > maxVal) {
            // Move everything that comes afterwards left one index
            for (var k = i+1; k < arr.length; k++) {
                arr[k-1] = arr[k];
            }
            arr.length--; // Decrease the length of the array by one
            i--; // To cancel the i++ operation effectively
        }
    }
}
// --------------------------------------------------------
function filterRangeV2(arr, minVal, maxVal) {
    var nextInd = 0; // Index where the next array value that's from min to max (inclusively) will go
    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= minVal && arr[i] <= maxVal) {
            arr[nextInd] = arr[i];
            nextInd++; // Increment index for next valid value found
        }
    }
    arr.length = nextInd; // Chop off excess values
}
// 4: Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, 
// followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concatArrays(arr1, arr2) {
    var newArr = [];
    var curInd = 0; // Current index for where we'll put new items
    // Loop through the first array and push those items into the new array
    for (var i = 0; i < arr1.length; i++) {
        // newArr.push(arr1[i]);
        newArr[curInd] = arr1[i];
        curInd++;
    }
    // Loop through the first array and push those items into the new array
    for (var i = 0; i < arr2.length; i++) {
        // newArr.push(arr1[i]);
        newArr[curInd] = arr2[i];
        curInd++;
    }
    return newArr;
}
// ------------------------------------------------------
function concatArraysV2(arr1, arr2) {
    var newArr = [];
    buildFrom(newArr,arr1); // Add values from first array to the new array
    buildFrom(newArr,arr2); // From second array
    return newArr;
}
function buildFrom(arrayToBuild, arrayFrom) {
    var curInd = arrayToBuild.length; // Starting index
    // Loop to add values to new array
    for (var i = 0; i < arrayFrom.length; i++) {
        arrayToBuild[curInd] = arrayFrom[i];
        curInd++;
    }
}