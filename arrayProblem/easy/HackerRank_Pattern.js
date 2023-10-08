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

function getTotalX (a, b){
  let  n = a.length;
  let m = b.length;
  let maxArrayA = Math.max(...a);
  let minArrayA = Math.min(...a);
  let minArrayB = Math.min(...b);
  let count =0;
   
            for(let k = 0; k < m; k++){
                for(let j=minArrayA; j < minArrayB+1; j++){
                    if(minArrayB % j ===0 &&  b[k] % j ===0){
                       if(n ===1){
                        for(let i=0; i < n; i++){
                           if(j % a[i] ===0 && j % minArrayA ===0 && a[i] >= maxArrayA){
                            console.log('j >>> ', j)
                            count += 1
                           }
                        }
                      }
                    }
                }
            }
  
  console.log(count/m);
}
let a = [2];
let b =[20, 30, 12];
// let a = [3, 4]
// let b = [24, 48]
// let a = [2, 4]
// let b = [16, 32, 96]
getTotalX(a, b);