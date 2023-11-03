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

// function minMaxSum(arr){

//   let n = arr.length;
//   let minSum = 0;
//   let maxSum = 0; 
//    arr.sort((a, b)=> a-b)
//   for(let i =0; i < n; i++){
//     if(i !== n-1){
//       minSum += arr[i];
//     }
//     if(i !== 0){
//       maxSum += arr[i]; 
//     }
//   }
//   return (minSum +" " + maxSum)
// }
//  let arr = [12, 34, 56, 78, 32, 45, 90];
// console.log(minMaxSum(arr));


// function stairCase(n) {
//    let string = "";
//   for(let i = 1; i <= n ; i++){
//     for(let j = n-1; j >=i; j --){
//       string += " ";
//     }
//     for(let k = i; k <=2*i-1 ; k++){
//       string += "#"
//     }
//     string += "\n";
//   }
//   console.log(string);
// }

// stairCase(5)

// function birtdayCakeCount(arr){
//     let newArr = {};
//     let count = 1;
//     for(let val of arr ){
//         console.log(val)
//            if(val in newArr){
//             count += 1;
//             newArr[val] = count;
//            }else{
//             newArr[val] = 1;
//            }
//     }
//     console.log(newArr, arr, n)
//     let arr1=[];
   
//     Object.values(newArr).map(val => {
//        arr1.push(val);
//        console.log(arr1);
//     })
//     let m = arr1.length;
//     console.log(arr1[m-1]);
// }
// let arr = [3,2,1,3];
// birtdayCakeCount(arr);

// function maxArrVal(arr){
//     let max = Math.max(...arr);
//     let n = arr.length;
//     let count =0;
//     for(let i=0; i<n; i++){
//         if(arr[i] === max){
//             count +=1;
//         }
//     }
//     console.log(count);
// }

// function medianArr (arr){
   
//     let n = arr.length;
//     let mid = Math.floor(n/2);
//     arr.sort((a,b)=> a-b);
//     console.log(arr[mid]);
// }
// let arr = [5, 4, 1, 2, 3];
// medianArr(arr)

// function insertionSort(arr) {
//   let n = arr.length;
//   let count = 0;

//   for(let i = 0; i<n; i++){
//     for(let j =i; j<n; j++){
//         if(arr[i] > arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
             
//             count += 1;
//         }
//     }
//   }
//   console.log(count);
// }
// let arr = [2, 1, 3, 1, 2 ];
// insertionSort(arr);


// function insertionSortMoves(arr) {
  
//      let n = arr.length;
//      let i, key, j;
//      for(i=1; i<n; i++){
//         key = arr[i];
//         j= i-1;
//         while(j>=0 && arr[j] > key){
//             arr[j+1] = arr[j];
//             j = j - 1;
//         }
//         arr[j+1] = key;
//      }
// }
// let arr = [2, 3, 5, 1, 2, 3, 7, 8, 9, 4, 5];
// insertionSortMoves(arr);

// function merge(A, left, mid, right){
//     let swaps = 0;
//     let temp = new Array(100000).fill(0);
//     let i = left, j=mid, k=left;
//     while(i < mid && j <= right){
//         if(A[i] <= A[j]){
//             temp[k] = A[i];
//             k++; i++;
//         }else{
//             temp[k] = A[j];
//             k++; j++;
//             swaps += mid - i;
//         }
//     }

//     while(i < mid){
//         temp[k] =A[i];
//         k++; i++;
//     }
//     while(j <= right){
//         temp[k] = A[j];
//         k++; j++;
//     }
//     while(left <= right){
//         A[left] = temp[left];
//         left++;
//     }
//     return swaps;
// }

// function mergeInsertionSwap(A, left, right){
//     let swaps = 0;
//     if(left < right){
//         let mid = left + (right - left) / 2;
//         swaps += mergeInsertionSwap(A, left, mid);
//         swaps += merge(A, left, mid+1, right);
//     }
//    return  swaps;
// }

// let A = [ 2, 1, 3, 1, 2 ];
// let N = A.length;
// mergeInsertionSwap(A, 0, N - 1);

