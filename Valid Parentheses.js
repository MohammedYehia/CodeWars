// kata=> https://www.codewars.com/kata/52774a314c2333f0a7000688


function validParentheses(parens){
  var len =  parens.length;
  for (var i = 0; i <= len/2; i++) {
    parens = parens.replace('()', '');
  }
  
  return parens === '';
}
