var mod = {
  Name: 'Steam令牌提取',
  Type: 'Frida',
  Version: '12.0',
  Athor: '墨殇(不吃猫的鱼)',
  Description: `Steam令牌提取
  提取Steam令牌 原始 SteamGuard-NNNNNNNNN 文件内容
  用于第三方密钥令牌管理.
  如 WinAuth, Steam Desktop Auto, Watt Toolkit(原Steam++)
`
}
//expo.modules.securestore.SecureStoreModule$AESEncrypter;->decryptItem(org.json.JSONObject;java.security.KeyStore$SecretKeyEntry;)-->java.lang.String;
function hook() {
  var key, id;
  Java.perform(function () {
    Java.use("expo.modules.securestore.SecureStoreModule$AESEncrypter").decryptItem.overload('org.json.JSONObject', 'java.security.KeyStore$SecretKeyEntry').implementation = function (arg1, arg2) {
      let ret = this.decryptItem(arg1, arg2);
      key = ret
      return ret;
    }
    id = setInterval(() => {
      if (key) {
        let pattern = /({"shared_secret":"[\s\S]*?"steamid":"[\s\S]*?"})/;
        console.log("\r\n" + pattern.exec(key)[1].toString());
        clearInterval(id);
      }
    }, 500);
  });
};
setImmediate(hook);
