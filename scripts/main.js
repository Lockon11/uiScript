　　requirejs.config({
    　　　　paths: {
    　　　　　　'uiScript': 'uiScript',
                
    　　　 }
    　　});

require(['uiScript'],function(uiScript){
   
    var arr1=[1,2,3,4,51,1,1,1];
  
    console.log(uiScript.unique(arr1));
    console.log(uiScript.unique());
    console.log(uiScript.isEmptyObject({a:1}));
    var a = new Date();
    console.log(uiScript.formatDate(a,'.'));
    console.log(uiScript.arrayEqual([1,2,3],[1,2,3]));
    console.log(uiScript.hasClass(file,'test'));
    console.log(uiScript.addClass(file,'test2'));
    console.log(uiScript.removeClass(file,'test3'));
    console.log(uiScript.getExplore());
    console.log(uiScript.getOS());
    var a=[{b:2,c:1},2];
    b=uiScript.deepClone(a);
    console.log(b);
    delete b[0].b
    console.log(b);
    console.log(a);
    console.log(uiScript.digitUppercase(12134123));
    console.log(uiScript.parseQueryString('www.baidu.com?a=2&b=1'));
    console.log(uiScript.stringfyQueryString({a:1,b:2}));
});
