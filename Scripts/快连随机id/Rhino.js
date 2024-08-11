var hostPackageName = runtime.packageName;
 if (hostPackageName == 'world.letsgo.booster.android.pro') {
    // 随机id,切换线路,铂金会员.
    
   // 构造随机字符串
     var generateRandomString = function(length) {
     var result = '';
     var characters = 'abcdef0123456789';
     for (var i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * characters.length));
     }
     return result;
   };
  
  // 生成一个长度为 16 的随机字符串
    var result = generateRandomString(16);

    XposedHelpers.findAndHookMethod('ds.m', runtime.classLoader, "f",  XC_MethodHook({
        beforeHookedMethod: function (param) {
        console.log("随机字符串 " + result.toString());
        param.setResult(result);
        },
        afterHookedMethod: function (param) {
        
        }
    }));                
    XposedHelpers.findAndHookMethod('world.letsgo.booster.android.data.bean.Account', runtime.classLoader, "getLevelTitle",  XC_MethodHook({
        beforeHookedMethod: function (param) {
             param.setResult('铂金会员');
        },
        afterHookedMethod: function (param) {
            
        }
    })); 
    XposedHelpers.findAndHookMethod('world.letsgo.booster.android.data.bean.Account', runtime.classLoader, "getUserLevel",  XC_MethodHook({
        beforeHookedMethod: function (param) {
             param.setResult('platinum');
        },
        afterHookedMethod: function (param) {
            
        }
    }));
}