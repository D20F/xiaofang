# Canvas
 ##  设置图片
 ``` js
  createPattern()	在指定的方向上重复指定的元素
  var pat=ctx.createPattern(img,"repeat");
  ctx.rect(0,0,canvas.width,canvas.height);
  ctx.fillStyle=pat;
  ctx.fill();
 ```
 ##  画
 ``` js
 rect()	        创建矩形
 fillRect()	    绘制“被填充”的矩形
 strokeRect()	    绘制矩形（无填充）
 clearRect()	    在给定的矩形内清除指定的像素

 ```
 ##  图片设置
 ``` js
 context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

 img	    规定要使用的图像、画布或视频。
 sx	    可选。开始剪切的 x 坐标位置。
 sy	    可选。开始剪切的 y 坐标位置。
 swidth	可选。被剪切图像的宽度。
 sheight	可选。被剪切图像的高度。
 x	    在画布上放置图像的 x 坐标位置。
 y	    在画布上放置图像的 y 坐标位置。
 width	可选。要使用的图像的宽度。（伸展或缩小图像）
 height	可选。要使用的图像的高度。（伸展或缩小图像）

 ```





    









