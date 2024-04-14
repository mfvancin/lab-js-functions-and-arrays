// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2) {
        return num1;
        } else if (num2 > num1) {
            return num2;
        } else {
            return num1||num2;
        }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArray) {
    if (wordArray.length === 0) {
        return 0;
    }
    let longestWord = wordArray [0];
    for (let i = 1; i < wordArray.length; i++) {
        const word = wordArray [i];
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    if (numbersArray === 0) {
        return null;
    }
    for (let i = 0; i < numbersArray.length; i++) {
        const num = numbersArray [i];
        sum += num;
    }
    return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
