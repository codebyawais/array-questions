
// assignment using loops
// 1. Write a js program to read and print elements of array.
// let array=[1,2,3,4,5,6,7];
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

// let array=[1,2,3,4,5,6,7];
// array.forEach((item)=>{
//      console.log(item);
// })
// let array=[1,2,3,4,5,6,7];
// let i=0;
// while(i<array.length){
//   console.log(array[i]);
//      i++;
// }

// let array=[1,2,3,4,5,6,7];
// let i=0;
// do {
//      console.log(array[i]);
//      i++;
// } 
// while (i<array.length);

// let arr=[1,2,3,4,5,6]
// arr.forEach((item)=>{
//      console.log(item);
     
// } )



// 2. Write a js program to print all negative elements in an array.

// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// for(let i=0;i<arr.length;i++){
//      if(arr[i]<0 ){
//      console.log(arr[i]);
// }
// }

// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// arr.map((item)=>{  
//      if(item < 0){
//      console.log(item);
// } 
// })

//positive number
// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// arr.map((item)=>{  
//      if(item > 0){
//      console.log(item);
// } 
// })

// let arr=[1,2,-3,-4,-5,-6,7,8,9,-10]
// arr.forEach((item)=>{
//      if(item < 0){
//      console.log(item);
// }
// })





// 3. Write a js program to find sum of all array elements.
// let sumArr=[1,2,3,4];
// let count=0;
// for(let i=0;i<sumArr.length;i++){
//     count=count+sumArr[i]
// }
// console.log(count);





// 4. Write a js program to find maximum and minimum element in an array.
// let arr=[1,2,23,44,5,5,66]
// let min,max;
// min=arr[0],max=arr[0]
// for(let i=0;i<arr.length;i++){
//      if(arr[i]<min){
//           min=arr[i]
//      }else{
//           max=arr[i]
//      }
// }
// console.log(min);
// console.log(max);











// 5. Write a js program to find second largest element in an array.

// let arr=[1,2,3,4,5,5,6,8,9,5,10]
// let scndmax=arr[0]
// for(let i=0;i<arr.length;i++){
//      if(arr[i]> scndmax)
//           scndmax=arr[i-1]
// }
// console.log(scndmax);

// let arr=[1,2,3,4,5,5,6,8,9]
// let scndmin=arr[0]
// for(let i=0;i<arr.length;i++){
//      if(arr[i] < scndmin)
//           scndmin=arr[i]
// }
// console.log(scndmin);

// let arr = [1, 2, 3, 4, 5, 5, 6, 8, 9];

// if (arr.length < 2) {
//     console.log("Array should have at least two elements to find the second minimum.");
// } else {
//     let min = Infinity;
//     let scndmin = Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             scndmin = min; // Update second minimum before changing the minimum
//             min = arr[i];   // Update minimum
//         } else if (arr[i] > min && arr[i] < scndmin) {
//             scndmin = arr[i]; // Update second minimum if it's greater than min but smaller than scndmin
//         }
//     }

//     console.log("Second minimum element in the array:", scndmin);
// }









// 6. Write a ts program to count total number of even and odd elements in an array.
// 7. Write a ts program to count total number of negative elements in an array.
// 8. Write a ts program to copy all elements from an array to another array.
// 9. Write a ts program to insert an element at a specific index in an array.
// 10. Write a ts program to delete an element from an array at specified position.
// 11. Write a ts program to count frequency of each element in an array.
// 12. Write a ts program to print all unique elements in the array.
// 13. Write a ts program to count total number of duplicate elements in an array.
// 14. Write a ts program to delete all duplicate elements from an array.
// 15. Write a ts program to merge two array to third array.
// 16. Write a ts program to find reverse of an array.
// 17. Write a ts program to put even and odd elements of array in two separate array.
// 18. Write a ts program to search an element in an array.
// 19. Write a ts program to sort array elements in ascending or descending order.
// 20. Write a ts program to sort even and odd elements of array separately.
// 21. Write a ts program to left rotate an array.
// 22. Write a ts program to right rotate an array.
