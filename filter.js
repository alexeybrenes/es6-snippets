/*
    1. Simple filter implementation.
    Iterator checks for truthy or falsy on the passed filter.
    Returns a new array with filtered property.
 */

const cars = [
    {manufacturer: 'Ford', model: 'Fiesta'},
    {manufacturer: 'Ford', model: 'GT40'},
    {manufacturer: 'Mitsubishi', model: 'Montero'},
    {manufacturer: 'Mitsubishi', model: 'Outlander'},
    {manufacturer: 'Toyota', model: 'Corolla'},
    {manufacturer: 'Toyota', model: 'Camry'}
];

const toyota = cars.filter((car) => {
    return car.manufacturer === 'Toyota';
});

/*
    2. A more complicated filter based on various parameters.
 */

const cars = [
    {manufacturer: 'Ford', model: 'Fiesta', quantity: 4, price: 100},
    {manufacturer: 'Ford', model: 'GT40', quantity: 1, price: 150},
    {manufacturer: 'Mitsubishi', model: 'Montero', quantity: 6, price: 125},
    {manufacturer: 'Mitsubishi', model: 'Outlander', quantity: 2, price: 300},
    {manufacturer: 'Toyota', model: 'Corolla', quantity: 10, price: 80},
    {manufacturer: 'Toyota', model: 'Camry', quantity: 0, price: 50}
];

const filter = cars.filter((car) => {
    return car.manufacturer === 'Toyota' && car.price < 130 && car.quantity > 3;
});

/*
    3. Implementation of a filter by association.
    Returns an array of comments where the post.id matches comments.postId
 */

const post = {id: 4, title: 'New post'};

const comments = [
    {postId: 3, comment: 'Comment 1 for post 3'},
    {postId: 4, comment: 'Comment 1 for post 4'},
    {postId: 3, comment: 'Comment 2 for post 3'}
];

const commentsForPost = (post, comments) => {
    return comments.filter((comment) => {
        return comment.postId === post.id;
    });
};

/*
    4. Implementation of a reverse filter.
    Returns an array with rejected values.
 */

const numbers = [10, 20, 30];
const lessThanFifteen = reject(numbers, function(number){
    return number > 15;
});
//lessThanFifteen = [ 10 ];

function reject(array, iteratorFunction) {
    return array.filter((param) => {
        return !iteratorFunction(param);
    });
}