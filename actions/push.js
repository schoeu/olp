/**
 * @file push.js
 * @description 推送代码到vps
 * 
*/

const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

//const exec = require('child_process').exec;

// 推送操作
module.exports = async function (...args) {
    let shell = path.join(__dirname, '../scripts', './test.sh');

    // 更新
    return await exec('sh ' + shell + ' ' + args.join(' '));
}

// 推送操作
// module.exports = sync function (...args) {
//     let shell = path.join(__dirname, '../scripts', './test.sh');

//     // 更新
//     exec('sh ' + shell, args, (error, stdout, stderr) => {
//         console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//     });
// }