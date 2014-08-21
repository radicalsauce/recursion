// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (obj === null) {
    return "null";  
  } else if (typeof obj === "number") {
    return ""+obj+"";
  } else if (typeof obj === "string") {
    return '"'+obj+'"';
  } else if (typeof obj === "boolean") {
    return ""+obj+"";
  } else if (typeof obj === "undefined") {
    return "undefined";
  } else if (Array.isArray(obj)){
    var arrayResult = [];
    for (var i = 0; i < obj.length; i++){
      arrayResult.push(stringifyJSON(obj[i]));
    }
    return "["+arrayResult+"]"; 
  } else {
    var objectResult = {};
    for (var key in obj){
      // this crap doesn't work yet
    }
    return "{"+objectResult+"}"; 
  } 
};

