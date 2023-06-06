function addCommas(num) {
    // spliting number if decimal number
    let stringParts = String(num).split('.');
    // taking the integer digit number values above decimal point
    let stringNum = stringParts[0];
    let convertedString;
    let stringArr = [];

    // trims off the last 3 numbers from the end and adds it to the front of the stringArr
    // then changes the stringNum by removing the trimmed part
    // continue to do that until stringNum is no longer 4 characters or more in length
    while(stringNum.length > 3) {
        stringArr.unshift(stringNum.slice(-3))
        stringNum = stringNum.slice(0,-3)
    }

    // if there is something in the stringArr, then concatinate it to the stringNum else return stringNum
    convertedString = stringArr.length > 0 ? stringNum + ',' + stringArr.join(',') : stringNum;
    // if initial number was a floating number, then add the fractional digit numbers that are past the decimal point
    convertedString = stringParts[1] ? convertedString + '.' + stringParts[1] : convertedString;
    
    return convertedString
}


module.exports = addCommas;