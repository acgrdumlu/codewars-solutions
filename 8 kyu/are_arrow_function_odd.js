// Time to test your basic knowledge in functions! Return the odds from a list:

//First Solution
function odds(values){
  return values.filter(function(num){ if( num % 2 ) return num;});
}

//Best Solution 
var odds = vv => vv.filter(v => v % 2);