const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(nums) {
    return nums.filter(number => number % 2 === 0);
}

const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);
