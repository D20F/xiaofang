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
        }else if(this.direction == 'right'){
            this.x+=.7
        }else if(this.direction == 'top'){
            this.y-=.7
        }else if(this.direction == 'bottom'){
            this.y+=.7
        }else if(this.direction == 'stop'){
            
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
    this.drawPicture=function () {
        ctx.drawImage(ball_1,0,43,40,40,canvas.width/2-20,canvas.height/2-20,40,40);
    }
    this.moveStatus=function () {
        document.querySelector("#canvas").addEventListener("touchstart",function (e) {
            let bbox = canvas.getBoundingClientRect();
            let x =  e.touches[0].clientX  * (canvas.width/bbox.width);
            let y = e.touches[0].clientY * (canvas.height/bbox.height);
            console.log(x-canvas.width/2,y-canvas.height/2)
        })
    }
    this.emission=function () {
        ctx.drawImage(ball_1,0,43,40,40,350,154,40,40);
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
        zhujiao.drawPicture()

        requestAnimationFrame(animate)
    }
    animate()

    zhujiao.moveStatus()
 


}

initstart()

