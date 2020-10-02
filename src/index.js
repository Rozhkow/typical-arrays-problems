
exports.min = function min (array) {
if(array === undefined) return 0;
var len = array.length;
if(len === 0) {
 return 0;
}
var MIN = array[0];
    for (var i = 0; i < array.length; i++) {
        if (MIN > array[i]) MIN = array[i];
    }
    return MIN;
}

exports.max = function max (array) {
if(array === undefined) return 0;
var len = array.length;
if(len === 0) {
 return 0;
}
var MAX = array[0];
    for (var i = 0; i < array.length; i++) {
        if (MAX < array[i]) MAX = array[i];
    }
    return MAX;
}

exports.avg = function avg (array) {
if(array === undefined) return 0;
var len = array.length;
if(len === 0) {
 return 0;
}
var sum = 0;
var AVG = 0;
var n = array.length;
    for(var i = 0; i < array.length; i++){
	sum += array[i];
    }
AVG = sum/n;
  return AVG;
}
