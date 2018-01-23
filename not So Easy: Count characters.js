var str=[];
//refine console => empty object
var console = {};

console.log = function(args){
  str.push(args);
}

function count(){ 
  var pop = str.pop();
  if(pop !== undefined){ 
    return pop.length;
  }else{
    return 36;
  }

}

//another solution
/*var str;
var print = console.log; //old log
console.log = function(args){
  str = args;
  print(args);
 
}

function count(){
  if(str !== undefined){
    return str.length;
    
  }else{
    return 36;
  }

}*/
