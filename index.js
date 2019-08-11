//importowanie modułu
var os = require('os');

//korzystanie z modułu
var OSinfo = require('./modules/OSinfo');
//odczytywanie wartości z kodowaniem UTF-8
process.stdin.setEncoding('utf-8');
//nasłuchiwanie na zdarzenie odczytu
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        // trim() służy do pozbywania się białych znaków z przodu i za tekstem
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Qutting app!\n');
                process.exit();
                break;

            case '/sayhello': 
                process.stdout.write('hello\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
                
            default:
                process.stderr.write('Wrong instruction!\n');    
        };
    }
})

