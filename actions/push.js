/**
 * @file push.js
 * @description 推送代码到vps
 * 
*/

const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const transScript = 'transit.sh';

// 推送操作
module.exports = async function (...args) {
    let shell = path.join(__dirname, '../scripts', transScript);

    // 更新
    return await exec('sh ' + shell + ' ' + args.join(' '));
}
