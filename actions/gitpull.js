/**
 * @file gitpull.js
 * @description 获取最新
 * 
*/

const path = require('path');
const bluebird = require('bluebird');
const exec = bluebird.promisify(require('child_process').exec);

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
