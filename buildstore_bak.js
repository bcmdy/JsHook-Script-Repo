const fs = require('fs');
const path = require('path');
//var filePath = path.resolve('.');
//调用文件遍历方法

//文件遍历方法
// fileDisplay(filePath);

main()
function main() {
    const stores = [];
    const stores_cdn = [];
    let allFiles = getAllFiles('./Scripts');
    console.log(`文件数量:${allFiles.length}`);
    for (let i = 0; i < allFiles.length; i++) {
        // console.log(allFiles[i]);
        // 同步读取文件内容
        if (allFiles[i].indexOf("README.md") >= 0 && allFiles[i] != "./README.md") {
            // console.log(allFiles[i]);// 读取文件内容
            let content = fs.readFileSync(allFiles[i], 'utf-8');
            let nameRegex = /^# 名称\s+(.*)$/m; // 匹配以 "#名称" 开头，后面跟着至少一个空格的行，并获取该行后面所有文本。
            let versiongex = /^# Version\s+(.*)$/m;
            let scriptTypeRegex = /^# 脚本类型\s+(.*)$/m;
            let authorRegex = /^# 作者\s+@(.*)$/m; // 匹配以 "#作者" 开头，后面跟着至少一个空格和 "@" 符号的行，并获取该行后面所有文本。
            // let descriptionRegex = /# 描述\s+([\s\S]*?)\s+# /; // 匹配以 "#描述" 开头，后面跟着至少一个空格的行，并获取该行后面所有文本。
            let descriptionRegex = /# 描述\s+([\s\S]*?)$/m; // 匹配以 "#描述" 开头，后面跟着至少一个空格的行，并获取该行后面所有文本。
            let ctimeRegex = /^# 更新时间\s+(.*)$/m

            let nameMatch = content.match(nameRegex); // 使用正则表达式从文本中获取名称。
            let versionMatch = content.match(versiongex);
            let scriptTypeMatch = content.match(scriptTypeRegex); // 使用正则表达式从文本中获取脚本类型。
            let authorMatch = content.match(authorRegex); // 使用正则表达式从文本中获取作者。
            let descriptionMatch = content.match(descriptionRegex); // 使用正则表达式从文本中获取描述。
            let ctimeMatch = content.match(ctimeRegex);

            let name = nameMatch && nameMatch[1]; // 如果找到了匹配项，则获取第一项（分组捕获的内容）。
            let version = versionMatch && versionMatch[1]; // 如果找到了匹配项，则获取第一项（分组捕获的内容）。
            let scriptType = scriptTypeMatch && scriptTypeMatch[1]; // 如果找到了匹配项，则获取第一项（分组捕获的内容）。
            let author = authorMatch && authorMatch[1]; // 如果找到了匹配项，则获取第一项（分组捕获的内容）。
            let description = descriptionMatch && descriptionMatch[1]; // 如果找到了匹配项，则获取第一项（分组捕获的内容）。
            let filepatn = allFiles[i].substring(0, allFiles[i].length - 'README.md'.length);
            // console.log(filepatn);
            // console.log(allFiles[i]);
            // let ctime = fs.statSync(filepatn + scriptType + ".js").ctime.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
            let ctime = ctimeMatch && ctimeMatch[1];
            // console.log(ctime);
            if (ctime == null) {
                ctime = fs.statSync(filepatn + scriptType + ".js").ctime.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
                fs.writeFileSync(allFiles[i], content + "\r\n# 更新时间\r\n" + ctime);
                console.log(allFiles[i] + "未找到更新时间,自动识别为最后修改时间");
            }

            let branch = "master"; // master、main 分支名称

            console.log(`修改时间: ${ctime} | 名称: ${name} | Version: ${version} | 脚本类型: ${scriptType} | 作者: ${author} | 描述: ${description}`);

            let store = {
                "author": author,
                "markdown": "https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/" + branch + "/Scripts/" + name + "/README.md",
                "ctime": ctime,
                "source": "https://github.com/bcmdy/JsHook-Script-Repo/tree/" + branch + "/Scripts/" + name,
                "id": name,
                "title": name,
                "type": scriptType,
                "version": version,
                "url": "https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/" + branch + "/Scripts/" + name + "/" + scriptType + ".js",
                "desc": description,
                "down_count": 999
            };
            stores.push(store);
            let store_cdn = {
                "author": author,
                "markdown": "https://cdn.jsdelivr.net/gh/bcmdy/JsHook-Script-Repo@" + branch + "/Scripts/" + name + "/README.md",
                "ctime": ctime,
                "source": "https://github.com/bcmdy/JsHook-Script-Repo/tree/" + branch + "/Scripts/" + name,
                "id": name,
                "title": name,
                "type": scriptType,
                "version": version,
                "url": "https://cdn.jsdelivr.net/gh/bcmdy/JsHook-Script-Repo@" + branch + "/Scripts/" + name + "/" + scriptType + ".js",
                "desc": description,
                "down_count": 999
            };
            stores_cdn.push(store_cdn);
        }
    }
    // fs.writeFileSync('Store.json', JSON.stringify(stores));
    // fs.writeFileSync('Store-cdn.json', JSON.stringify(stores_cdn));
    fs.writeFileSync('Store.json', JSON.stringify(stores, null, "\t"));
    fs.writeFileSync('Store-cdn.json', JSON.stringify(stores_cdn, null, "\t"));
    //console.log(stores);
}

/**
 * 递归遍历，获取指定文件夹下面的所有文件路径
 */
function getAllFiles(filePath) {
    let allFilePaths = [];
    if (fs.existsSync(filePath)) {
        let files = fs.readdirSync(filePath);
        for (let i = 0; i < files.length; i++) {
            let file = files[i]; // 文件名称（不包含文件路径）
            let currentFilePath = filePath + '/' + file;
            let stats = fs.lstatSync(currentFilePath);
            if (stats.isDirectory()) {
                allFilePaths = allFilePaths.concat(getAllFiles(currentFilePath));
            } else {
                allFilePaths.push(currentFilePath);
            }
        }
    } else {
        console.warn(`指定的目录${filePath}不存在！`);
    }

    return allFilePaths;
}

// var url = 'Store.json';
// if (fs.existsSync(url)) {
//     console.log('start read file:', url);
//     let data = fs.readFileSync(url, 'utf-8');
//     data = data.replaceAll('https://raw.githubusercontent.com/bcmdy/JsHook-Script-Repo/main/', 'https://cdn.jsdelivr.net/gh/bcmdy/JsHook-Script-Repo/');
//     // data = data.replaceAll('/main/', '/');
//     // console.log(data);
//     fs.writeFileSync('Store-cdn.json', data);
//     console.log('Success!');

//     // let zz = data.match(/:\/\/raw.githubusercontent.com\/(.*?)\/(.*?)\/main\/(.*?)\/(.*?)\"/ig);
//     // zz.forEach(element => {
//     //     console.log(element);
//     //     let reg = /:\/\/raw.githubusercontent.com\/(.*?)\/(.*?)\/main\/(.*?)\/(.*?)\"/i;
//     //     let user = element.match(reg)[1];
//     //     let repo = element.match(reg)[2];
//     //     let name = element.match(reg)[3];
//     //     let file = element.match(reg)[4];
//     //     console.log(user, repo, name, file)
//     // });
// };
// console.log(store);