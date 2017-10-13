//First Solution 

function removeChar(str){
 //You got this!
  var str = str.split('');
  var first = str.pop();
  var last = str.shift();
  return str.join('');
};

removeChar('abcgd');

//Best Solution 

const removeChar = str => str.slice(1,-1);