// function roundGrade(arr){
//    let n = arr.length;
//    for(let i=0; i < n; i++){
//     if(arr[i] > 40){
//         if((arr[i] + 1) % 5 === 0){
//           console.log('grade is +1', arr[i] + 1);
//         //   return arr[i];
//         }else if((arr[i] + 2) % 5 === 0){
//             console.log('grade is +2', arr[i] + 2)
//         }else{
//             console.log('grade is equal 5', arr[i])
//         }
//     }else{
//         console.log(arr[i])
//         // return arr[i]
//     }
//    }
// } 

// let arr = [56, 78, 90, 34, 29, 84];
// roundGrade(arr);

// function gradingStudents1(grades){ 
//     let finalGrades = grades.map((grade) => { 
//         return grade >= 38 && grade % 5 >= 3  ? grade - (grade % 5) + 5 : grade;         
//       }); 
//     console.log( finalGrades); 
//    }
//    let arr = [56, 78, 90, 34, 29, 84];
//    gradingStudents1(arr);

// function countApplesAndOranges(s, t, a, b, apples, oranges){
     
//     let n = apples.length;
//     let m = oranges.length;
//     let countApples = 0;
//     let countOranges = 0;
//     let sumOfApples=0;
//     let sumOfOranges= 0;
//     for(let i =0; i < n; i++){
        
//             sumOfApples = a + apples[i];
//             if( sumOfApples > s && sumOfApples <t){
//                 countApples += 1;
//             }

//     }
//     for(let i=0; i < m; i++){
//         sumOfOranges = t + oranges[i];
//         if(sumOfOranges > s && sumOfOranges < t){
//             countOranges += 1;
//         }
//     }

//     console.log(countApples);
//     console.log(countOranges)
// }
// let apples = [-2];
// let oranges = [-1]
// let s=2, t=3, a=1, b=5;
// countApplesAndOranges(s, t, a, b, apples, oranges);


// function jumpOfKangaroo(x1, v1, x2, v2){

//     if((x1-x2)%(v1-v2) ===0 && !(x2 > x1 && v2 > v1)){
//         console.log("YES");
//     }else{
//         console.log("NO");
//     }
  
// }
// let x1=0, v1=3, x2=4, v2=2;
// jumpOfKangaroo(x1, v1, x2, v2);

// function getTotalX (a, b){
//   let  n = a.length;
//   let m = b.length;
//   let maxArrayA = Math.max(...a);
//   let minArrayA = Math.min(...a);
//   let minArrayB = Math.min(...b);
//   let count =0;
   
//             for(let k = 0; k < m; k++){
//                 for(let j=minArrayA; j < minArrayB+1; j++){
//                     if(minArrayB % j ===0 &&  b[k] % j ===0){
//                        if(n ===1){
//                         for(let i=0; i < n; i++){
//                            if(j % a[i] ===0 && j % minArrayA ===0 && a[i] >= maxArrayA){
//                             console.log('j >>> ', j)
//                             count += 1
//                            }
//                         }
//                       }
//                     }
//                 }
//             }
  
//   console.log(count/m);
// }
// let a = [2];
// let b =[20, 30, 12];
// // let a = [3, 4]
// // let b = [24, 48]
// // let a = [2, 4]
// // let b = [16, 32, 96]
// getTotalX(a, b);

// function getTotalX(a, b){
//   let count = 0; 
//   let na = Math.max(...a);
//   let mi = Math.min(...b);
//   for(let i=na; i<=mi; i++){
//     if((a.every(e=> i % e === 0)) && b.every(e=>e%i===0)){
//       count++
//     }
//   }
//   console.log(count);
// }

// let a = [2, 4]
// let b = [16, 32, 96]
// getTotalX(a, b);

// function getTotalX(a, b){
//   let result = 0;
//   let index = 1;
//   let cloneA = a.splice(1, a.length);
//   while(a[0]*index<= b[0]){
//     if(cloneA.every(item => (a[0]*index) % item===0) 
//     && b.every(item=> item % (a[0]*index)===0)){
//   result++;}
//   index++;
//   }
// console.log(result);
// }


