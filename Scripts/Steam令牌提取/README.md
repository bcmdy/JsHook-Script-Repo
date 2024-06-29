# 名称
Steam令牌提取
# Version
3.0
# 脚本类型
Frida
# 描述
Steam令牌提取

提取Steam令牌 原始 SteamGuard-NNNNNNNNN 文件内容

uuidKey依旧从文件:/data/user/0/com.valvesoftware.android.steam.community/shared_prefs/steam.uuid.xml 中明文提取

用于第三方密钥令牌管理.

如 WinAuth, Steam Desktop Auto, Watt Toolkit(原Steam++)
# 更新:
V3.0
2024/6/29 13:26:54
仓库更新 开源脚本
V2.0
2023/9/2 15:28:12
提高运行效率并添加正则提取，直接打印出:
{"shared_secret":"xxxxxx","identity_secret":"xxxxxxx","secret_1":"xxxxxx","serial_number":"xxxxxx","revocation_code":"xxxxxx","account_name":"xxxxxx","token_gid":"xxxxxx","steamguard_scheme":x,"steamid":"xxxxxx"}
令牌信息直接可用，无需手动修改
# 作者
@墨殇
# 更新时间
2024/6/29 13:26:54