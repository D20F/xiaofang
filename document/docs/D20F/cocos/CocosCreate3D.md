# CocosCreate3D

## 场景
 ``` js
//加载场景   'myscene' 场景名  callback切换后的回调函数
cc.director.loadScene("MyScene",callback);

// 为了防止切换场景摧毁所有的实例，将场景中的一个节点设置为常驻节点，用来保存和各个节点互通的数据
game.addPersistRootNode(myNode);

// 如果要取消一个节点的常驻属性：
game.removePersistRootNode(myNode);

// 预加载场景,然后直接用cc.director.loadScene("MyScene")切换
director.preloadScene("table", function () {
    console.log("Next scene preloaded");
});

```

## 资源
 ``` js
    // 加载资源 加载 test assets 目录下所有资源
    loader.loadResDir("test assets", function (err, assets) {
        // ...
    });
    // 直接释放某个贴图
    loader.release(texture);
    // 释放一个 prefab 以及所有它依赖的资源
    let deps = loader.getDependsRecursively('prefabs/sample');
    loader.release(deps);

```
