/*
    1. Simple reduce implementation
    Second argument passed to reduce is the initialization of the first iterator argument (sum)
    Returns a condensed value from the list
 */

const numbers = [10, 20,30];

numbers.reduce((sum, number) => {
    return sum + number;
}, 0); //60

/*
    2. Transform an array of objects into a simple array
    Achievable with map as well
 */

const primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
];

primaryColors.reduce((previous, primaryColor) => {
    previous.push(primaryColor.color);
    return previous;
}, []);

/*
    3. Checks if an expression has balanced parens.
 */

function balancedParens(string) {
    return !string.split('').reduce((previous, char) => {
        if (previous < 0) {return previous;}
        if (char === '(') {return ++previous;}
        if (char === ')') {return --previous; }
        return previous;
    }, 0);
}

balancedParens('((((');