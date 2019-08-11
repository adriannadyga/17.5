//import modułu do pliku
var os = require('os');
//import modułu colors
var colors = require('colors');
var timeConvert = require('./timeConvert');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System: '.grey, type);
    console.log('Release: '.red, release);
    console.log('CPU model: '.blue, cpu);
    console.log('Uptime: '.green, timeConvert.print());
    console.log('User name: '.yellow, userInfo.username);
    console.log('Home dir: ', userInfo.homedir);
}
//wszystko z modułu do wykorzystania w innych plikach musi być przypisane do obiektu exports
exports.print = getOSinfo;