const palindromes = function (word) {
    word = word.toLowerCase();
    let wordArray = word.split("").filter(c => c.match(/[a-z0-9]/));
    let reversedWordArray = wordArray.toReversed();

    console.log(wordArray);
    console.log(reversedWordArray);

    return wordArray.join('') == reversedWordArray.join('');
};

// Do not edit below this line
module.exports = palindromes;
