// Landroid/app/Activity;->onKeyDown(ILandroid/view/KeyEvent;)Z
let menu1 = false;
function createmenu() {
    if (menu1) {
        menu1.close();
        // modmenu.closeAll()

        // // log
        // console.log(menu1);
        // {
        //     let tmp;
        //     for (let index in menu1) {
        //         tmp += index + ":" + menu1[i] + "\n";
        //     }
        //     console.log(tmp);
        // }
        menu1 = false;
    } else {
        menu1 = modmenu.create('test mod', [], {
            onchange: function (result) { }
        });

        // // log
        // console.log(menu1);
        // {
        //     let tmp;
        //     for (let index in menu1) {
        //         tmp += index + ":" + menu1[i] + "\n";
        //     }
        // }
        // console.log(tmp);
    };
    return menu1;
};
Java.perform(function () {
    Java.use("android.app.Activity").onKeyDown.overload('int', 'android.view.KeyEvent').implementation = function (keyCode, KeyEvent) {
        (keyCode == 25) && createmenu();// 25 音量- ;24 音量+
        // console.log(keyCode, '||', KeyEvent);
        let ret = this.onKeyDown(keyCode, KeyEvent);
        return ret;
    }
});