(function () {

    'use strict'
    var _global;
    //ES6 Object.assign()
    if (!Object.assign) {
        Object.defineProperty(Object, "assign", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function(target, firstSource) {
            "use strict";
            if (target === undefined || target === null)
                throw new TypeError("Cannot convert first argument to object");
            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) continue;
                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                var nextKey = keysArray[nextIndex];
                var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
                }
            }
            return to;
            }
        });
    }
    var uiScript = {
        version: 'v1.0.0',
        print: function () {
            console.log('感谢使用UI团队提供的工具集~,版本号' + this.version + '。\n若您有什么好的意见或需要我们进行封装的，欢迎联系我们。');
        },
        /**
         * @desc 数组去重
         *
         * @param {arr} arr
         * @returns {Array}
         */
        unique: function (arr) {
            if (arr && arr.length > 1) {
                var _res = [];
                var _json = {};
                for (var i = 0; i < arr.length; i++) {
                    if (!_json[arr[i]]) {
                        _res.push(arr[i]);
                        _json[arr[i]] = 1;
                    }
                }
                return _res;
            } else {
                return arr;
            }
        },
        /**
         *
         * @desc 判断是否为空对象
         * @param {obj} obj
         * @returns {Boolean}
         */
        isEmptyObject: function (obj) {
            for (var key in obj) {
                return false;
            }
            return ture;
        },
        /**
         *
         * @desc 日期格式化
         * @param {date} now
         * @param {string} symbol  '-','/',','
         * @returns {String}
         */
        formatDate: function (now, symbol) {
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            var hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
            var minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
            var second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
            if (!symbol) {
                return year + '年' + month + '月' + date +'日'+ ' ' + hour + '时' + minute + '分' + second +'秒';
            }else{
                return year + symbol + month + symbol + date + ' ' + hour + ':' + minute + ':' + second;
            }

        },
        /**
         * 某个时间在当前时间的多久前
         *
         * @param {date} time
         */
        timeAgo:function(time){

            var timeTest=time.getTime();
            var now=(new Date()).getTime();
            var rTime=now-timeTest;
            if(rTime<180000){
                return '刚刚'
            }else if(rTime<2592000000 && rTime>180000){

                if(rTime/86400000>1){
                    return parseInt(rTime/86400000)+'天前';
                }else{

                    if(rTime/3600000>1){
                        return parseInt(rTime/3600000)+'小时前';
                    }else{
                        return parseInt(rTime/60000)+'分钟前';
                    }
                }
            }else{
                return this.formatDate(new Date(timeTest),'-');
            }
            return (now-timeTest)/(1000 * 60 * 60 * 24)

        },
        /**
         * 倒计时
         *
         * @param {string} id
         * @param {Date} endDate
         *
         */
        countdown:function(id,endDate){

             var showTime=function(){

                    var date = new Date();
                    var now = date.getTime();
                    var end = endDate.getTime();
                    var leftTime = end-now;
                    var d,h,m,s;
                    if (leftTime>=0) {
                        d = Math.floor(leftTime/1000/60/60/24);
                        h = Math.floor(leftTime/1000/60/60%24);
                        m = Math.floor(leftTime/1000/60%60);
                        s = Math.floor(leftTime/1000%60);
                    } else{
                        clearInterval(t);
                    }
                    document.getElementById(id).innerHTML=d+'天'+h+'时'+m+'分'+s+'秒';
            }
             var t = setInterval(showTime,1000);
         },

        /**
         *
         * @desc 判断数组是否相等
         * @param {Array} arr1
         * @param {Array} arr2
         * @returns {Boolean}
         */
        arrayEqual: function (arr1, arr2) {
            if (arr1 === arr2) return true;
            if (arr1.length != arr2.length) return false;
            for (var i = 0; i < arr1.length; ++i) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        },

        //根据name获取cookie
        getCookie: function (name) {
            var arr = document.cookie.replace(/\s/g, '').split(';');
            for (var i = 0; i < arr.length; i++) {
                var tempArr = arr[i].split('=');
                if (tempArr[0] == name) {
                    return decodeURIComponent(tempArr[1]);
                }
            }
            return '';
        },
        //根据name删除cookie
        removeCookie: function (name) {
            // 设置已过期，系统会立刻删除cookie
            setCookie(name, '1', -1);
        },
        //设置cookie
        setCookie: function (name, value, days) {
            var date = new Date();
            date.setDate(date.getDate() + days);
            document.cookie = name + '=' + value + ';expires=' + date;
        },
        //使用该api先判断浏览器是否支持
        isSupportStorage: function () {
            if (typeof(Storage) !== 'undefined') {
                return true;
            } else {
                alert('抱歉! 您的浏览器太老了，不支持 web 存储。');
                return false;
            }
        },
        /**
         * 设置local存储
         * @param key  要存储的索引值
         * @param val 要存储的值
         */
        setLocal:function (key,val) {
            if(this.isSupportStorage()){
                localStorage.setItem(key,val);
            }
        },
        /**
         * 获取local索引的值
         * @param key  要获取的索引值
         * @return  改索引下面的值
         */
        getLocal:function (key) {
            if(this.isSupportStorage()){
                return localStorage.getItem(key);
            }
        },
        //清空local存储
        clearLocal:function () {
            if(this.isSupportStorage()){
                localStorage.clear();
            }
        },
        /**
         * 移除local索引下的值
         * @param key  要移除的索引
         */
        removeLocal:function (key) {
            if(this.isSupportStorage()){
                localStorage.removeItem(key);
            }
        },

        /**
         * 设置Session存储
         * @param key  要存储的索引值
         * @param val 要存储的值
         */
        setSession:function (key,val) {
            if(this.isSupportStorage()){
                sessionStorage.setItem(key,val);
            }
        },
        /**
         * 获取Session索引的值
         * @param key  要获取的索引值
         * @return  改索引下面的值
         */
        getSession:function (key) {
            if(this.isSupportStorage()){
                return sessionStorage.getItem(key);
            }
        },
        //清空Session存储
        clearSession:function () {
            if(this.isSupportStorage()){
                sessionStorage.clear();
            }
        },
        /**
         * 移除Session索引下的值
         * @param key  要移除的索引
         */
        removeSession:function (key) {
            if(this.isSupportStorage()){
                sessionStorage.removeItem(key);
            }
        },


        /**
         * @desc 获取浏览器版本
         *
         * @returns {String}
         */
        getExplore: function () {
            var sys = {},
                ua = navigator.userAgent.toLowerCase(),
                s;
            (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
                (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
                    (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
                        (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
                            (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
                                (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
                                    (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
            // 根据关系进行判断
            if (sys.ie) return ('IE: ' + sys.ie)
            if (sys.edge) return ('EDGE: ' + sys.edge)
            if (sys.firefox) return ('Firefox: ' + sys.firefox)
            if (sys.chrome) return ('Chrome: ' + sys.chrome)
            if (sys.opera) return ('Opera: ' + sys.opera)
            if (sys.safari) return ('Safari: ' + sys.safari)
            return 'Unkonwn'
        },
        /**
         * @desc 获取操作系统
         *
         * @returns {String}
         */
        getOS: function () {
            var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
            var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
            var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

            if (/mac/i.test(appVersion)) return 'MacOSX'
            if (/win/i.test(appVersion)) return 'windows'
            if (/linux/i.test(appVersion)) return 'linux'
            if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios'
            if (/android/i.test(userAgent)) return 'android'
            if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
        },
        /**
         * @desc 深拷贝
         *
         * @param {any} values
         * @returns {any}
         */
        deepClone: function (values) {
            var copy;

            // Handle the 3 simple types, and null or undefined
            if (null == values || 'object' != typeof values) return values;

            // Handle Date
            if (values instanceof Date) {
                copy = new Date();
                copy.setTime(values.getTime());
                return copy;
            }

            // Handle Array
            if (values instanceof Array) {
                copy = [];
                for (var i = 0, len = values.length; i < len; i++) {
                    copy[i] = this.deepClone(values[i]);
                }
                return copy;
            }

            // Handle Object
            if (values instanceof Object) {
                copy = {};
                for (var attr in values) {
                    if (values.hasOwnProperty(attr)) copy[attr] = this.deepClone(values[attr]);
                }
                return copy;
            }

            throw new Error('Unable to copy values! Its type isn\'t supported.');
        },
        /**
         * @desc 随机颜色
         *
         * @returns {String}
         */
        randomColor: function () {
            return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
        },
        /**
         * @desc 生成指定范围随机数
         *
         * @param {Number} min
         * @param {Number} max
         * @returns {Number}
         */
        randomNum: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        /**
         *
         * @desc 判断是否为邮箱地址
         * @param {String} str
         * @returns {Boolean}
         */
        isEmail: function (str) {
            return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
        },
        /**
         * @desc 判断是否是身份证号
         *
         * @param {String|Number} str
         * @returns {Boolean}
         */
        isIdCard: function (str) {
            return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
        },
        /**
         *
         * @desc 判断是否为手机号
         * @param {String|Number} str
         * @returns {Boolean}
         */
        isPhoneNum: function (str) {
            return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
        },
        /**
         *
         * @desc 判断是否为URL地址
         * @param {any} str
         * @returns {Boolean}
         */
        isUrl: function (str) {
            return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
        },
        /**
         *
         * @desc 现金额转大写
         * @param {Number} n
         * @returns {String}
         */
        digitUppercase: function (n) {
            var fraction = ['角', '分'];
            var digit = [
                '零', '壹', '贰', '叁', '肆',
                '伍', '陆', '柒', '捌', '玖'
            ];
            var unit = [
                ['元', '万', '亿'],
                ['', '拾', '佰', '仟']
            ];
            var head = n < 0 ? '欠' : '';
            n = Math.abs(n);
            var s = '';
            for (var i = 0; i < fraction.length; i++) {
                s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
            }
            s = s || '整';
            n = Math.floor(n);
            for (var i = 0; i < unit[0].length && n > 0; i++) {
                var p = '';
                for (var j = 0; j < unit[1].length && n > 0; j++) {
                    p = digit[n % 10] + unit[1][j] + p;
                    n = Math.floor(n / 10);
                }
                s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
            }
            return head + s.replace(/(零.)*零元/, '元')
                .replace(/(零.)+/g, '零')
                .replace(/^整$/, '零元整');
        },
        /**
         *
         * @desc url参数转对象
         * @param {String} url
         * @returns {Object}
         */
        parseQueryString: function (url) {
            url = url == null ? window.location.href : url
            var search = url.substring(url.lastIndexOf('?') + 1)
            if (!search) {
                return {}
            }
            return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
        },
        /**
         *
         * @desc 对象序列化
         * @param {Object} obj
         * @returns {String}
         */
        stringfyQueryString(obj) {
            if (!obj) return '';
            var pairs = [];

            for (var key in obj) {
                var value = obj[key];

                if (value instanceof Array) {
                    for (var i = 0; i < value.length; ++i) {
                        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
                    }
                    continue;
                }

                pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }

            return pairs.join('&');
        },
        /**
         * 检测数组中某个元素的下标（非重复元素）
         *
         * @param {Array} arr
         * @param {any} el
         * @returns {Number}
         */
        arrayIndexOf(arr, el) {
            for (var i = 0, n = arr.length; i < n; i++) {
                if (arr[i] === el) {
                    return i;
                }
            }
            return -1;
        },
        /**
         * 交换数组中两项的位置
         *
         * @param {Array} arr
         * @param {Number} index1
         * @param {Number} index2
         * @returns  {Array} arr
         */
        arrayAwap(arr, index1, index2) {
            if (index1 < index2 && index1 == arr.length - 1) {
                return
            } else if (index1 > index2 && index1 == 0) {
                return
            }
            if(arr[index1]==undefined || arr[index2]==undefined){
                return '选中元素或目标元素不存在'
            }
            arr[index1] = arr.splice(index2, 1, arr[index1])[0];
            return arr;
        },
        /**
         * 获取地址栏参数
         *
         * @param {paramName} 需要获取的参数
         * @returns  {paramValue} 参数值
        /**
         *
         *
         * @param {any} paramName
         * @returns
         */
        getParam: function (paramName) {
            var paramValue = '', isFound = false;
            if (window.location.search.indexOf('?') == 0 && window.location.search.indexOf('=') > 1) {
                var arrSource = unescape(window.location.search).substring(1, window.location.search.length).split('&');
                var i = 0;
                while (i < arrSource.length && !isFound) {
                    if (arrSource[i].indexOf('=') > 0) {
                        if (arrSource[i].split('=')[0].toLowerCase() == paramName.toLowerCase()) {
                            paramValue = arrSource[i].split('=')[1];
                            isFound = true;
                        }
                    }
                    i++;
                }
            }
            return paramValue;
        },
        /**
         *
         * 图片转base64
         * @param {object or string} data
         */
        getBase64:function(data){
            this.init=function(img){
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, img.width, img.height);
                var dataURL = canvas.toDataURL("image/png");
                return dataURL
            }
            if(typeof(data)==='object'){
                return this.init(data);
            }else{
                var image =  new Image();
                image.src=data;

                if(image.fileSize>0 || (image.width > 0 && image.height > 0)){
                    return  this.init(image)
                }else{
                    console.log('图片不存在，或图片地址有误');
                }
            }


        },
        /**
         *
         * 数字格式化
         * @param {num} number
         * @param {num} places
         * @param {string} symbol
         * @param {string} thousand
         * @param {string} decimal
         * @returns
         */
        NumFormat :function(number, places, symbol, thousand, decimal){
            	places = !isNaN(places = Math.abs(places)) ? places : 2;
                symbol = symbol !== undefined ? symbol : "$";
                thousand = thousand || ",";
                decimal = decimal || ".";
               var  negative = number < 0 ? "-" : "",
                i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
                j = (j = i.length) > 3 ? j % 3 : 0;
                return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");

        },
         /**
         * 图片压缩
         * @param {Image} source_img_obj 原图片
         * @param {Integer} quality 压缩比 0-100
         * @param {string} output_format 返回的图片类型，jpg/png
         * @return {Image} 压缩后的图片
         */
        compress: function(source_img_obj, quality, output_format){
            var mime_type = "image/jpeg";
            if(output_format!=undefined && output_format=="png"){
               mime_type = "image/png";
            }
            var cvs = document.createElement('canvas');
            //naturalWidth真实图片的宽度
            cvs.width = source_img_obj.naturalWidth;
            cvs.height = source_img_obj.naturalHeight;
            var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0);
            var newImageData = cvs.toDataURL(mime_type, quality/100);
            var result_image_obj = new Image();
            result_image_obj.src = newImageData;
            return result_image_obj;
       },
        /**
         *
         * 去除首尾空格
         * @param {str} str
         * @returns
         */
        trim:function(str){
            return str.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
        },

        /**
         * 获取dom节点的绝对位置
         * 
         * @param {any} dom 
         * @returns {object}
         */
        getDomPosition:function(dom){
            return {
                left:dom.getBoundingClientRect().left+document.documentElement.scrollLeft,
                top:dom.getBoundingClientRect().top+document.documentElement.scrollTop
            }
        },
        /*
        * 多行文本省略
        * @param {str} id
        * @param {number} rows
        * @param {str} text
        * @returns
        * */
        multiOverflowhidden:function(id,rows,str){
            var el=document.querySelector(id);

            el.addEventListener('mouseover',function () {
                this.title=str;
            })
            var lineHeight=window.getComputedStyle(el,null).lineHeight;
            var at = rows* parseInt(lineHeight);
            var tempstr =str;
            el.innerHTML =tempstr;

            var len =tempstr.length;
            var i=0;
            if(el.offsetHeight <= at){

            }else{
              var temp ="";
              el.innerHTML =temp;
              while(el.offsetHeight <= at){
                temp =tempstr.substring(0,i+1);
                i++;
                el.innerHTML =temp;
              }

              var slen =temp.length;
              tempstr =temp.substring(0,slen-1);
              len =tempstr.length;
              el.innerHTML =tempstr.substring(0,len-3) +"...";
              el.height=at+'px';
            }
        },

         //放大镜
         magnifyGlass:function(arg){
            //默认参数
            var def={
                width:200,
                mulriple:2,
                position:'right'
            };
            var opt=Object.assign({},arg,def);
            
            var target=document.getElementById(opt.id);
            if(target.style.position==''){
                target.style.position='relative';
            }
            
            target.style.background="url("+opt.img+") no-repeat";
            target.style.backgroundSize="100%";
            //滤镜
            function Glass(target,opt){
                var gls=document.createElement('div');
                gls.style.width=opt.width+'px';
                gls.style.height=opt.width+'px';
                gls.style.position='absolute';
                gls.style.background='#fff';
                gls.style.opacity=0.6;
                gls.style.filter='alpha(opacity=60)';
                gls.style.display='none';
                gls.style.cursor='crosshair';
                
                target.appendChild(gls);
                //获取边界
                var limitX=target.clientWidth;
                var limitY=target.clientHeight;
                target.addEventListener('mouseenter',function(){
                    showGlass.show();
                })
                //target区域添加mousemove事件
                 target.addEventListener('mousemove',function(e){
                    
                    if(e.target==target){
                        gls.style.display='block';
                        //左右边界
                        if(e.offsetX-opt.width/2<=0){
                            gls.style.left=0;
                        }else if(e.offsetX>=limitX-opt.width){
                            gls.style.left=limitX-opt.width+'px';
                        }else{
                            gls.style.left=e.offsetX-opt.width/2+'px';
                        }
                        
                        gls.style.top=e.offsetY-opt.width/2+'px';
                    }else{
                       
                        if(e.offsetX-opt.width/2+parseInt(e.target.style.left)<=0){
                            gls.style.left=0;
                        }else if(e.offsetX+parseInt(e.target.style.left)>=limitX-opt.width/2){
                            gls.style.left=limitX-opt.width+'px';
                        }else{
                            e.target.style.left=e.offsetX-opt.width/2+parseInt(e.target.style.left)+'px';
                        }
                        //上下边界
                        if(e.offsetY-opt.width/2+parseInt(e.target.style.top)<=0){
                            gls.style.top=0;
                        }else if(e.offsetY+parseInt(e.target.style.top)>=limitY-opt.width/2){
                            gls.style.top=limitY-opt.width+'px';
                        }else{
                            e.target.style.top=e.offsetY-opt.width/2+parseInt(e.target.style.top)+'px';
                        }
                       
                    }
                    showGlass.changePosition(parseInt(e.target.style.left),parseInt(e.target.style.top));
                });
                //target添加mouseleave事件
                target.addEventListener('mouseleave',function(){
                    gls.style.display='none';
                    showGlass.hide();
                })
            }
            //显示区域
            function ShowPlace(target,opt){
                var position=uiScript.getDomPosition(target);
                var showPlace = document.createElement('div');
                document.body.appendChild(showPlace);
                showPlace.style.width=opt.width*opt.mulriple+'px';
                showPlace.style.height=opt.width*opt.mulriple+'px';
                showPlace.style.position='absolute';
                showPlace.style.display='none';
                showPlace.style.left=position.left+target.clientWidth+5+'px';
                showPlace.style.top=position.top+'px';
                showPlace.style.border="1px solid #ddd";
                showPlace.style.backgroundImage="url("+opt.img+")";
                showPlace.style.backgroundPosition="0px 0px";
                showPlace.style.backgroundRepeat="no-repeat";
                showPlace.style.backgroundSize=opt.mulriple*target.clientWidth+'px';

                this.changePosition=function(x,y){
                
                    showPlace.style.backgroundPosition='-'+opt.mulriple*x+'px -'+opt.mulriple*y+'px';
                }
                this.hide=function(){
                    showPlace.style.display='none';
                }
                this.show=function(){
                    showPlace.style.display='block';
                }
            }
            var showGlass= new ShowPlace(target,opt);
            new Glass(target,opt);
            
        }

    }
    uiScript.print();
    _global = (function () {
        return this || (0, eval)('this');
    }());
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = uiScript;
    } else if (typeof define === 'function' && define.amd) {
        define(function () {
            return uiScript;
        });
    } else {
        !('uiScript' in _global) && (_global.uiScript = uiScript);
    }

}())
