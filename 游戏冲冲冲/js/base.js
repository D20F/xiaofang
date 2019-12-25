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


function Juxing(x,y,w,h,d) {
    let thiss=this
    this.x=x   //起始x坐标
    this.y=y   //起始y坐标
    this.w=w   //宽度
    this.h=h   //长度
    this.direction=d   //方向
    this.mobile=function () {
        if(this.direction == 'left'){
            this.x-=1;
        }else if(this.direction == 'right'){
            this.x+=1
        }else if(this.direction == 'top'){
            this.y-=1
        }else if(this.direction == 'bottom'){
            this.y+=1
        }else if(this.direction == 'stop'){
            
        }
    }
    this.control=function (x,y) {
        if(this.x>x){ //在他左边
            this.direction = 'left'
        }
        if(this.y>y){ //在他上边
            this.direction = 'top'
        }
        if(this.x+this.w<x){ //在他右边          
            this.direction = 'right'
        }
        if(this.y+this.h<y){ //在他下边
            this.direction = 'bottom'
        }
    }
    this.controlinit=function () {
        document.querySelector("#canvas").addEventListener("touchstart",function (e) {
            let bbox = canvas.getBoundingClientRect();
            let x =  e.touches[0].clientX  * (canvas.width/bbox.width);
            let y = e.touches[0].clientY * (canvas.height/bbox.height);
            thiss.control(x,y)
        })
        document.querySelector("canvas").addEventListener("touchend",function (e) {
            let bbox = canvas.getBoundingClientRect();
            let x =  e.changedTouches[0].clientX  * (canvas.width/bbox.width);
            let y = e.changedTouches[0].clientY * (canvas.height/bbox.height);
            thiss.control(x,y)
        })
    }
    this.Boundary_Collision=function() {
        if((this.x+this.w)>canvas.width){ //碰到右边界
            this.direction = 'left'
        }
        if((this.y+this.h)>canvas.height){ //碰到下边界
            this.direction = 'top'
        }
        if(this.x<0){ //碰到左边界          
            this.direction = 'right'
        }
        if(this.y<0){ //碰到上边界
            this.direction = 'bottom'
        }
    }
    this.portray=function () {     //绘制
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
    this.drawPicture=function () {
        ctx.drawImage(this.img,0,0,this.img.width,this.img.height,this.x,this.y,this.w,this.h);
    }



}

function Game(){
    let thiss=this
    this.obj_coll=[]
    this.Event=[]
    this.data = [
        [Juxing,100,250,20,20,'stop'],
        [Juxing,200,250,20,20,'stop'],
        [Juxing,300,250,20,20,'stop'],
        [Juxing,400,250,20,20,'stop'],
        [Juxing,500,250,20,20,'stop'],
        [Juxing,600,250,20,20,'stop'],
        [Juxing,700,250,20,20,'stop'],
        [Juxing,150,250,20,20,'stop'],
        [Juxing,250,250,20,20,'stop'],
        [Juxing,350,250,20,20,'stop'],
        [Juxing,450,250,20,20,'stop'],
        [Juxing,550,250,20,20,'stop'],
        [Juxing,650,250,20,20,'stop'],
        [Juxing,750,250,20,20,'stop'],
        [Juxing,350,150,20,20,'stop'],
        [Juxing,350,250,20,20,'stop'],
        [Juxing,350,310,20,20,'stop'],
        [Juxing,350,200,20,20,'stop'],
        [Juxing,150,300,20,20,'stop'],
        [Juxing,250,300,20,20,'stop'],
    ]
    this.Create_Object_Multiple = function () {
        for(let i=0;i<this.data.length;i++){
            let juxing=this.Create_Object_single(this.data[i][0],this.data[i][1],this.data[i][2],this.data[i][3],this.data[i][4],this.data[i][5])
            this.Event.push(juxing)
        }
    }
    this.clear=function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    this.Create_Object_single = function (callback,x,y,w,h,d){
        let juxing=new callback(x,y,w,h,d)
        this.obj_coll.push(juxing)
        return function(){
            juxing.Boundary_Collision()//边界碰撞检测
            juxing.mobile();//方向
            juxing.portray()//绘制矩形
        }
    }
    this.Impact_Checking = function (){
        let obj_coll=thiss.obj_coll
        for(let i=0;i<obj_coll.length;i++){
            for(let l=1;l<obj_coll.length;l++){
                if((obj_coll[l].x==(obj_coll[i].x+obj_coll[i].w)) && ((obj_coll[l].y<=(obj_coll[i].y+obj_coll[i].h) && (obj_coll[l].y>=obj_coll[i].y)))){
                    obj_coll[l].direction='right'
                    obj_coll[i].direction='left'
                }else if((obj_coll[i].x==(obj_coll[l].x+obj_coll[l].w) && ((obj_coll[l].y<=(obj_coll[i].y+obj_coll[i].h) && (obj_coll[l].y>=obj_coll[i].y))))){
                    obj_coll[l].direction='left'
                    obj_coll[i].direction='right'
                }else if((obj_coll[l].y==(obj_coll[i].y+obj_coll[i].h)) && ((obj_coll[l].x<=(obj_coll[i].x+obj_coll[i].w) && (obj_coll[l].x>=obj_coll[i].x)))){
                    obj_coll[l].direction='bottom'
                    obj_coll[i].direction='top'
                }else if((obj_coll[i].y==(obj_coll[l].y+obj_coll[l].h)) && ((obj_coll[l].x<=(obj_coll[i].x+obj_coll[i].w) && (obj_coll[l].x>=obj_coll[i].x)))){
                    obj_coll[l].direction='top'
                    obj_coll[i].direction='bottom'
                }
            }
        }
    }
}

let game=new Game()



function initstart(){
    
    game.Create_Object_Multiple();
    

    function animate() {
        game.clear();//定时清除画布
        game.Impact_Checking()

        for (let i = 0; i < game.Event.length; i++) {
            game.Event[i]()
        } 


        requestAnimationFrame(animate)
    }
    animate()

    for(let i=0;i<game.obj_coll.length;i++){
        game.obj_coll[i].controlinit()
    }


}

initstart()


















// var img=document.querySelector('#spr')

// ctx.drawImage(img,0,0,img.width,img.height,0,0,200,500);
// ctx.translate(100,200);
// ctx.drawImage(img,0,0,img.width,img.height,200,200,200,500);
    
    




