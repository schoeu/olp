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

module.exports = {
    getIp: getLocalRealIp
};
