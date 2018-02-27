# uiScript工具集 #
## 基础说明 ##
uiScript是一款由ui团队倾情打造，面向所有层次的前后端程序猿，零门槛即开即用的前端ui开发工具集。只要你是web程序猿，既可以使用。它使用原生javascript书写与组织的工具集，不依赖任何框架，门槛极低，拿来即用。工具集追求极简、实用。其外在的极简，却又不失饱满的内在，体积轻盈，工具丰盈，从核心代码到每个api的细节都经过精心雕琢，非常适合项目使用。它更多是为开发人员量身定做，无需涉及前端工具各种复杂的配置，只需要面对浏览器本身，让一切你所需要的元素，从这里信手拈来。
## 开始使用 ##
**获取**

你可以通过[http://192.168.10.9:8080/dist.zip](http://192.168.10.9:8080/dist.zip "uiScript最新版")来获取uiScript最新版，它经过自动化构建，更适合用于生产环境。

    ├─dist //目录
      └─uiScript.js //uiScript.js所有模块代码

**引用**

获得 uiScript 后，将其完整地部署到你的项目目录（或静态资源服务器），你只需要引入下述文件：

    <!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	    <script src="./dist/uiScript.js"></script>
	    <title>Document</title>
	</head>
	<body>
	    
	</body>
	</html>


> 也许通过上面的阅读，你已经大致了解如何使用 uiScript 了，但真正用于项目远不止如此，你需要继续阅读后面的文档， 
那么，从现在开始，尽情地拥抱 uiScript 吧！但愿它能成为你长远的开发伴侣，化作你方寸屏幕前的亿万字节！

> *uiScript-用心与你沟通*

# 常用数组对象操作 #
## 数组去重 ##
传入任意数组，去除该数组中重复元素，并返回结果

语法：uiscript.unique(arr)

**参数说明**

| 参数 | 类型 |说明|
| - | - | - | 
| arr |Array | 需要去重的数组 |

**示例**

    uisript.unique([1,1,2,2,3,3])
**结果**

    [1,2,3]
> *uiScript-用心与你沟通*
## 判断对象是否为空 ##
传入任意对象，检测改对象是否为空，若为空，返回true

语法：uiscript.isEmptyObject(obj)

**参数说明**



| 参数 | 类型 |说明|
| - | - | - | 
| obj |Object | 需要检测的对象 |

**示例**

    uisript.isEmptyObject({})
**结果** 

    true
> *uiScript-用心与你沟通*

## 判断数组是否完全相等 ##
传入任意两个数组，检测两个数组是否完全相等，若完全相等，返回true

语法： uiscript.arrayEqual(arr1,arr2)

| 参数 | 类型 |说明|
| - | - | - | 
| arr1 |Array | 数组1 |
| arr2 |Array | 数组2 |

**示例**

    uisript.arrayEqual([1,2,3],[1,2,3])
   
**结果**

    true
> *uiScript-用心与你沟通*

##  检测数组中某个元素的下标（非重复元素） ##
判断元素是否存在数组中（元素不能重复，可用uiScript.unique方法去重），如果存在，返回该元素在数组中的索引值，不存在返回-1,

语法：uiscript.arrayIndexOf(arr,any)

| 参数 | 类型 |说明|
| - | - | - | 
| arr |Array | 被查询数组 |
| any |Any | 查询元素 |

**示例**

    uisript.arrayIndexOf([1,2,3],4)
    
**结果**

    -1
> *uiScript-用心与你沟通*

##  交换数组中两项的位置 ##
交换数组中两个元素的位置，该方法需传入三个必须参数，数组arr，需交换位置的两个元素el1、el2的下标值。（说明：若指定的元素下标值不存在，则不进行处理。）

语法：uiscript.arrayAwap(arr,index1,index2)

| 参数 | 类型 |说明|
| - | - | - | 
| arr |Array | 目标数组 |
| index1 |Number | 交换位置的元素1的下标 |
| index2 |Number | 交换位置的元素2的下标 |

**示例**

    uisript.arrayAwap([1,2,3,4],2,4)
    
**结果**

    [1,4,3,2]
> *uiScript-用心与你沟通*

# 宿主环境检测 #
##  获取操作系统 ##
获取浏览器的宿主环境

语法：uisript.getOS()

**示例**

    uisript.getOS()
    
**结果**

    windows
> *uiScript-用心与你沟通*

##  获取浏览器版本号 ##
获取浏览器的版本号

语法：uisript.getExplore()

**示例**

    uisript.getExplore()
    
**结果**

    63.0.3239.84
> *uiScript-用心与你沟通*

# URL地址操作 #
##  url参数转对象 ##
该方法将传入地址的参数转成json对象并返回

语法：uiscript.parseQueryString(url)

| 参数 | 类型 |说明|
| - | - | - | 
| url |string | 被操作的url地址 |

**示例**
 
     uiscript.parseQueryString('localhost:9000?id=3&query="888"')

**结果**

    {
	  id:3,
	  query:'888'
	}
> *uiScript-用心与你沟通*

##  对象序列化 ##
该方法将传入的对象序列化

语法：uiscript.stringfyQueryString(obj)

| 参数 | 类型 |说明|
| - | - | - | 
| obj | Object | 需要序列化的对象 |
**示例**

    uiscript.stringfyQueryString({
	 	  query:'888'
    })
**结果**

    id=3&query='888'
> *uiScript-用心与你沟通*


# 缓存 #
##设置cookie##
设置cookie,days必须

语法：uiscript.setCookie(key,value,time)

| 参数 | 类型 |说明|
| - | - | - | 
| key | String | 键名 |
| value | Any | 值 |
| time | number | 过期时间，单位：天 |
**示例**
  
     uiscript.setCookie('name','UI团队是最美丽的团队',25)
**结果**

    已缓存，无返回结果
> *uiScript-用心与你沟通*

##根据name删除cookie##
根据name删除cookie

语法：uiscript.removeCookie(key)

| 参数 | 类型 |说明|
| - | - | - | 
| key | String | 键名 |


**示例**

    uisript.removeCookie('name')
    
**结果**

    已删除，无返回结果
> *uiScript-用心与你沟通*

##根据name获取cookie##
根据name获取cookie

语法：uiscript.getCookie(key)

| 参数 | 类型 |说明|
| - | - | - | 
| key | String | 键名 |

**示例**

    uisript.getCookie('name')

**结果**

    UI团队是最美丽的团队
> *uiScript-用心与你沟通*


##判断浏览器是否支持h5存储##
判断浏览器是否支持html5存储，若支持，返回true，若不支持，弹窗提示用户，以下调用h5缓存api内部都已调用该方法，使用时无需重复调用。

**示例**

    uisript.isSupportStorage()
**结果**

    true
> *uiScript-用心与你沟通*

##设置local存储##
设置local存储，此方法需传入存储的属性以及属性值

语法：uiscript.setLocal(key,value)

| 参数 | 类型 |说明|
| - | - | - | 
| key | String | 键名 |
| value | Any | 值 |

**示例**
   
    uiscript.setLocal('name','UI团队是最美丽的团队')

**结果**

    已存储，无返回结果
> *uiScript-用心与你沟通*

##获取local存储特定属性的值##
设置local存储，此方法需传入需返回属性值的属性名

语法:uiscript.getLocal(key')

| 参数 | 类型 |说明|
| - | - | - | 
| key | String | 键名 |

**示例**

    uisript.getLocal('name')
   
**结果**

    UI团队是最美丽的团队
> *uiScript-用心与你沟通*

##清空local存储##
清空local存储，调用此方法，浏览器所有的localStorage将被清除

语法: uisript.clearLocal()

**示例**

    uisript.clearLocal()
    
**结果**

    localStorage已被清除，无返回结果
> *uiScript-用心与你沟通*

##移除local索引下的值##
移除localStorage特定属性的值，此方法需传入需移除的属性

语法：uiscript.removeLocal(key)

| 参数 | 类型 |说明|
| - | - | - | 
| key | String | 键名 |

**示例**

    uisript.removeLocal('name')

**结果**

    localStorage属性移除，无返回结果
> *uiScript-用心与你沟通*

##设置Session存储##
设置session存储，此方法需传入存储的属性以及属性值

语法：uiscript.setSession(key,value)

| 参数 | 类型 |说明|
| - | - | - | 
| key | String | 键名 |
| value | Any | 值 |

**示例**

    uisript.setSession('name','UI团队是最美丽的团队')
    
**结果**

    已存储，无返回结果
> *uiScript-用心与你沟通*

##获取Session存储特定属性的值##
设置Session存储，此方法需传入需返回属性值的属性名

语法： uiscript.getSession(key)

| 参数 | 类型 |说明|
| - | - | - | 
| key | String | 键名 |

**示例**

    uisript.getSession('name')

**结果**

    UI团队是最美丽的团队
> *uiScript-用心与你沟通*

##清空Session存储##
清空Session存储，调用此方法，浏览器所有的SessionStorage将被清除

语法： uisript.clearSession()

**示例**

    uisript.clearSession()
**结果**

    SessionStorage已被清除，无返回结果
> *uiScript-用心与你沟通*

##移除Session索引下的值##
移除SessionStorage特定属性的值，此方法需传入需移除的属性

用法：uiscript.removeSession(key)

| 参数 | 类型 |说明|
| - | - | - | 
| key | String | 键名 |

**示例**

    uisript.removeSession('name')

**结果**

    SessionStorage属性name的值已移除，无返回结果
> *uiScript-用心与你沟通*

# 格式验证 #
##判断是否是手机号##
此方法判断传入的字符串是否为手机号码格式，只验证格式，不验证是否号码正确，以下验证方法类似,若为手机号码格式，则返回true

语法： uiscript.isPhoneNum(num)

| 参数 | 类型 |说明|
| - | - | - | 
| num | Number | 手机号 |

**示例**

    uisript.isPhoneNum('15521108258')
    
**结果**

    true
> *uiScript-用心与你沟通*

##判断是否是身份证号码##
此方法判断传入的字符串是否为身份证号码,若为身份证号码，则返回true

语法： uiscript.isIdCard(num)

| 参数 | 类型 |说明|
| - | - | - | 
| num | Number | 身份证号 |

**示例**

    uisript.isIdCard('350583199310238330')

**结果**

    true
> *uiScript-用心与你沟通*

##判断是否为URL地址##
此方法判断传入的字符串是否为URL地址,若为URL地址，则返回true

语法： uiscript.isUrl(url)

| 参数 | 类型 |说明|
| - | - | - | 
| url | String | url地址 |

**示例**

    uisript.isUrl('http://www.baidu.com')

**结果**

    true
> *uiScript-用心与你沟通*


##判断是否为邮箱地址##
此方法判断传入的字符串是否为邮箱地址,若为邮箱地址，则返回true

语法： uiscript.isEmail(email)

| 参数 | 类型 |说明|
| - | - | - | 
| email | String | email地址 |

**示例**

    uiscript.isEmail('870462454@qq.com')
**结果**

    true
> *uiScript-用心与你沟通*

# 其他 #
##现金额转大写##
此方法判断传入的小写阿拉伯数字金额转成大写金额

语法： uiscript.digitUppercase(num)

| 参数 | 类型 |说明|
| - | - | - | 
| num | Number | 数字 |

**示例**

    uiscript.digitUppercase(10000)

**结果**

    壹万元整
> *uiScript-用心与你沟通*

##随机颜色##
此方法生成随机颜色的十六进制

语法：uiscript.randomColor()

**示例**

    uiscript.randomColor()

**结果**

    #485618
> *uiScript-用心与你沟通*

##生成指定范围随机数##
此方法生成指定范围内的随机数

语法：uiscript.randomNum(min,max) 

| 参数 | 类型 |说明|
| - | - | - | 
| min | Number | 数字1 |
| max | Number | 数字2 |

**示例**

    uiscript.randomNum(0,100)
**结果**

    88
> *uiScript-用心与你沟通*

##深拷贝##
此方法可深度拷贝三类对象，时间、数组、对象，若你想操作数据又不想影响原始数据源，该方法是你的首选

语法： uiscript.deepClone(obj)

| 参数 | 类型 |说明|
| - | - | - | 
| obj | Object | 被拷贝对象 |

**示例**

    uisript.deepClone({'name':'UI团队'})

**结果**

    {'name':'UI团队'}
> *uiScript-用心与你沟通*

#时间操作#

##日期格式化##
该方法可以将时间格式化成常见形式，默认为（XXXX年XX月XX日 XX时XX分XX秒），也可以传入分隔符，例如‘/’、‘-’、‘.’。

语法： uiscript.formatDate(date,symbol);

| 参数 | 类型 |说明|
| - | - | - | 
| date | Date | 时间对象 |
| symbol | string | 分隔符 |

**示例**

    uiscript.formatDate(new Date('2018-1-1 12:00:00'));
    uiscript.formatDate(new Date('2018-1-1 12:00:00'),'-');

**结果**

    {'name':'UI团队'}
    2018年1月1日 12时00分00秒
    2018-1-1 12:00:00
> *uiScript-用心与你沟通*

##返回时间在多久前##
该方法可以返回传入时间距离当前多久之前，例如三分钟之前返回‘刚刚’，三十天以内返回‘XX天前’，‘XX小时前’，‘XX分钟前’，大于三十天返回常规日期，常用于日志信息。

语法： uiscript.timeAgo(date);

| 参数 | 类型 |说明|
| - | - | - | 
| date | Date | 时间对象 |


**示例**

    //假设当前时间 2017年12月28日 15:35
    uiscript.timeAgo(new Date('2017-1-1 12:00:00'));
    uiscript.timeAgo(new Date('2017-12-26 12:00:00'));
    uiscript.timeAgo(new Date('2017-12-28 12:00:00'));
    uiscript.timeAgo(new Date('2017-12-28 15:34:00'));
    uiscript.timeAgo(new Date('2017-12-28 15:00:00'));
   

**结果**

    2017-1-1 12:00:00
    2天前
    3小时前
    刚刚
    35分钟前
> *uiScript-用心与你沟通*

##倒计时##
设置倒计时，传入dom节点id和到期时间，会返回相应结果到DOM元素的HTML。

语法： uiscript.countdown(id,endTime);

| 参数 | 类型 |说明|
| - | - | - | 
| id | String | 返回接收字符串的DOM的ID |
| endTime | Date | 结束时间 |


**示例**

    //假定当前时间 2017.12.28 15:48
    uiscript.countdown('test',new Date('2018-1-1 12:00:00'));
   

**结果**

    <div id="test">
         3天20时11分10秒
    </div>

> *uiScript-用心与你沟通*