/**
 * Created by yang on 2015/12/30.
 */
var fs = require('fs');
var captcha = require('../index.js');

var t = captcha.generate();

console.log(t.code);

fs.writeFileSync('/root/captcha.png', t.buffer);

console.log('/root/captcha.png');