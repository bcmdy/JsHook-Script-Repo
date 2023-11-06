/**
 * 这是一个Rhino&Frida脚本自适应HOOK方式。HOOK番茄免费小说(com.dragon.read)会员。
 * 测试版本：5.9.9.32, 向下兼容版本：5.8.7.32, 其他版本请自行测试。
 */

// 需要钩子的方法
const methodsToHook = [
  {
      className: 'com.dragon.read.user.b',
      methodName: 'd',
      resultValues: 'true'
  },
  {
      className: 'com.dragon.read.component.biz.impl.h.e',
      methodName: 'isVip',
      resultValues: 'true'
  },
  {
      className: 'com.dragon.read.polaris.d',
      methodName: 'e',
      resultValues: 'false'
  },
  {
      className: 'com.dragon.read.component.audio.impl.ui.c.a',
      methodName: 'a',
      resultValues: 'null'
  },
  {
      className: 'com.dragon.read.base.ad.a',
      methodName: 'a',
      resultValues: 'false'
  },
  {
      className: 'com.ss.android.update.ad',
      methodName: 'k',
      resultValues: 'false'
  },
  {
      className: 'com.dragon.read.social.e.a.d',
      methodName: '*',
      resultValues: '*'
  },
  {
      className: 'com.dragon.read.widget.m',
      methodName: 'a',
      resultValues: '*'
  },
  {
      className: 'com.dragon.read.reader.ad.readflow',
      methodName: '*',
      resultValues: '*'
  },
  {
      className: 'com.dragon.read.polaris.userimport.f',
      methodName: 'b',
      resultValues: 'true'
  }
];

/**
* 将给定的值转换为对应的结果值。
* @param {string} value - 需要转换的值。
* @returns {boolean|null|string} - 转换后的结果值。
*/
function getResultValue(value) {
  switch (value) {
      case 'true':
          return true;
      case 'false':
          return false;
      case 'null':
          return null;
      default:
          return value;
  }
}

/**
 * Rhino框架, 钩子指定方法
 */
function Rhino_hookMethods() {
  methodsToHook.forEach(function (method) {
      // 找到对应的类并钩子方法
      const clazz = XposedHelpers.findClass(method.className, runtime.classLoader);
      const hook = XC_MethodHook({
          beforeHookedMethod: function (param) {
              // 设置返回结果值
              param.setResult(getResultValue(method.resultValues));
          },
          afterHookedMethod: function (param) { }
      });
      // 钩子方法
      XposedBridge.hookAllMethods(clazz, method.methodName, hook);
  });
}

/**
* Frida框架, 钩子指定方法
*/
function Frida_hookMethods() {
  // 遍历需要钩子的方法
  methodsToHook.forEach(function (method) {
      // 使用Java.perform()函数执行钩子操作
      Java.perform(function () {
          // 获取指定类的方法
          const targetMethod = Java.use(method.className)[method.methodName];
          // 重写方法实现
          targetMethod.overload().implementation = function () {
              // 返回指定结果值
              return getResultValue(method.resultValues);
          }
      });
  });
}

/**
* 主函数
*/
function Main() {
  // 检查当前包名是否为 com.dragon.read
  if (runtime.packageName === 'com.dragon.read') {
      // 获取当前注入的类型(1:rhino 2:frida)
      const coreType = runtime.coreType();
      
      // 根据注入类型调用不同的方法
      if (coreType == 1) {
          Rhino_hookMethods();
      } else if (coreType == 2) {
          Frida_hookMethods();
      }
  }
}

Main();