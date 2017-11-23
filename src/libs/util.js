import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
    'https://www.mipengine.org/platform/mip' :
    'https://www.mipengine.org/platform/mip';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;