// function minMaxScore(arr){

//   let n = arr.length;
//   let minScore = new Array();
//   let maxScore = new Array();
//   let minCount=0;
//   let maxCount=0;
//   let initialVal = arr[0]
//   for(let i=0; i<n; i++){
//     if(arr[i] >= initialVal ){
//       let maxValue = Math.max(...maxScore);
//       if(arr[i] > maxValue){
//         maxScore.push(arr[i]);
//       }else{
//       maxScore.push(maxValue)
//       }
//     }else{
//       let max =maxScore.length;
//       let maxVal = Math.max(...maxScore);
//       for(let j=max-1; j> max-2 ; j--){
//         if(maxScore[max - 1] >= maxVal ){
//         maxScore.push(maxScore[max-1])
//         }
//       }
//     }
//      if(arr[i] <= initialVal){
//       let minValue = Math.min(...minScore);
//       if(arr[i] < minValue){
//         minScore.push(arr[i]);
//       }else{
//         minScore.push(minValue)
//       }
   
//     }else{
//       let  min =minScore.length;
//       let minVal = Math.min(...minScore)
//       for(let k=min-1; k >min-2  ; k--){
//         if(minScore[min - 1] <= minVal){
//         minScore.push(minScore[min-1 ])
//         }
//       }
//     }
//   }
//   for(let x=0; x < maxScore.length ; x++){
//     if(maxScore[x]<maxScore[x+1]){
//       maxCount += 1
//     }
//   }
//   for(let y=0; y<minScore.length; y++){
//     if(minScore[y] > minScore[y+1]){
//       minCount +=1;
//     }
//   }
//   console.log(" minScore >>> ", minScore, "MaxScore >>> ",  maxScore)
//   console.log("MinCount >>> ", minCount, "maxCount >>> ", maxCount)
// }

// let arr=[12, 24, 10, 24];
// // let arr = [10, 5, 20, 20, 4, 5, 2, 25, 1]
// // let arr = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
// minMaxScore(arr)


// function breakingRecords(scores){
//   let best=0;
//   let worst =0;
//   let bestScore =scores[0];
//   let worstScore = scores[0];
//   for(let i=0; i < scores.length; i++){
//     if(scores[i] > bestScore){
//       bestScore = scores[i]
//       best++;
//       // continue;
//     }
//     if(scores[i] < worstScore){
//       worstScore = scores[i];
//       worst++;
//       // continue;
//     }
//   }
//   console.log(worst, best);
// }
// // let arr=[12, 24, 10, 24];
// let arr = [10, 5, 20, 20, 4, 5, 2, 25, 1]
// // let arr = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
// breakingRecords(arr)


// function birthDay(s, d, m){
//   let n = s.length;
//   let count =0;
//   let sum =0;
//   for(let i=0; i< n - (m-1); i++){
//      let sumOfSegment  = s.slice(i, i+m).reduce((r, v, )=> r+v, 0);
//     //  console.log(sumOfSegment);
//      if(sumOfSegment === d){
//       count++;
//      }
//   }
//   console.log(count)
// }
// let s=[2, 2, 1, 3, 2];
// let d=4;
// let m=2;
// birthDay(s, d, m);


// function sumOfArray(arr){
// let sum =arr.reduce((r, v) => r+v);
// console.log(sum)
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// sumOfArray(arr);


// function divisibleSumPairs(n, k, ar){
//   let count =0;  
//   for(let i=0; i<n; i++){
//       for(let j =i; j<n; j++ ){
//         let sum = ar[i] + ar[j];
//         if(sum %  k === 0 && i !== j){
//           console.log('i >> ', i, 'ar[i] >> ', ar[i],  "j >> ", j, 'ar[j] >> ', ar[j]);
//           count++;
//         }
//       }
//     }
//     console.log(count);
// }
// let ar = [1, 3, 2, 6, 1, 2];
// let n=ar.length;
// let k=3;
// divisibleSumPairs(n, k, ar)

