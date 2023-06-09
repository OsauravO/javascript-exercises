const leapYears = function(year) {
if(year%4===0){
  if(year%100===0 && year%400===0){
    return 1;
  }
  else{
    return 0;
  }
}
else{
  return 0;
}
    
};

// Do not edit below this line
module.exports = leapYears;
