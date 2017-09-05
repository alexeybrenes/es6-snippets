/*
    1. Simple forEach implementation
 */
const colors = [ "red", "green", "blue" ];
colors.forEach(function(color){
    //do something with each color
    console.log(color);
});

/*
    2. Passing a function to forEach as an argument
 */
const numbers = [1,2,3,4,5];
let sum = 0;
const adder = (number) => {
   sum += number;
}
/*
    Note that function "adder" is being passed as parameter without ();
    If it were passed as adder() then the iterator would take the returned result from the function.
    Meaning: "forEach" would be applied to the result of the function adder.
 */
numbers.forEach(adder);


