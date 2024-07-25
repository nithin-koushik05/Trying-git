// arr = [1,2,3,4,5,6,7,8,9];
// let initial_val= 0;
// const final_val = arr.reduce((accumulator,current_val) => accumulator+current_val, initial_val );
// console.log(final_val)


arr = [1,2,3,4,5,6,7,8,9];
let initial_val= 0;
const final_val = arr.reduce((initial_val,current_val) => initial_val+current_val, initial_val );
console.log(final_val);

