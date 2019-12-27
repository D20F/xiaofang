// 获取同一物体节点内的其他组件   'cube' 为组件名
let label = this.getComponent('cube');

//全局搜索节点  然后根据节点找里面的组件  'New Cube' 为节点名字
let backNode = cc.director.getScene().getChildByName('New Cube');
console.log(backNode._components[1].start())

//销毁节点
this.node.destroy()

// 关闭当前节点 
this.node.active = false

// 复制当前节点，并添加到场景中 ，具当前节点的一切功能
let a = instantiate(this.node);
let scene = cc.director.getScene();
a.parent = scene;
a.setPosition(0, 0,0);

// 获取节点的父级节点
this.node.parent  

// 将返回节点的所有子节点数组
this.node.children 

// 将返回节点的子节点数量
this.node.childrenCount 

// 设置空间位置
this.node.setPosition(this.x, this.y, this.z);
// 旋转 根据                      绕x轴旋转  绕y轴旋转 绕z轴旋转
this.node.setRotationFromEuler(this.x,  this.y,  this.z);
// 缩放
this.node.setScale(2,2,2);