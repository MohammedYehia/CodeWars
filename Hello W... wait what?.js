var helloWorld = function () {
  // split by new String() => empty String
  var arr = helloWorld.name.split(new String())//h,e,l,l,... 
  var thirty = arr.length + arr.length + arr.length;//30
  thirty++//31
  thirty++//32
  var space = String.fromCharCode(thirty); //space ' ' from ascii code
  thirty++//33
  var exclamationMark = String.fromCharCode(thirty); // ! from ascii code
  
  // another way for getting ' ' and ! //
  /*
  var tempFunc = new String(new Function());
  var funArr = tempFunc.split(new String());
  funArr.pop();funArr.pop();funArr.pop();funArr.pop();
  var space = funArr.pop(); // space 
  var spaceAscii = space.charCodeAt();
  spaceAscii++;
  var exclamationMark = String.fromCharCode(spaceAscii);
  */
 //////
  var h = arr.shift().toUpperCase();
  var e = arr.shift();
  var d = arr.pop();
  var l = arr.pop();
  var r = arr.pop();
  var o = arr.pop();
  var W = arr.pop();
  
  return h+e+l+l+o+ space +W+o+r+l+d+exclamationMark;
}
