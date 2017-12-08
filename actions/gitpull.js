/**
 * @file gitpull.js
 * @description 获取最新
 * 
*/

const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const timeout = 5000;
const commands = require('../config/commands');
const app = require('../config/app');

// 更新git仓库
module.exports = async (cwd) => {
    cwd = cwd || path.join(process.cwd(), app.gitpath);
    // 更新
    return await exec(commands.gitPull, {
        cwd: cwd
    });
}
