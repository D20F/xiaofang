//动画
@keyframes myfirst
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue;}
100% {background: green;}
}
//值	                           描述
// animation-name	            规定需要绑定到选择器的 keyframe 名称。。
// animation-duration	        规定完成动画所花费的时间，以秒或毫秒计。
// animation-timing-function	规定动画的速度曲线。
// animation-delay	            规定在动画开始之前的延迟。
// animation-iteration-count	规定动画应该播放的次数。
// animation-direction	        规定是否应该轮流反向播放动画。
// animation:myfirs 5s linear 2s infinite normal;

// 过渡
// 属性	                      描述
// transition	                简写属性，用于在一个属性中设置四个过渡属性。	3
// transition-property	        规定应用过渡的 CSS 属性的名称。	3
// transition-duration	        定义过渡效果花费的时间。默认是 0。	3
// transition-timing-function	规定过渡效果的时间曲线。默认是 "ease"。	3
// transition-delay	            规定过渡效果何时开始。默认是 0。
// transition: width 1s linear 2s;

// flex
// 决定主轴的方向   向上    向下          向右         向左
// flex-direction: row | row-reverse | column | column-reverse
// 一条排不下怎么换行  不换行   换行   换行从下方开始
//      flex-wrap:   nowrap | wrap | wrap-reverse;
//  x轴对齐方式         左对齐       右对齐     居中     项目两侧对齐    项目间隔对齐           
// justify-content: flex-start | flex-end | center | space-between | space-around;
//                                                   |▅    ▅    ▅|| ▅  ▅  ▅ |
//  y轴对齐方式  项目起点对齐   终点对齐    居中     项目第一行文字为基准对齐  默认值，为设置高度或者auto占满高度
// align-items: flex-start | flex-end | center | baseline               | stretch;
// align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
// align-content: flex-start | flex-end | center | space-between | space-around | stretch;
// order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
// flex-grow 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
// flex-shrink 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
// flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto
// align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性

// calc 动态计算数值 可以用来自适应
// width: calc(100% - 80px);

// vw 会把视口的宽度平均分为100份 100vw  vw可以用来做宽度自适应
// vh 会把视口的高度度平均分为100份 100vh  vh可以用来做高度自适应

// 位置移动    x轴y轴移动
// transform: translate(0,-50%)

// 类型	                    权重
// !important	              无穷
// 行间样式	                1000
// id	                      100
// class/属性选择器/伪类	     10
// 标签选择器	                  1
// 通配符	                      0
