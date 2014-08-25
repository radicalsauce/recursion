// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var doc = document.body;	
  var results = [];
  
  var getElem = function(elem) {
    if (elem.classList && elem.classList.contains(className)) {
      results.push(elem);
    }

    for (var i = 0; i < elem.childNodes.length; i++) {
      getElem(elem.childNodes[i]);
    };
  };

  getElem(doc);
  return results;

};
