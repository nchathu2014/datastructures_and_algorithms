console.log('Data Structures and Algorithms');

/**
 * sum of all numbers 1 to n
 */

//Solution - 1: O(n)
function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum += i;
    return sum;
}

const t1 = performance.now();
const total = sum(1000000000);
console.log('Sum ', total);
const t2 = performance.now();

const time_1 = (t2 - t1) / 1000
console.log('Solution 1: ', time_1)

// Solution - 2: O(1)

function sumAgain(n) {
    return n * (n + 1) / 2;
}

const t3 = performance.now();
const totalAgain = sumAgain(1000000000);
console.log('Sum Again ', totalAgain);
const t4 = performance.now();

const time_2 = (t4 - t3) / 1000
console.log('Solution 1: ', time_2)



/**
 * In solution 2, regardless of the size of the elements, always there are
 * 3 operations 1 multiplication, 1 addition and 1 division
 *
 */