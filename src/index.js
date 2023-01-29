module.exports = function toReadable (number) {
    const
    h = ['hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'],
    t = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    o = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    p = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seveteen', 'eighteen', 'nineteen'];
let str = number.toString(), out = '';

if(str.length == 1) return o[number-1];
else if(str.length == 2){
    if(str[0] == 1) out = p[parseInt(str[1])-1];
    else out = (t[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + o[parseInt(str[1])-1]):''));
}
else if(str.length == 3){
    out = (h[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + t[parseInt(str[1])-1]):'') + ((str[2]!='0')?(' ' + o[parseInt(str[2])-1]):''));
}

let arr = out.split('');
out = arr.join('');
return out;
}

