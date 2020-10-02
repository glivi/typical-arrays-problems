
exports.min = function min (array) {

  if (arguments.length !== 0) {
    if (array.length !== 0) {
      return Math.min.apply(null, array);
    } else {
      return 0;
    }
  } else {
    return 0;
  }
 
}

exports.max = function max (array) {
  if (arguments.length !== 0) {
    if (array.length !== 0) {
      return Math.max.apply(null, array);
    } else {
      return 0;
    }
  } else {
    return 0;
  }
  
}

exports.avg = function avg (array) {
  if (arguments.length !== 0) {
    if (array.length !== 0) {
      return array.reduce((a, b) => a + b, 0) / array.length;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
  
}
