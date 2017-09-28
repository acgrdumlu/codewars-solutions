function isIsogram(str) {
  str = str.toLowerCase();
  str = str.split("");
  str = str.sort();
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  } return true;
};


//Testing
isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case