/*
In this kata, your task is to identify the pattern underlying a sequence of numbers. For example, if the sequence is [1, 2, 3, 4, 5], then the pattern is [1], since each number in the sequence is equal to the number preceding it, plus 1.

A few more rules :

pattern may contain negative numbers.
sequence will always be made of a whole number of repetitions of the pattern.
Your answer must correspond to the shortest form of the pattern, e.g. if the pattern is [1], then [1, 1, 1, 1] will not be considered a correct answer.
 */

function findPattern(arr) {
    var newArr = [];
    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i] - arr[i - 1]);
    }


/*    return newArr.reduce(function (prevVal, currVal) {
        if (newArr.every(function (value) {
            return value;
            }) === prevVal) {
            newArr = [];
            return newArr.push(currVal);
        }
        else {
            return newArr.filter(function (element, index) {
                return newArr.indexOf(element) === index;
            });
        }
    });*/

    /*newArr.filter(function (element, index) {
        return arr[0] === element;
    });*/


    /*return newArr.filter(function (element, index) {
        return newArr.indexOf(element) === index;
    });*/

    /*arr.map(function(currValue, index){

        console.log(arr[index + 1] - currValue);
    })*/
    return newArr;
}

console.log(findPattern([1, 2, 3, 4, 5]));
console.log(findPattern([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]));
console.log(findPattern([1, 5, 2, 3, 1, 5, 2, 3, 1]));
console.log(findPattern([1, 5, 4, 8, 7, 11, 10, 14, 13]));
console.log(findPattern([0, 1]));
