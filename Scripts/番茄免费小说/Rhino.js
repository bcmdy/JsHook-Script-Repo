/**
 * 这是一个Rhino&Frida脚本自适应HOOK方式。HOOK番茄免费小说(com.dragon.read)会员。
 * 测试版本：5.9.9.32, 向下兼容版本：5.8.7.32, 其他版本请自行测试。
 * @author 墨殇
 * @version 4.0
 * @date 2023-11-08
 * @url https://github.com/bcmdy/JsHook-Script-Repo
 * @url https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/master/Scripts/番茄免费小说/Rhino.js
 * @url https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/master/Scripts/番茄免费小说/README.md
 * 2023年11月08日进行了全部重写
 */

"use strict";
const methodsToHook = (runtime.appInfo.versionCode > 58732) ? [
    { className: "com.dragon.read.user.l", paramType: ["com.dragon.read.user.f", "com.dragon.read.rpc.model.InfoResponse"], methodName: "$init", },
] : [
    { className: "com.dragon.read.user.k", paramType: ["com.dragon.read.user.e", "com.dragon.read.rpc.model.InfoResponse"], methodName: "$init", },
];

/**
 * 使用 Frida 框架钩子指定方法
 */
function Frida_Hook() {
    methodsToHook.forEach(method => {
        Java.perform(() => {
            const my_function = function (arg0, arg1) {
                const infoResponse = arg1;
                const currentTimeMillis = Date.now();
                const expireDay = 365;
                const leftTime = 1000 + 60 * 60 * 24 * expireDay;
                const freeAdLeft = leftTime;
                const expireTime = Math.parseInt(currentTimeMillis / 1000 + leftTime);
                const data = infoResponse.data.value;

                // 设置 freeAd 相关属性
                data.freeAd.value = true;
                data.freeAdDay.value = expireDay;
                data.freeAdExpire.value = expireTime;
                data.freeAdLeft.value = freeAdLeft;

                // 设置 hasMedal 和 vipLastExpiredTime 属性
                data.hasMedal.value = true;
                data.vipLastExpiredTime.value = "1654752180";

                // 设置 vipInfo 相关属性
                const vipInfo = data.vipInfo.value;
                vipInfo.continueMonth.value = true;
                vipInfo.continueMonthBuy.value = true;
                vipInfo.expireTime.value = expireTime.toString();
                vipInfo.isVip.value = "1";
                vipInfo.leftTime.value = leftTime.toString();
                data.vipInfo.value = vipInfo;
                infoResponse.data.value = data;

                arg1 = infoResponse;
                return this[method.methodName](arg0, arg1);
            };

            const targetMethod = Java.use(method.className)[method.methodName];
            targetMethod.overload(
                method.paramType[0],
                method.paramType[1]
            ).implementation = my_function;
        });
    });
}

/**
 * Rhino框架, 钩子指定方法
 */
function Rhino_Hook() {
    methodsToHook.forEach(method => {
        const clazz = XposedHelpers.findClass(method.className, runtime.classLoader);
        const hook = XC_MethodHook({
            beforeHookedMethod(param) { },
            afterHookedMethod(param) {
                // 获取infoResponse参数
                const infoResponse = param.args[1];

                // 设置过期天数和剩余时间
                const expireDay = 365;
                const leftTime = 1000 + 60 * 60 * 24 * expireDay;

                // 设置freeAd相关属性
                const data = infoResponse.data;
                data.freeAd = true;
                data.freeAdDay = java.lang.Integer.valueOf(expireDay);
                data.freeAdExpire = java.lang.Long.valueOf(java.lang.System.currentTimeMillis() / 1000 + leftTime);
                data.freeAdLeft = java.lang.Long.valueOf(leftTime);

                // 设置hasMedal和vipLastExpiredTime属性
                data.hasMedal = true;
                data.vipLastExpiredTime = java.lang.Long.valueOf(1654752180).toString();

                // 设置vipInfo相关属性
                const vipInfo = data.vipInfo;
                vipInfo.continueMonth = true;
                vipInfo.continueMonthBuy = true;
                vipInfo.expireTime = data.freeAdExpire.toString();
                vipInfo.isVip = "1";
                vipInfo.leftTime = java.lang.Long.valueOf(leftTime).toString();
                data.vipInfo = vipInfo;

                // 更新infoResponse参数
                infoResponse.data = data;
                param.args[1] = infoResponse;
            }
        });

        if (method.methodName == "$init") {
            // 找到对应的类并钩子方法
            XposedHelpers.findAndHookConstructor(clazz, method.paramType[0], method.paramType[1], hook);
        } else {
            // 找到对应的类并钩子方法
            XposedHelpers.findAndHookMethod(clazz, method.methodName, method.paramType[0], method.paramType[1], hook);
        }
    });
}


/**
* 主函数
*/
function Main() {
    // 检查当前包名是否为 com.dragon.read
    if (runtime.packageName == 'com.dragon.read') {
        // 获取当前注入的类型(1:rhino 2:frida)
        const coreType = runtime.coreType;

        // 根据注入类型调用不同的方法
        if (coreType == 1) {
            console.log('Rhino');
            Rhino_Hook();
        } else if (coreType == 2) {
            console.log('Frida');
            Frida_Hook();
        }
    }
}
Main();