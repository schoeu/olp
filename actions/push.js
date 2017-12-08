/**
 * @file push.js
 * @description 推送代码到vps
 * 
*/

const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const timeout = 5000;
const commands = require('../config/commands');
const app = require('../config/app');

// 推送操作
module.exports = async function (cwd) {
    cwd = cwd || path.join(process.cwd(), app.gitpath);
    // 更新
    const { stdout, stderr } = await exec(commands.gitTag, {
        cwd: cwd
    });
    if (stdout) {
        let tags = stdout.trim().split('\n') || [];
        return tags
    }
    console.log('Get git tag error : ', stderr);
    return [];
}