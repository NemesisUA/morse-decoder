const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let decoded = '';
    for (let i = 0; i < expr.length ; i += 10) {
        let symbol = '';
        symbol = expr.substr(i, i + 10);
        
        // symbol to morse notation
        let morseNotation = '';
        for (j = 0; j < 10; j +=2) {
            if (symbol[j] === '*')  morseNotation = ' ';
            if (symbol[j] === '1') {
                if (symbol[j + 1] === '0' ) {morseNotation = morseNotation + '.';
                } else morseNotation = morseNotation + '-' ;   
            }
            
        }  

        // decode symbol in morse notation
        if (morseNotation === ' ') {
            decoded = decoded + ' ';
        } else {
            decoded = decoded + MORSE_TABLE[morseNotation];
        }    


    } return decoded;
}

module.exports = {
    decode
}