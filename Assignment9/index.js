import {add,subtract} from './Math/math.js'
import _ from 'lodash';
const sum=add(1,2) ;
const sub=subtract(3,2) ;
console.log(`sum of 1 and 2 is : ${sum}`) ;
console.log(`subtraction of 3 and 2 is : ${sub}`) ;

// 2.Install the lodash package using npm install lodash. and use any of its function
// installed the lodash package and using it

const array = [0, 1, 2];
// values to be concatenated
const values = [3, 4, 5];
// compact the array
const result = _.concat(array, values);
// print result on console
console.log(`result of concatenation of these two is :${result}`);

