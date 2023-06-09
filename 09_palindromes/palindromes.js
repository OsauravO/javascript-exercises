const palindromes = function (str) {
  var newstr=str.split("").reverse().join("");
  if(newstr===str){
    return true;
  }
  else{
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
