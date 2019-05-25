//ref# https://www.youtube.com/watch?v=S1qHWjP1hb0
//https://medium.com/@khanght/javascript-top-interview-questions-part-1-sorting-algorithm-d386fbb201c8
//https://www.geeksforgeeks.org/quick-sort/



function qsort(arr){
    if(arr.length ==0){
        return [];
    }

   const [pivot, ...rest] = arr;  // pivot = first element, rest = clone of array
   
   const left = [], right = [];

   rest.forEach(e1 => e1 < pivot ? left.push(e1) : right.push(e1));

   return qsort(left).concat(pivot).concat(qsort(right));
}

console.log(qsort([10,2,3,4,1,5]));
