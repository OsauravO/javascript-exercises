const palindromes = function (str) {
  str=str.toLowerCase().replace(/[^a-z0-9]/g, "");
  newstr=str.split("").reverse().join("");
  if(newstr===str){
    return true;
  }
  else{
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
