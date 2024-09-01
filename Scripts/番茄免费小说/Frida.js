/**
 * Hook vip信息模型
 */
if (runtime.packageName == 'com.dragon.read') {
    Java.classFactory.loader = Java.use('android.app.ActivityThread').currentActivityThread().mInitialApplication.value.getClassLoader();
    const VipInfoModel = Java.use('com.dragon.read.user.model.VipInfoModel');

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
    VipInfoModel.$init.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'boolean', 'boolean', 'int', 'boolean', 'com.dragon.read.rpc.model.VipSubType').implementation = function (...args) {
        console.log('Hooked VipInfoModel constructor with args:', args);
        const VipSubType = Java.use('com.dragon.read.rpc.model.VipSubType');

        // 365天的vip有效期
        const expireDay = 365;
        // vip剩余时间
        const leftTime = 1000 + 60 * 60 * 24 * expireDay;
        // vip到期时间 Date.now()/1000转为整数+leftTime
        const expireTime = Math.floor(Date.now() / 1000) + leftTime;
        // 是否是广告vip
        const isAdVip = true;
        // 是否自动续费
        const isAutoCharge = true;
        // 是否是union vip
        const isUnionVip = true;
        // 是否是vip
        const isVip = '1';
        // vip类型
        const subType = VipSubType.valueOf('Default');
        // vip来源
        const unionSource = 1000000;

        args[0] = expireTime.toString();
        args[1] = isVip.toString();
        args[2] = leftTime.toString();
        args[3] = isAutoCharge;
        args[4] = isUnionVip;
        args[5] = unionSource;
        args[6] = isAdVip;
        args[7] = subType;

        console.log('Hooked VipInfoModel constructor with path:', args);
        // 你可以在这里修改参数或执行其他逻辑
        return this.$init(...args);
    };

}

