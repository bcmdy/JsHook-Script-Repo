Java.perform(function () {
  var className = 'android.provider.Settings$System';
  var methodName = 'getString';
  var className1 = 'world.letsgo.booster.android.data.bean.Account';
  var methodName1 = 'getUserLevel';
  var methodName2 = 'getLevelTitle';
  
  // 获取类和方法对象
  var clazz = Java.use(className);
  var method = clazz[methodName].overload('android.content.ContentResolver', 'java.lang.String');
  var clazz1 = Java.use(className1);
  var method1 = clazz1[methodName1];
  var method2 = clazz1[methodName2];

  // 构造随机字符串函数
  function generateRandomString() {
    var possible = "0123456789abcdef";
    var randomStr = "";
    for (var i = 0; i < 16; i++) {
      randomStr += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randomStr;
  }

  // 获取 SharedPreferences 实例
  var prefs = Java.use('android.app.ActivityThread').currentApplication().getApplicationContext()
      .getSharedPreferences('frida_prefs', 0);
  
  // 读取上次保存的随机字符串和时间
  var randomStr = prefs.getString('randomStr', null);
  var lastGeneratedTime = prefs.getLong('lastGeneratedTime', 0);
  var currentTime = new Date().getTime();

  // 如果没有保存过随机字符串或超过60分钟则生成新的随机字符串
  if (randomStr === null || (currentTime - lastGeneratedTime) > 3600000) {
    randomStr = generateRandomString();
    lastGeneratedTime = currentTime;
    
    // 将新生成的随机字符串和时间保存到 SharedPreferences 中
    var editor = prefs.edit();
    editor.putString('randomStr', randomStr);
    editor.putLong('lastGeneratedTime', lastGeneratedTime);
    editor.apply();
    
    console.log('hook->生成新随机ID: ' + randomStr);
  } else {
    console.log('hook->使用旧随机ID: ' + randomStr);
  }

  // 替换方法实现
  method.implementation = function () {
    return randomStr;
  };

  method1.implementation = function () {
    return "platinum";
  };

  method2.implementation = function () {
    return "铂金会员";
  };
});