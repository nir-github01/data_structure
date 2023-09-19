// function stairCase(n){
//    let star = "";
//    let count =0;
//    let space = " ";

//    for(let i=0; i< n; i++){
//     count += 1;
//     for(let j =0; j < n; j++){
//       star += " * " 
      
//     }
//     star += '\n';
//    }
//    console.log(star)
  
// }
// let n = 6;
// stairCase(n)

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i < n; i++) {
//   // printing spaces
//   for (let j = 1; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// function testIntervbit(a, b){

//   if((a-b) > 0){
//     return a+b;
//   }else{
//     return a*b
//   }
// }

// function test(){
//   let ans = 0;
//   for(let i=0; i*i<= 20; i++){
//      ans += testIntervbit(i, i)
//   }
//   console.log(ans)
// }
// test();



/// Return sub array which bitwise operator is equal to another integers

// function subArray(A, B){
//   let n = A.length;

//   let subArrayCount =0;
//   for(let i = 0; i <n; i++){
//       let XorSum = 0;
//       for(let j = i; j < n; j++){
//           XorSum = XorSum ^ A[j];
//           if(XorSum === B){
//               subArrayCount +=1
//           }
//       }
//   }
//   console.log(subArrayCount)
//   // return subArrayCount
// }

// let A = [4, 2, 2, 6, 4];
// //let A = [5, 6, 7, 8, 9]
// let B = 6;
// //let B = 5;

// subArray(A, B)

// let a= 'INTERVIEWBIT';
// let x = a.lastIndexOf('E')
// console.log(x);

/** Minsum and max sum  */

function minMaxSum(arr){

  let n = arr.length;
  let minSum = 0;
  let maxSum = 0; 
   arr.sort((a, b)=> a-b)
  for(let i =0; i < n; i++){
    if(i !== n-1){
      minSum += arr[i];
    }
    if(i !== 0){
      maxSum += arr[i]; 
    }
  }
  return (minSum +" " + maxSum)
}
 let arr = [12, 34, 56, 78, 32, 45, 90];
console.log(minMaxSum(arr));

