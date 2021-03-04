
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









{/* <template>
    <div class="box">
        <div class="btn">state:{{ state }}</div>
        <div class="btn">hostname:{{ hostname }}</div>
        <div class="btn">registerAddressFamily:{{ registerAddressFamily }}</div>
        <div class="btn">watchAddressFamily:{{ watchAddressFamily }}</div>
        <div class="btn">zeroconf:{{ zeroconf }}</div>
        <div class="btn">result:{{ result }}</div>
        <div v-for="(item, i) in service" :key="i" class="btn">
            {{ i }}:{{ item }}
        </div>

        <div class="btn" @click="start">start</div>
        <div class="btn" @click="registerregister">registerregister</div>
        <div class="btn" @click="watch">watch</div>
        <div class="btn" @click="workstation">workstation</div>
        <div class="btn" @click="close">close</div>
        <div class="btn" @click="checkWifiStatus">checkWifiStatus</div>
        <div class="btn" @click="camera">camera</div>
        <div class="btn" @click="ToastDemo">ToastDemo</div>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    mixins: [],
    data() {
        return {
            state: "",
            zeroconf: "",
            hostname: "111",
            watchAddressFamily: "",
            registerAddressFamily: "",
            result: '',
            service: {},
        };
    },
    computed: {},
    created() {
        this.state = "start";
        let zeroconf = cordova.plugins.zeroconf;

        this.zeroconf = zeroconf;
        this.zeroconf.registerAddressFamily = "ipv4"; // or 'ipv6' ('any' by default)
        this.zeroconf.watchAddressFamily = "ipv4"; // or 'ipv6' ('any' by default)

        this.zeroconf.getHostname(function success(hostname) {
            this.hostname = hostname;
        });
    },
    methods: {
        // 检查是否启动了wifi
        checkWifiStatus() {
            cordova.plugins.hotspot.isWifiOn(successCB, errorCB);
            function successCB(info) {
                alert("info == true  为打开wifi", info);
            }
        },
        camera() {
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
            });
            function onSuccess(message) {
                alert(message);
            }
            function onFail(message) {
                alert("Failed because: " + message);
            }
        },
        ToastDemo() {
            ToastDemo.showToast("法克 fuck", onSuccess, onFail);
            function onSuccess(message) {}
            function onFail(message) {
                alert("Failed because: " + message);
            }
        },
        start() {
            let that = this;
            this.ToastDemo();
            that.zeroconf.getHostname(onSuccess, onFail);
            function onSuccess(hostname) {
                that.hostname = hostname;
                alert("Failed because: " + hostname);
            }
            function onFail(message) {
                alert("Failed because: " + message);
            }
        },
        registerregister() {
            this.ToastDemo();
            let that = this;
            that.zeroconf.register(
                "_http._tcp.",
                "local.",
                "Becvert",
                80,
                {
                    foo: "bar",
                },
                function success(result) {
                    var action = result.action; // 'registered'
                    that.service = result.service;
                    alert(that.service);
                },
                function (err) {
                    alert(err);
                }
            );
        },
        close() {
            this.zeroconf.close();
        },
        watch() {
            let that = this;
            this.ToastDemo();
            that.zeroconf.watch(
                "_http._tcp.",
                "local.",
                function success(result) {
                    that.result = JSON.stringify(result);
                    alert('result',result);
                    alert('result',result.action);
                },
                function (err) {
                    alert(err);
                }
            );
        },
        workstation() {
            let that = this;
            this.ToastDemo();
            that.zeroconf.watch(
                "_workstation._tcp",
                "local.",
                function success(result) {
                    that.result = JSON.stringify(result);
                    alert('result',result);
                },
                function (err) {
                    alert(err);
                }
            );
        },

    },
};
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    position: relative;
}
.btn {
    margin: 10px 0;
    background: green;
    width: auto;
}
</style> */}
