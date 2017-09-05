/*
    1. Simple map implementation
 */

const numbers = [1,2,3];
/*
    Results in a new array filled with the results of the iterator.
 */
const doubledNumbers = numbers.map(function (number) {
    return number * 2;
});
console.log(doubledNumbers); // [2,4,6]



/*
    2. Map over an array of objects.
    Return a new array with a specific property value, or "pluck"
 */

const books = [
    {title: "The Martian", author: "Andy Weir"},
    {title: "The Night Circus", author: "Erin Morgenstern"},
    {title: "1Q84", author: "Haruki Murakami"}
];

const titles = books.map((book) => {
    return book.title;
});

const authors = books.map((book) => {
    return book.author;
});

/*
    3. Implementation of a simple pluck function using map.
    Accepts an array and a string representing a property name.
    Returns an  array containing that property from each object.
 */

function pluck(array, property) {
    return array.map(function(obj){
        return obj[property];
    });
}