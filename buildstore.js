const fs = require('fs');

/**
 * 从文件内容中提取信息并生成存储对象
 * @param {string} filePath 文件路径
 * @returns {Array<Object>|null} 存储对象的数组，如果无法提取信息则返回null
 */
function generateStoreObject(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');

    const nameMatch = content.match(/^# 名称\s+(.*)$/m);
    const versionMatch = content.match(/^# Version\s+(.*)$/m);
    const scriptTypeMatch = content.match(/^# 脚本类型\s+(.*)$/m);
    const authorMatch = content.match(/^# 作者\s+@(.*)$/m);
    const descriptionMatch = content.match(/^# 描述\s+([\s\S]*?)$/m);
    const ctimeMatch = content.match(/^# 更新时间\s+(.*)$/m);

    if (!nameMatch || !versionMatch || !scriptTypeMatch || !authorMatch || !descriptionMatch || !ctimeMatch) {
        return null;
    }

    const name = nameMatch[1];
    const version = versionMatch[1];
    const scriptType = scriptTypeMatch[1];
    const author = authorMatch[1];
    const description = descriptionMatch[1];
    const ctime = ctimeMatch[1];
    // 取10-999随机数
    const down_count = Math.floor(Math.random() * 900) + 10;
    const branch = "master";
    const store = {
        "author": author,
        "markdown": `https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/${branch}/Scripts/${name}/README.md`,
        "ctime": ctime,
        "source": `https://github.com/bcmdy/JsHook-Script-Repo/tree/${branch}/Scripts/${name}`,
        "id": name,
        "title": name,
        "type": scriptType,
        "version": version,
        "url": `https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/${branch}/Scripts/${name}/${scriptType}.js`,
        "desc": description,
        "down_count": down_count
    };
    // const store_cdn = {
    //     "author": author,
    //     "markdown": "https://cdn.jsdelivr.net/gh/bcmdy/JsHook-Script-Repo@" + branch + "/Scripts/" + name + "/README.md",
    //     "ctime": ctime,
    //     "source": "https://github.com/bcmdy/JsHook-Script-Repo/tree/" + branch + "/Scripts/" + name,
    //     "id": name,
    //     "title": name,
    //     "type": scriptType,
    //     "version": version,
    //     "url": "https://cdn.jsdelivr.net/gh/bcmdy/JsHook-Script-Repo@" + branch + "/Scripts/" + name + "/" + scriptType + ".js",
    //     "desc": description,
    //     "down_count": down_count
    // };
    const store_cdn = {
        "author": author,
        "markdown": `https://gh-proxy.com/https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/${branch}/Scripts/${name}/README.md`,
        "ctime": ctime,
        "source": `https://github.com/bcmdy/JsHook-Script-Repo/tree/${branch}/Scripts/${name}`,
        "id": name,
        "title": name,
        "type": scriptType,
        "version": version,
        "url": `https://gh-proxy.com/https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/${branch}/Scripts/${name}/${scriptType}.js`,
        "desc": description,
        "down_count": down_count
    };
    return [store, store_cdn];
}

function main() {
    const stores = [];
    const stores_cdn = [];
    let allFiles = getAllFiles('./Scripts');
    console.log(`文件数量:${allFiles.length}`);
    for (let i = 0; i < allFiles.length; i++) {
        if (allFiles[i].indexOf("README.md") >= 0 && allFiles[i] != "./README.md") {
            // 生成存储对象
            let store = generateStoreObject(allFiles[i]);
            if (store) {
                stores.push(store[0]);
                stores_cdn.push(store[1]);
            }
        }
    }
    fs.writeFileSync('Store.json', JSON.stringify(stores, null, "\t"));
    fs.writeFileSync('Store-cdn.json', JSON.stringify(stores_cdn, null, "\t"));
}

/**
 * 获取指定目录下的所有文件
 * @param {string} directory 目录路径
 * @returns {string[]} 文件路径数组
 */
function getAllFiles(directory) {
    let allFilePaths = [];
    if (fs.existsSync(directory)) {
        let files = fs.readdirSync(directory);
        for (let i = 0; i < files.length; i++) {
            let file = files[i]; // 文件名称（不包含文件路径）
            let currentFilePath = directory + '/' + file;
            let stats = fs.lstatSync(currentFilePath);
            if (stats.isDirectory()) {
                allFilePaths = allFilePaths.concat(getAllFiles(currentFilePath));
            } else {
                allFilePaths.push(currentFilePath);
            }
        }
    } else {
        console.warn(`指定的目录${directory}不存在！`);
    }

    return allFilePaths;
}

main();