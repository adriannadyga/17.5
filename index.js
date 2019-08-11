//importowanie modułu
var os = require('os');

//import klasy EventEmitter z modułu event
var EventEmitter = require('events').EventEmitter;

//korzystanie z modułu
var OSinfo = require('./modules/OSinfo');

//utworzenie obiektu na podstawie klasy
var emitter = new EventEmitter();

//nasłuchiwania zdarzeń
emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterComand', function() {
    console.log('Finished command');
});

//odczytywanie wartości z kodowaniem UTF-8
process.stdin.setEncoding('utf-8');
//nasłuchiwanie na zdarzenie odczytu
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        // trim() służy do pozbywania się białych znaków z przodu i za tekstem
        var instruction = input.trim();
        //odpalenie zdarzenia beforeCommand
        emitter.emit('beforeCommand', instruction)
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
        //odpalenie zdarzenia afterCommand
        emitter.emit('afterCommand')

    }
})

