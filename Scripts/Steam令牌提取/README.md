# 名称
Steam令牌提取
# Version
1.0
# 脚本类型
Frida
# 描述
Steam令牌提取
提取Steam令牌 原始 SteamGuard-NNNNNNNNN 文件内容

uuidKey依旧从文件:/data/user/0/com.valvesoftware.android.steam.community/shared_prefs/steam.uuid.xml 中明文提取

用于第三方密钥令牌管理.

如 WinAuth, Steam Desktop Auto, Watt Toolkit(原Steam++)
# 注:
获取到结果:

{
  "accounts": {
    "XXXXX": {
      "shared_secret": "XXX",
      "identity_secret": "XXX",
      "secret_1": "XXX",
      "serial_number": "XXX",
      "revocation_code": "XXX",
      "account_name": "XXX",
      "token_gid": "XXX",
      "phone_number_hint": "XXX"
    }
  }
}

掐头去尾修改为:

{
  "shared_secret": "XXX",
  "identity_secret": "XXX",
  "secret_1": "XXX",
  "serial_number": "XXX",
  "revocation_code": "XXX",
  "account_name": "XXX",
  "token_gid": "XXX",
  "phone_number_hint": "XXX"
}

# 作者
@墨殇