// function birdsFrequentType(arr){ 
//    let n = arr.length;
//    let count =0;
//    let countBirdType ={};
//    let maxSight =0;
//    let maxBirdType =0;
//    for(let i=0; i < n ;i++){
//      const typeBird = arr[i];
//      if(countBirdType[typeBird]){
//       countBirdType[typeBird] += 1;
//      }else{
//       countBirdType[typeBird] = 1;
//      }
//    }
//    for(let birdtype in countBirdType){
//     if(countBirdType[birdtype] > maxSight){
//       maxSight = countBirdType[birdtype];
//       maxBirdType = birdtype
//     }
//    }
//    console.log(maxBirdType);
//    console.log(countBirdType)
// }
// let arr = [1, 3, 3, 4, 3, 5];
// birdsFrequentType(arr);

// function dayOfTheProgrammer(year){
//   let erDays = 256;
//   let days =null;
//   let month = 9;
//   let sumOfMonth = (5*31 + 2*30)
//   let isLeapYear = (year % 4 === 0)
//   ? ((year % 100 === 0) ? ((year < 1918 || (year % 400 === 0)) ? true : false) : true)
//   : false;
//    if(year === 1918){
//     days = 26;
//   }else if(isLeapYear ){
//       days = parseInt(erDays -  (sumOfMonth + 29));
//   }else{
//     days = parseInt(erDays -  (sumOfMonth + 28));
//   }
//   console.log(`${days}/${month}/${year}`)
// }
// let year = 1800;
// dayOfTheProgrammer(year);

// function sockMerchant(n, ar) {
//   // Write your code here
//   let newarr ={};
//   let sum =0;
//   for(let i=0; i<n; i++){
//       if(newarr[ar[i]]){
//           newarr[ar[i]] += 1;
//       }else{
//         newarr[ar[i]] = 1;
//       }
//   }
//    Object.values(newarr).map(val=>  {
//     if(val > 1){
//       if(val % 2 === 0){
//         let add = val / 2
//         sum += add;
//       }else{
//         let add = Math.floor(val /2);
//         sum += add
//       }
//     }
//     } );
// console.log(Math.floor(sum))
// console.log('newArr >> ', newarr);

// }
// let ar = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]
// // let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// let n = ar.length;
// sockMerchant(n, ar)

// function getMoneySpent(keybords, drives, b){
//   let sum =0;
//   let arr =[];
//   for(let i=0; i<keybords.length; i++){
   
//     for(let j=0; j<drives.length; j++){
//       sum = keybords[i] + drives[j];
//       if(sum <=b){
      
//         arr.push(sum);
//       }
//     }
//   }
// let max = Math.max(...arr)
// console.log((arr.length > 0)? max : -1)
// }
// let keybords= [3, 1];
// let drives = [5, 2, 8];
// let b = 10;
// getMoneySpent(keybords, drives, b)


// function catAndMouse(x, y, z) {
//   let dist = z - x;
//   let dist1 = z - y;
//   let string=null;
//   if(Math.abs(dist) ==Math.abs( dist1)){
//       string ="Mouse C"
//   }else if(Math.abs(dist) < Math.abs(dist1)){
//       string ="Cat A"
//   }else{
//       string = "Cat B"
//   }
// console.log(string)
// }
// let x = 1;
// let y = 3;
// let z = 2;
// catAndMouse(x, y, z)

// function pickingNumbers(arr){
//     let n = arr.length;
//     let subArray = new Array();
//     let diff = null;
//     let dif = null;
//     arr.sort((a, b) => a-b);
//     for(let i=0; i< n; i++){
//              diff = arr[i] - arr[i+1];
//                 if(Math.abs(diff) <= 1 ){
//                    subArray.push(arr[i])
//                 }
//     }
//     console.log("subArray >>> ", subArray)
//     for(let j =0; j<subArray.length; j++){
//         dif = Math.abs(subArray[0] - subArray[j]);
//         console.log("dif >>> ", dif, subArray)
        
