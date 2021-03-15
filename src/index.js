module.exports = function toReadable(number) {
    let unitsNumber = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let dozenNumber = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let arr = String(number).split("");
    if (number < 20) {
        return unitsNumber[number];
    } else if (number < 100 && number % 10 == 0) {
        return dozenNumber[arr[0]];
     } else if (number < 100) {
        return `${dozenNumber[arr[0]]} ${unitsNumber[arr[1]]}`;
     } else if (number % 100 == 0) {
        return `${unitsNumber[arr[0]]} hundred`;
     } else if (number > 99 && number % 100 < 20) {
        return `${unitsNumber[arr[0]]} hundred ${unitsNumber[number % 100]}`;
     } else if (number > 100 && number % 10 == 0) {
        return `${unitsNumber[arr[0]]} hundred ${dozenNumber[arr[1]]}`;
     } else {
        return `${unitsNumber[arr[0]]} hundred ${dozenNumber[arr[1]]} ${unitsNumber[arr[2]]}`; 
     }   
};
