/**
 * @file gettags.js
 * @description 获取上线版本
 * 
*/

const util = require('util');
const path = require('path');
const exec = util.promisify(require('child_process').exec);

const commands = require('../config/commands');
const app = require('../config/app');
const pull = require('./gitpull');

// 获取git仓库tag列表
module.exports = async function (cwd) {
    cwd = cwd || path.join(process.cwd(), app.gitpath);
    // 更新
    const { pullOout, pullErr } = await pull(cwd);
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
