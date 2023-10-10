const injectClass = XposedHelpers.findClass("com.dragon.read.user.k", runtime.classLoader);
XposedBridge.hookAllConstructors(
  injectClass,
  XC_MethodHook({
    afterHookedMethod: function (param) {
      if (param.args.length == 2) {
        const infoResponse = param.args[1];
        const currentTimeMillis = java.lang.System.currentTimeMillis();
        const expireDay = 365;
        const leftTime = 1000 + 60 * 60 * 24 * expireDay;
        const freeAdLeft = leftTime;
        const expireTime = java.lang.Long.valueOf(currentTimeMillis / 1000 + leftTime);
        const data = infoResponse.data;
        data.freeAd = true;
        data.freeAdDay = java.lang.Integer.valueOf(expireDay);
        data.freeAdExpire = expireTime;
        data.freeAdLeft = java.lang.Long.valueOf(freeAdLeft);
        data.hasMedal = true;
        data.vipLastExpiredTime = java.lang.Long.valueOf(1654752180).toString();
        const vipInfo = data.vipInfo;
        vipInfo.continueMonth = true;
        vipInfo.continueMonthBuy = true;
        vipInfo.expireTime = expireTime.toString();
        vipInfo.isVip = "1";
        vipInfo.leftTime = java.lang.Long.valueOf(leftTime).toString();
        data.vipInfo = vipInfo;
        infoResponse.data = data;
        param.args[1] = infoResponse;
      } else {
        console.log("length not equal 2");
      }
    },
  })
);
