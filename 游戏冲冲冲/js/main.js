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
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.direction=d
    this.mobile=function () {
        if(this.direction == 'left'){
            this.x-=1;
        }else if(this.direction == 'right'){
            this.x+=1
        }else if(this.direction == 'top'){
            this.y-=1
        }else if(this.direction == 'bottom'){
            this.y+=1
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
}

function Game(){
    let thiss=this
    this.obj_coll=[]
    this.clear=function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    this.Create_Object = function (callback,x,y,w,h,d){
        let juxing=new callback(x,y,w,h,d)
        this.obj_coll.push(juxing)
        return function(){
            juxing.Boundary_Collision()//边界碰撞检测
            juxing.mobile();//方向
            ctx.fillRect(juxing.x,juxing.y,juxing.w,juxing.h);//绘制
        }
    }
    this.Impact_Checking = function (){
        let obj_coll=thiss.obj_coll
        for(let i=0;i<obj_coll.length;i++){
            for(let l=1;l<obj_coll.length;l++){
                if(obj_coll[l].x==(obj_coll[i].x+obj_coll[i].w)){
                    obj_coll[l].direction='right'
                    obj_coll[i].direction='left'
                }else if(obj_coll[i].x==(obj_coll[l].x+obj_coll[l].w)){
                    obj_coll[l].direction='left'
                    obj_coll[i].direction='right'
                }else if(obj_coll[l].y==(obj_coll[i].y+obj_coll[i].h)){
                    obj_coll[l].direction='bottom'
                    obj_coll[i].direction='top'
                }else if(obj_coll[i].y==(obj_coll[l].y+obj_coll[l].h)){
                    obj_coll[l].direction='top'
                    obj_coll[i].direction='bottom'
                }
            }
        }
    }
}

let game=new Game()

function initstart(){
    
    let juxing=game.Create_Object(Juxing,700,250,20,20,'left')
    let juxing2=game.Create_Object(Juxing,200,250,20,20,'right')



    function animate() {
        game.clear();//定时清除画布
        game.Impact_Checking()
        juxing()//本体函数
        // juxing2()
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
    
    




