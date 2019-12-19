// 平滑的动画
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
//    获取canvas   ctx获取创建2d的能力
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

 
    var img=document.querySelector('#spr')
    // console.log(img.width,img.height)
    canvas.width=100
    canvas.height=100
    ctx.drawImage(img,0,0,img.width,img.height,0,0,50,50);
    ctx.drawImage(img,0,0,img.width,img.height,50,50,50,50);
    
    
    document.querySelector("body").addEventListener("touchstart",function (e) {
        console.log(e.touches[0].clientX,e.touches[0].clientY)
    })
    document.querySelector("body").addEventListener("touchend",function (e) {
        console.log(e.changedTouches[0].clientX,e.changedTouches[0].clientY)
    })


    {levels:[{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},{star: 0, highScore: 0, unlocked: true},]}
    for (let index = 0; index < JSON.parse(localStorage.getItem("levelBubble")).length; index++) {
        const element = array[index];
        
    }