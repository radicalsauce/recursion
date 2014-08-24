// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (obj === null) {
    return "null"; 

  } else if (typeof(obj) === 'function') {
    return;

  } else if (typeof obj === "number") {
    return ""+obj+"";

  } else if (typeof obj === "string") {
    return '"'+obj+'"';

  } else if (typeof obj === "boolean") {
    return ""+obj+"";

  } else if (typeof obj === "undefined") {
    return;

  } else if (Array.isArray(obj)){
    var arrayResult = [];
    for (var i = 0; i < obj.length; i++){
      arrayResult.push(stringifyJSON(obj[i]));
    }
    return "["+arrayResult+"]"; 

  } else {
    var objectResult = [];
    for (var key in obj){
      if (typeof obj[key] != "function" && typeof obj[key] != "undefined") {
        objectResult.push(stringifyJSON(key));
        objectResult.push(':');
        objectResult.push(stringifyJSON(obj[key]));
      }     
    }
    objectResult = objectResult.toString().replace(/,\:,*/g, ':');
    return "{"+objectResult+"}"; 
  } 
};

