
// 打开相机
document.getElementById('b1').addEventListener('click', () => {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    });
    function onSuccess(message) { alert(message) }
    function onFail(message) { alert('Failed because: ' + message); }
})

// 安卓原生弹窗
document.getElementById('b2').addEventListener('click', () => {
    ToastDemo.showToast("法克 fuck", onSuccess, onFail);
    function onSuccess(message) { alert(message) }
    function onFail(message) { alert('Failed because: ' + message); }
})




// 检查是否启动了wifi
function checkWifiStatus() {
    cordova.plugins.hotspot.isWifiOn(successCB, errorCB);
    function successCB(info) {
        console.log('info == true  为打开wifi',info)
        console.log('info == false 为关闭wifi',info)
    }
}

// 连接wifi
function connectWifi() {
    //将帐号密码写入函数中，函数自动进行连接
    cordova.plugins.hotspot.connectToWifi(account.value, pass.value, successCB, errorCB)
    function successCB(fs) {//此回调函数（产生的信息），显示是否连接成功
        alert('contect success:', fs);
    }
    function errorCB(fs) {//若连接失败，此函数会发出信息
        alert('contect fail:' + fs);
    }
}

//改变wifi状态，每按一次按钮取反一次
function openWifi() {
    cordova.plugins.hotspot.toggleWifi(wifiStatus, errorCB);
    function wifiStatus(info) {
        console.log('info == true  为打开wifi',info)
        console.log('info == false 为关闭wifi',info)
    }

    function errorCB(fs) {//若出现意外无法正常打开/关闭wifi，则提示出错，并返回错误信息
        alert('打开关闭wifi失败\n' + fs.code);
    }
}
//若当前wifi为打开状态，则显示可用的SSID
function showWifiSSID(wifiStatus) {
    cordova.plugins.hotspot.scanWifi(SSIDlist, errorCB);
    //扫描当前可用WIFI，此函数第一个参数返回的信息是一个包含 [SSID, BSSID, frequency, level, timestamp, capabilities]
    function SSIDlist(info) {
        document.getElementById('dispWifiSSID').innerHTML = info;
        var str = '';
        for (var i = 0; i < info.length; i++) {
            str = info[i].SSID + '|' + info[i].BSSID ;
            document.querySelector('#deviceready').insertAdjacentHTML(
                'beforeend',
                `<p>${str}</p>`
                )
        }
    }
    function errorCB() {
        alert('err fail:' + fs);
    }
}   