/**
 * @file gettags.js
 * @description 获取上线版本
 * 
*/

const bluebird = require('bluebird');
const path = require('path');
const exec = bluebird.promisify(require('child_process').exec);

const commands = require('../config/commands');
const app = require('../config/app');
const pull = require('./gitpull');

// 获取git仓库tag列表
module.exports = async function (cwd) {
    cwd = cwd || path.join(__dirname,  app.gitpath);

    // 更新
    const { pullOout, pullErr } = await pull(cwd);
    const { stdout, stderr } = await exec(commands.gitTag, {
        cwd: cwd
    });
   
    console.log('Get tags: ', cwd, commands.gitTag, stdout, stderr); 
    if (stdout) {
        let tags = stdout.trim().split('\n') || [];
        return tags
    }
    console.log('Get git tag error : ', stderr);
    return [];
}
