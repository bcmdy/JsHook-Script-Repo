## JsHook脚本仓库 JsHook-Script-Repo

- 仓库脚本仅供学习参考, 请勿用于非法用途

### 自建仓库

建议使用github仓库, CDN仓库刷新存在延迟

#### 新版仓库地址(V1.1.5+)

- **github(一般情况下需爬墙):**

https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/master/Store-new.json

[添加仓库](jshook://store?url=https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/master/Store-new.json)

- **CDN解析地址(一般情况下国内正常访问):**

https://gh-proxy.com/https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/master/Store-new-cdn.json

[添加仓库](jshook://store?url=https://gh-proxy.com/https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/master/Store-new-cdn.json)

## 脚本说明

### 模拟器转译机制

- **转译行为**：大部分模拟器（如 LDPlayer、NoxPlayer 等）会在 APK 不支持 x86/x64 架构时，自动从 APK 中的 ARM/ARM64 架构模块进行转译。
- **加载方式**：转译后的模块不会按正常方式加载到进程内存，而是通过模拟器的特殊机制加载。
- **Hook 失效**：由于加载方式的改变，针对 native 层函数的 Hook 可能会失效，这是正常现象。

### 解决建议

1. **检查 APK 架构**：确保 APK 包含 x86/x64 架构的模块，避免模拟器进行转译。
2. **调整 Hook 逻辑**：如果必须使用转译模块，尝试使用基于函数名称或符号的 Hook 方法。
3. **终极方案**：直接更换 Arm/Arm64 架构的PC设备（如 苹果的大部分设备、微软的Surface 等）。
