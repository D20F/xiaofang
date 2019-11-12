//数组去重，并记录每个数据出现的次数
var array=[1,3,3,3,22,3,1,2,3,4,5,6,7,8,1,2,3,4,5,7,66,6,6,6,4,4]
    console.log(array)
    for(var i=0;i<array.length;i++){
      var ccc=1;
      for(var l=i+1;l<array.length;l++){
        if(array[i]==array[l]){
          array.splice(l,1)
          l--
          ccc++
        } 
      }
      var b=array[i]
      array[i]={s:ccc}
      array[i][b]=ccc
      // delete array[i].s;
    }
    console.log(array)
