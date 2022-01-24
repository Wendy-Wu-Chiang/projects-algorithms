// 1: do [2,3,4,5,1,6] -> [1,2,3,4,5,6]
// function minToFront(arr){
//     var startNum = 0;
//     var smallestNum = arr[startNum];
//     for( var i=0; i < arr.length; i++){
//         if(smallestNum > arr[i]){
//             startNum = i;
//             smallestNum = arr[startNum]
//         }
//     }
//     for(var y = startNum; y > 0; y --){
//         arr[y] = arr[y-1];
//     }
//     arr[0] = smallestNum;
//     return arr;
// }
// console.log(minToFront([2,3,4,5,1,1,1,6]));
