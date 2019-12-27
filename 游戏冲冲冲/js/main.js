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
canvas.width=window.screen.width
canvas.height=window.screen.height
var ball_1=document.querySelector("#ball_1")

function Juxing(img,imgx,imgy) {
    let thiss=this
    this.x=50   //起始x坐标
    this.y=50  //起始y坐标
    this.width = 20
    this.height = 20;
    this.img =img;
    this.imgx =imgx;
    this.imgy =imgy;
    this.direction='right'   //方向
    this.moveStatus=function () {
        if(this.direction == 'left'){
            this.x-=.7;
        }
        if(this.direction == 'right'){
            this.x+=.7
        }
        if(this.direction == 'top'){
            this.y-=.7
        }
        if(this.direction == 'bottom'){
            this.y+=.7
        }
        if(this.direction == 'stop'){
            
        }
    }
    this.drawPicture=function () {
        if(this.x>=750 && this.y>=50){
            this.direction = 'bottom'
        }
        if(this.x>=750 && this.y>=280){
            this.direction = 'left'
        }
        if(this.x<=100 && this.y>=280){
            this.direction = 'top'
        }
        if(this.x<=100 && this.y<=100){
            this.direction = 'right'
        }
        if(this.x>=600 && (this.y<=100 && this.y>=60)){
            this.direction = 'bottom'
        }
        if(this.x>=600 && this.y>=200){
            this.direction = 'left'
        }
        if(this.x<100 && this.y>=200){
            this.direction = 'stop'
            game.Event.shift()
            game.data.shift()
        }   
        ctx.drawImage(this.img,this.imgx,this.imgy,40,40,this.x,this.y,this.width,this.height);
    }
}

function Zhujiao() {
    let thiss=this
    this.Zi_Da_Event=[];
    this.Launching=true;
    this.x=0;
    this.y=0;
    this.seedx=0;
    this.seedy=0;
    this.drawPicture=function () {
        ctx.drawImage(ball_1,0,43,40,40,canvas.width/2-20,canvas.height/2-20,40,40);
    }
    this.Create_Zi_Dan=function () {
        return function () {
            thiss.x+=thiss.seedx;
            thiss.y+=thiss.seedy
            ctx.drawImage(ball_1,0,0,40,40,(canvas.width/2-20)+thiss.x,(canvas.height/2-20)+thiss.y,20,20);
        }
    }
    this.moveStatus=function () {
        document.querySelector("#canvas").addEventListener("touchstart",function (e) {
            let bbox = canvas.getBoundingClientRect();
            let x =  e.touches[0].clientX  * (canvas.width/bbox.width);
            let y = e.touches[0].clientY * (canvas.height/bbox.height);
            if(thiss.Launching){
                console.log(Math.abs(x-canvas.width/2).toFixed(4))
                console.log(Math.abs(y-canvas.height/2).toFixed(4))
                let x1 = Math.abs(x-canvas.width/2).toFixed(4)
                let y2 = Math.abs(y-canvas.height/2).toFixed(4)
                let z2 = Math.sqrt(x1*x1+y2*y2)
            
                thiss.Launching=false
                thiss.x=0
                thiss.y=0
                if(x-canvas.width/2 > 0){
                    thiss.seedx=Math.abs(x-canvas.width/2)/100
                }else if(x-canvas.width/2 < 0){
                    thiss.seedx=-Math.abs(x-canvas.width/2)/100
                }
                if(y-canvas.height/2 > 0){
                    thiss.seedy= Math.abs(y-canvas.height/2)/100
                }else if(y-canvas.height/2 < 0){
                    thiss.seedy=-Math.abs(y-canvas.height/2)/100
                }
                thiss.Zi_Da_Event.push(thiss.Create_Zi_Dan());
            }
        })
    }
    this.Boundary_Collision=function() {
        if(((canvas.width/2-20)+this.x+20)>canvas.width){ //碰到右边界
            this.Launching=true
            zhujiao.Zi_Da_Event.shift()
        }
        if(((canvas.height/2-20)+this.y+20)>canvas.height){ //碰到下边界
            this.Launching=true
            zhujiao.Zi_Da_Event.shift()
        }
        if((canvas.width/2-20)+this.x<0){ //碰到左边界          
            this.Launching=true
            zhujiao.Zi_Da_Event.shift()
        }
        if((canvas.height/2-20)+this.y<0){ //碰到上边界
            this.Launching=true
            zhujiao.Zi_Da_Event.shift()
        }
    }
}



function Game(){
    let thiss=this
    this.Event=[]
    this.data = []
    this.Create_Object_Zuma = function (callback,img,imgx,imgy){
        let juxing=new callback(img,imgx,imgy)
        this.data.push(juxing)
        let eve=function () {
            juxing.drawPicture()
            juxing.moveStatus()
        } 
        this.Event.push(eve)
    }
    this.clear=function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

}

let game=new Game()
let zhujiao=new Zhujiao()



function initstart(){
    setInterval(() => {
        let color=Math.random();
        let data=[]
        if(color > 0.5){
            data=[Juxing,ball_1,0,0]
        }else if(color < 0.5){
            data=[Juxing,ball_1,43,0]
        }
        game.Create_Object_Zuma(data[0],data[1],data[2],data[3])
    }, 500);
    function animate() {
        game.clear();//定时清除画布

        for (let i = 0; i < game.Event.length; i++) {
            game.Event[i]()
        } 
        for (let i = 0; i < zhujiao.Zi_Da_Event.length; i++) {
            zhujiao.Zi_Da_Event[i]()
        } 
        zhujiao.drawPicture()
        zhujiao.Boundary_Collision()
        requestAnimationFrame(animate)
    }
    animate()
    zhujiao.moveStatus()
 


}

initstart()

// 优化生成子弹函数
// 生成子弹速度有问题

// 矩形1的参数是：左上角的坐标是(x1,y1)，宽度是w1，高度是h1;
// 矩形2的参数是：左上角的坐标是(x2,y2)，宽度是w2，高度是h2。

// 在检测时，数学上可以处理成比较中心点的坐标在x和y方向上的距离和宽度的关系。

// 即两个矩形中心点在x方向的距离的绝对值小于等于矩形宽度和的二分之一，同时y方向的距离的绝对值小于等于矩形高度和的二分之一。

// x方向：| (x1 + w1 / 2) – (x2 +w2/2) | < |(w1 + w2) / 2|
// y方向：| (y1 + h1 / 2 ) – (y2 + h2/2) | < |(h1 + h2) / 2 |


// 圆形1的左上角坐标是(x1,y1)，半径是r1，
// 圆形2的左上角的坐标是(x2,y2)，半径是r2。

// 因为MIDP1.0中没有浮点数，而且浮点数的运算比较慢，
// 所以我们将条件做一个简单的变换：对于条件的两边都进行平方，这样就去掉了开方的运算步骤。

// 下面是数学表达式：
// (x1 – x2)2 + (y1 – y2)2 < (r1 + r2)2