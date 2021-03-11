
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
        console.log('info == true  为打开wifi', info)
        console.log('info == false 为关闭wifi', info)
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
        console.log('info == true  为打开wifi', info)
        console.log('info == false 为关闭wifi', info)
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
            str = info[i].SSID + '|' + info[i].BSSID;
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





// 方法一：括号展开 + 栈
// 由于字符串除了数字与括号外，只有加号和减号两种运算符。因此，如果展开表达式中所有的括号，则得到的新表达式中，数字本身不会发生变化，只是每个数字前面的符号会发生变化。
// 因此，我们考虑使用一个取值为 \{-1,+1\}{−1,+1} 的整数 \textit{sign}sign 代表「当前」的符号。根据括号表达式的性质，它的取值：
// 与字符串中当前位置的运算符有关；
// 如果当前位置处于一系列括号之内，则也与这些括号前面的运算符有关：每当遇到一个以 -− 号开头的括号，则意味着此后的符号都要被「翻转」。
// 考虑到第二点，我们需要维护一个栈 \textit{ops}ops，其中栈顶元素记录了当前位置所处的每个括号所「共同形成」的符号。例如，对于字符串 \text{1+2+(3-(4+5))}1+2+(3-(4+5))：
// 扫描到 \text{1+2}1+2 时，由于当前位置没有被任何括号所包含，则栈顶元素为初始值 +1+1；
// 扫描到 \text{1+2+(3}1+2+(3 时，当前位置被一个括号所包含，该括号前面的符号为 ++ 号，因此栈顶元素依然 +1+1；
// 扫描到 \text{1+2+(3-(4}1+2+(3-(4 时，当前位置被两个括号所包含，分别对应着 ++ 号和 -− 号，由于 ++ 号和 -− 号合并的结果为 -− 号，因此栈顶元素变为 -1−1。
// 在得到栈 \textit{ops}ops 之后， \textit{sign}sign 的取值就能够确定了：如果当前遇到了 ++ 号，则更新 \textit{sign} \leftarrow \text{ops.top()}sign←ops.top()；如果遇到了遇到了 -− 号，则更新 \textit{sign} \leftarrow -\text{ops.top()}sign←−ops.top()。
// 然后，每当遇到 (( 时，都要将当前的 \textit{sign}sign 取值压入栈中；每当遇到 )) 时，都从栈中弹出一个元素。这样，我们能够在扫描字符串的时候，即时地更新 \textit{ops}ops 中的元素。

var calculate = function(s) {
    const ops = [1];
    let sign = 1;

    let ret = 0;
    const n = s.length;
    let i = 0;
    while (i < n) {
        if (s[i] === ' ') {
            i++;
        } else if (s[i] === '+') {
            sign = ops[ops.length - 1];
            i++;
        } else if (s[i] === '-') {
            sign = -ops[ops.length - 1];
            i++;
        } else if (s[i] === '(') {
            ops.push(sign);
            i++;
        } else if (s[i] === ')') {
            ops.pop();
            i++;
        } else {
            let num = 0;
            while (i < n && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
                num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
                i++;
            }
            ret += sign * num;
        }
    }
    return ret;
};

