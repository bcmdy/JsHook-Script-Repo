var hostPackageName = runtime.packageName;
if (hostPackageName == 'com.smile.ai.ocr') {
  // Rhino框架,启动配置建议延时10-20ms,随机请求ID,无限10次试用.

  // 构造随机字符串
  var generateRandomString = function (length) {
    var result = '';
    var characters = 'abcdef1234567890';
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // 生成一个长度为 32位 的随机字符串
  var result = generateRandomString(32);

  XposedHelpers.findAndHookMethod('b.d.i.e', runtime.classLoader, "a", 'java.lang.String', XC_MethodHook({
    beforeHookedMethod: function (param) {
      // console.log("随机字符串 " + result.toString());
      param.setResult(result);
    },
    afterHookedMethod: function (param) {

    }
  }));
}