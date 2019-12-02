function fun(n,o) {
    console.log('n',n)
    console.log('o',o)
    return {
      fun:function(m){
        console.log('m',m)
        console.log('n',n)
        return fun(m,n);
      }
    };
  }
  var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);
  var b = fun(0).fun(1).fun(2).fun(3);
  var c = fun(0).fun(1);  c.fun(2);  c.fun(3);


if([]==false){console.log(1)}//真
if({}==false){console.log(1)}//假
if([]){console.log(1)}       //真
if([1]==[1]){console.log(1)} //假

var c = [1];
var d = c;
//这里的d引用的c的地址，所以一样
console.log(c==d); //true

function repeat(func,steps,dur){
  return function(str){
    function timer(){
      setTimeout(function(){
        func(str);
        timer()
      },dur)
    }
    timer()
  }
}
const rep=repeat(console.log,4,3000);
rep('ccc')
console.log('end')

// 使用js实现一个repeat法,functionrepeat(func,times,wait){}, 
// const repeatFunc = repeat(alert,4,3000),调用这个repeatedFunc('helloworld'),会alert4次hellworld,每次间隔3秒
function repeat(func,times,wait){
var i=0;
func(i);
var hel=function(){setTimeout(function(){
      i++
      if(i<times){
        func(i);
        hel();
      }
    },wait)
 }
 hel();
}
const rep=repeat(console.log,4,3000);
rep
console.log('end')
