/**
 * 这是一个Frida脚本，HOOK番茄免费小说(com.dragon.read)Vip破解。
 * 测试版本：6.3.9.32，向下兼容版本：5.5.3.99，其他版本请自行测试。
 *  @author 墨殇
 *  @version 5.0.0
 *  @date 2024-9-1
 *  @url https://github.com/bcmdy/JsHook-Script-Repo
 *  @url https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/master/Scripts/番茄免费小说/Frida.js
 *  @url https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/master/Scripts/番茄免费小说/README.md
 * 2024年9月1日进行了全部重写
 */
/**
 * 显示 Toast 提示
 * @param {string} Msg - 提示信息
 * @returns {void}
 */
function Mytoast(Msg) {
    // 如果存在 modmenu，则调用 toast 函数显示 Toast 提示
    if (typeof modmenu !== 'undefined') {
        toast(Msg);
    } else {
        // 否则，在控制台输出提示信息
        console.log(`toast(${Msg})`);
    }
}
if (runtime.packageName == 'com.dragon.read') {
    Java.classFactory.loader = Java.use('android.app.ActivityThread').currentActivityThread().mInitialApplication.value.getClassLoader();
    const VipInfoModel = Java.use('com.dragon.read.user.model.VipInfoModel');
    let newVipInfoModel = false;
    let oldVipInfoModel = false;
    try {
        newVipInfoModel = VipInfoModel.$init.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'boolean', 'boolean', 'int', 'boolean', 'com.dragon.read.rpc.model.VipSubType');
    } catch (error) {
        newVipInfoModel = false;
    }
    try {
        oldVipInfoModel = VipInfoModel.$init.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'boolean');
    } catch (error) {
        oldVipInfoModel = false;
    }
    if (newVipInfoModel) {
        Mytoast('HOOK Start: 新版vip');

        newVipInfoModel.implementation = function (expireTime, isVip, leftTime, isAutoCharge, isUnionVip, unionSource, isAdVip, subType) {
            /**
             * Hook vip信息模型的构造函数
             * @param {string} expireTime vip到期时间
             * @param {string} isVip 是否是vip
             * @param {string} leftTime vip剩余时间
             * @param {boolean} isAutoCharge 是否自动续费
             * @param {boolean} isUnionVip 是否是union vip
             * @param {number} unionSource vip来源
             * @param {boolean} isAdVip 是否是广告vip
             * @param {com.dragon.read.rpc.model.VipSubType} subType vip类型
             */
            const VipSubType = Java.use('com.dragon.read.rpc.model.VipSubType');
            // 365天的vip有效期
            const days = 365;
            // vip剩余时间
            leftTime = 1000 + 60 * 60 * 24 * days;
            // vip到期时间 Date.now()/1000转为整数+leftTime
            expireTime = Math.floor(Date.now() / 1000) + leftTime;
            // 是否是vip
            isVip = '1';
            // 是否是union vip
            isUnionVip = true;
            // 是否是广告vip
            isAdVip = true;
            // 是否自动续费
            isAutoCharge = true;
            // vip类型
            subType = VipSubType.valueOf('Default');
            // vip来源
            unionSource = 1000000;

            // 你可以在这里修改参数或执行其他逻辑
            return this.$init(expireTime.toString(), isVip, leftTime.toString(), isAutoCharge, isUnionVip, unionSource, isAdVip, subType);
        };
    } else if (oldVipInfoModel) {
        Mytoast('HOOK Start: 旧版vip');
        oldVipInfoModel.implementation = function (expireTime, isVip, leftTime, isAutoCharge) {
            /**
             * Hook vip信息模型的构造函数
             * @param {string} expireTime vip到期时间
             * @param {string} isVip 是否是vip
             * @param {string} leftTime vip剩余时间
             * @param {boolean} isAutoCharge 是否自动续费
             */
            // 365天的vip有效期
            const days = 365;
            // vip剩余时间
            leftTime = 1000 + 60 * 60 * 24 * days;
            // vip到期时间 Date.now()/1000转为整数+leftTime
            expireTime = Math.floor(Date.now() / 1000) + leftTime;
            // 是否自动续费
            isAutoCharge = true;
            // 是否是vip
            isVip = "1";
            // 你可以在这里修改参数或执行其他逻辑
            return this.$init(expireTime.toString(), isVip, leftTime.toString(), isAutoCharge);
        };
    } else {
        Mytoast('HOOK Error: 未适配版本');
    }
}

