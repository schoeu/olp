/**
 * 获取IP地址
 *
 * @return {string} 返回本地IP
 * */

const os = require('os');

function getLocalRealIp() {
    let ifaces = os.networkInterfaces();
    let defultAddress = '127.0.0.1';
    let ip = defultAddress;

    for (let dev of Object.keys(ifaces)) {
        if (ifaces[dev]) {
            ifaces[dev].forEach(function (details) {
                if (ip === defultAddress && details.family === 'IPv4') {
                    ip = details.address;
                }
            });
        }
    }
    return ip;
}

function promisify(f) {
    return function () {
        let args = Array.prototype.slice.call(arguments);
        return new Promise(function (resolve, reject) {
            args.push(function (err, result) {
                if (err) reject(err);
                else resolve(result);
            });
            f.apply(null, args);
        });
    }
}

module.exports = {
    getIp: getLocalRealIp,
    promisify: promisify
};