//         if(dif > 1){
//             console.log("subArray >>> >>> ", subArray)
//            subArray.pop(subArray[j]);
        
//         }
//     }
//     console.log(subArray, subArray.length, diff, );
// }
// // let arr = [4, 6, 5, 3, 3, 1]
// pickingNumbers(arr)


// function pickingNumbers(a){
//     let frequencies = new Array(100).fill(0)
  
//     for (let num of a) {
//     frequencies[num]++
//     }

//     let result = frequencies[0]
//     for(let i=0; i < frequencies.length - 1; i++){
    
//     let two = frequencies[i] + frequencies[i+1]
//     if(two > result) result = two
    
//     }
//     console.log(result)
// }
// let arr = [4, 6, 5, 3, 3, 1];
// pickingNumbers(arr)


// function hurdleRace(k, height){
 
//     let sub = 0;
//     for(let i=0; i<height.length; i++){
//         if(height[i] > k){
//             let diff = height[i] - k;
//             if(diff > sub){
//                 sub = diff
//             }
//         }
//     }
//     console.log(sub)

// }

// let arr = [1, 6, 3, 5, 2]
// let k = 4;
// hurdleRace(k, arr);

// function pageCount(n, p){
//     let numOfPageTurned = 0;

//     if(p === 1 || p === n){
//         console.log(numOfPageTurned)
//     }
//     if(n % 2 === 0 && p === n - 1){
//         return 1;
//     }
//     for(let i=1; i <= n/2; i++){
//         if(i === p || n-i === p){
//             numOfPageTurned = Math.floor(Math.min(i, n-1) / 2)
//             break;
//         }
//     }
//     console.log(numOfPageTurned)
// }


// function designerPdfViewer(h, word){
//     let wordLength = word.length;
//     let stringArr = word.split('');
//     let arr = [];
//     let alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     for(let i = 0; i < alphabetArr.length; i++){
//         for(let j = 0; j < h.length; j++){
//             if(stringArr.includes(alphabetArr[i]) && i === j){
//                  arr.push(h[j]);
//                  console.log(arr)
//             }
//         }
//     }
//     let max = Math.max(...arr);
//     console.log(max * wordLength);
// }

// let h= [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
// let word ="abc"
// designerPdfViewer(h, word);

// function utopianTree(n){
//     let height = 1;
//     let arr = [];
//     for(let i=0; i<= n; i++){
//         if(i % 2 === 0){
//             height *= 2;
//             arr.push(height);
//         }else{
//             height +=1;
//             arr.push(height);
//         }
//     }
//     let max = Math.max(...arr);
//     console.log(max);
// }

// let n = 3;
// utopianTree(n)

// function beautifulDays (i, j, k){
//     let count = 0;
//     if(i< j){
//         while(i <= j){
//             let numStr = i.toString().split('');
//             let revNum = numStr.reverse().join('');
//              let mod  = Math.abs(revNum - i) % k === 0;
//              if(mod){
//                 count += 1;
//              }
//             i++;       
//             }


//     }
//     console.log(count);
// }

// beautifulDays(20, 23, 6);


//Reverse Digit numbers 
// function reverseDigit(n){
//     let reversedNum =0;
//     while(n > 0){
//          reversedNum = reversedNum * 10 + n % 10;
//              n= Math.floor(n / 10);
//     }
//     console.log(reversedNum);
// }

// reverseDigit(1239087);

// function viralAdvertasing(n){
//     let peoples = 5;
   
//     let likesCount =0;
//     for(let i = 1; i <= n; i++){

//     let likes = Math.floor(peoples/2);
//       peoples = likes * 3;
//       likesCount += likes;
//     }
//     console.log(likesCount);
// }
// viralAdvertasing(5);

function permutationEquation(p){
  let arr =[];
  let hash = [];
  let n = p.length;
  for(let i=1; i<=n; i++){
       hash[p[i - 1]] = i;
  }

  for(let j=0; j < n; j++){
    arr.push(hash[hash[j + 1]]);
  }
  console.log(arr)
}
let arr = [4, 3, 5, 1, 2]
permutationEquation(arr)