
/**
 * 日期操作 
 * @param {function} time_stamp     日期转换时间戳
 * @param {function} time_Data      时间戳转换日期
**/



  /**
   * 日期转换时间戳
   * @param {string} data   日期
  **/
 function time_stamp(data) {
    let time = data + '';
    let strtime = new Date(time);  
    let time1 = strtime.getTime();
    return time1
}
/**
 * 时间戳转换日期
 * @param {string} data 时间戳
**/
function time_Data(data) {
  var timeDate = new Date(data); 
  // 比如需要这样的格式 yyyy-MM-dd hh:mm:ss
  let Y = timeDate.getFullYear() + '-';
  let M = (timeDate.getMonth()+1 < 10 ? '0'+(timeDate.getMonth()+1) : timeDate.getMonth()+1) + '-';
  let D = timeDate.getDate() + ' ';
  let h = timeDate.getHours() + ':';
  let m = timeDate.getMinutes() + ':';
  let s = (timeDate.getSeconds() < 10 ? '0'+timeDate.getSeconds(): timeDate.getSeconds()); 
  // console.log(Y+M+D+h+m+s);
  return Y+M+D+h+m+s;
}



export default {
time_stamp,
time_Data,
};


