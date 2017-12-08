/**
 * @file push.js
 * @description 推送代码到vps
 * 
*/

const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// 推送操作
module.exports = async function (...arg) {
    cwd = cwd || path.join(process.cwd(), './script');

    // 更新
    return await exec('sh ./test.sh', arg, {
        cwd: cwd
    });
}