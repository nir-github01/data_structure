// function sumOfArray(arr, sum){
// let n =arr.length;

// for(let i=0; i < n; i++){
//   sum += arr[i]
// }
// console.log(sum)
// } 

// let arr= [2, 3, 4]
// let sum = 0;
// sumOfArray(arr, sum)


// function compareArray(a, b){
//   let n = a.length;
//   let m = b.length;

//   if(n !== m ){
//     return "Invalid Array"
//   }
//   let aliceSum =0;
//   let bobSum = 0;
//   let alicePointArray = [];
//   let bobPointArray = [];
//   for(let i=0; i < n && i < m; i++){

//     if(a[i] > b[i]){

//        aliceSum +=1
//        alicePointArray.pop()
//        alicePointArray.push(aliceSum)
//     }else if(a[i] < b[i]){

//       bobSum +=1;
//       bobPointArray.pop();
//       bobPointArray.push(bobSum);
      
//     }else{
//       if(alicePointArray.length == 0){
//         alicePointArray.push(0)
//       }else if(bobPointArray.length == 0){
//         bobPointArray.push(0);
//       }
//     }

//   }
//   if(alicePointArray.length == 0){
//     alicePointArray.push(0)
//   }else if(bobPointArray.length == 0){
//     bobPointArray.push(0);
//   }
//   let point =alicePointArray.concat(bobPointArray);
//   console.log("points  >>>  " + point)
// }

// // 6 8 12
// // 7 9 15
// let a= [6, 8, 12];
// let b = [7, 9, 15];

// compareArray(a, b);



// 1000000001 1000000002 1000000003 1000000004 1000000005

// function sumOfArray(arr){
//   let n = arr.length;
//   let sum = 0;
//   for(let i=0; i<n; i++){
//     sum += arr[i]
//   }
//   console.log(sum);
// }
// let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
// sumOfArray(arr)

/** Sum of diagonal of matrix */
// 1 2 3
// 4 5 6
// 9 8 9  

// function diagonalSumOfMatrix(matrix){
//     let n = matrix.length;
//     let diagonalSum_1 = 0;
//     let diagonalSum_2 = 0;
//     for(let i=0; i < n; i++){
//       for(let j=0; j < n; j++){
//          if(i=== j)
//           diagonalSum_1 +=matrix[i][j];

//           if((i+j) === (n-1))
//             diagonalSum_2 += matrix[i][j]
//       }
//     }
//     console.log('diagonalSum_1  >>> ' + diagonalSum_1)
//     console.log('diagonalSum_2  >>> '+ diagonalSum_2)
// }
// let matrix = [[11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12]]
// // let matrix =[[ 1, 2, 3],[ 4, 5, 6],[ 9, 8, 9 ]]
// diagonalSumOfMatrix(matrix)


/** calculate the ratios of its elements that are positive, negative, and zero */

// function integerRatio(arr, n){
//  let positiveCount =0;
//  let negativeCount =0;
//  let zeroCount = 0;
//   for(let i =0; i< n; i++){
//     if(arr[i] > 0){
//       positiveCount += 1
//     }else if(arr[i] < 0){
//       negativeCount += 1;
//     }else{
//       zeroCount += 1
//     }
//   }
//   let p_ratio = positiveCount/n;
//   let n_ratio = negativeCount/n;
//   let z_ratio = zeroCount/n;
//   console.log(p_ratio.toFixed(n))
//   console.log(n_ratio.toPrecision(n))
//   console.log(z_ratio.toFixed(n))
// }
// let arr = [1, 1, 0, -1, -1]
// let n = arr.length;
// integerRatio(arr, n);


//Approach - 2
// function plusMinus(arr){
// let neg= arr.filter(elem => Math.sign(elem)=== -1).length/arr.length;
// let pos= arr.filter(elem => Math.sign(elem)=== 1).length/arr.length;
// let zer = arr.filter(elem => Math.sign(elem)=== 0).length/arr.length;

// console.log(pos+ '\n' + neg+ '\n' + zer)
// return console.log(pos+ '\n' + neg+ '\n' + zer);

// }
// let arr = [1, 1, 0, -1, -1]
// plusMinus(arr)