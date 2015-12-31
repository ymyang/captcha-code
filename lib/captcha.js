/**
 * Created by yang on 2015/12/31.
 */
var captchapng = require('captchapng');

const RANDOM_STR = '0123456789';

var captcha = module.exports = {};

captcha.generate = function() {
    var verifyCode = _randomStr();

    var p = new captchapng(80, 30, verifyCode);
    p.color(0, 0, 0, 0);
    p.color(80, 80, 80, 255);

    var img = p.getBase64();

    return {
        code: verifyCode,
        buffer: new Buffer(img, 'base64')
    };
};


function _randomStr(length) {
    length = length || 4;
    var buffer = [];
    for (var i = 0; i < length; i++) {
        buffer[i] = RANDOM_STR.charAt(Math.floor(Math.random() * RANDOM_STR.length));
    }
    return buffer.join('');
}