const reverseString = function(text) {
    text = text.split("");
    text = text.reverse();
    text = text.join("");
    return text;
};

// Do not edit below this line
module.exports = reverseString;
