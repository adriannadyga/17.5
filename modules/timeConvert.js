var os = require('os');

function timeConversion() {
    var uptime = os.uptime();

    var hours = (uptime / 3600);
    var secondRest = (uptime % 3600);
    var minutes = (secondRest / 60);
    var seconds = (secondRest % 60);

    if (minutes > 0) {
        if (hours > 0 ) {
            return (hours.toFixed(0) + ' hours ' + minutes.toFixed(0) + ' minutes ' + seconds.toFixed(0) + ' seconds');
        } else {
            return (minutes.toFixed(0) + ' minutes ' + seconds.toFixed(0) + ' seconds');
        }
    } return (seconds.toFixed(0) + ' seconds');
}

exports.print = timeConversion;