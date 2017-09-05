/*
    1. Simple find implementation.
    Returns the first found array/object;
 */

const users = [
    {name: 'Jill'},
    {name: 'Andrea'},
    {name: 'Alex'}
];

const alex = users.find((user) => {
    return user.name === 'Alex';
});

console.log(alex); // {"name":"Alex"}

