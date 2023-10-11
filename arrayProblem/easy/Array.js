/** Q. Find the largest three element in an array */
//Approach 1

// function  largest3Elem(arr, n) {
//     if(n < 3){
//       return "Invalid array"
//     }

//     for(let i=0; i<=n; i++){
//        for(let j=i+1; j<n; j++){
//           let temp = null;
//           if(arr[i] > arr[j]){
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//           }
//        }
//     }
//     console.log(arr)
//     for(let k=n-1; k>=n-3; k--){
//       let arr1=[];
//       arr1.push(arr[k])
//       console.log("Three largest elements are >>  " +arr1)
//     }
// }

// let arr = [12, 34, 12, 35, 36, 23, 17, 78, 43, 56];
// let n = arr.length;

//Approach -2

// largest3Elem(arr, n);

// function largest3Elem (arr, n) {
//   debugger
//   if(n < 3 ){
//     return "Invalid array"
//   }
// let first , second, third;
// first=second=third =Number.MIN_VALUE
// for(let i=0; i<n; i++){
//      if(arr[i] > first){
//       third=second;
//       second=first;
//       first=arr[i]
//      }else if(arr[i] > second && arr[i] !== first){
//           third = second ;
//           second = arr[i]
//      }else{
//       third = arr[i]
//      }
// }

// console.log("Three largest elements are  >>> " , first, second, third)
// }
// let arr = [12, 34, 12, 35, 36, 23, 17, 78, 43, 56];
// let n = arr.length
// largest3Elem(arr, n)

// function find3largestElem(arr, n){
//   debugger
//    arr= [12, 34, 12, 35, 36, 23, 17, 78, 78, 43, 56];
//    n= arr.length;
//   arr.sort((a, b)=> a-b);
//   let check=0, count = 1;

//   for(let i=0; i<= n-1; i++) {
//     console.log("count >>" + count )
//     document.write("count " + count )
//     if(count < 4){
//       if(check !== arr[n-i-1] ){
//         document.write(arr[n-i-1] + " ")
//         console.log(arr[n-i-1] + "  ")
//         check = arr[n-i-1]
//         count++;
//       }
//     }else{
//       break
//     }
//   }
// }

// let arr= [12, 34, 12, 35, 36, 23, 17, 78, 43, 56];
// let n= arr.length;
// find3largestElem(arr, n)


/** Find Second largest element in an array */


// function find2ndLargest(arr, n){
//    if(n < 3){
//     return "Invalid Array";
//    }
//     let first, second ;
//     first = second = Number.MIN_VALUE;
//     for(let i=0; i< n; i++){
//       if(arr[i] > first){
//         second = first;
//         first = arr[i];
//       }else if(arr[i] > second && arr[i] !== first){
//         second = arr[i];
//       }
//     }
//     console.log("Second >>", second)
// }

// let arr = [12, 34, 12, 35, 36, 23, 17, 78, 43, 56];
// let n= arr.length;
// find2ndLargest(arr, n)


//Approach - 2

// function secondLargestElem(arr, n){
//        if(n<2){
//         return "Invalid array"
//        }
//        arr.sort((a, b)=> a-b);
//        let count=1, check=0
//        for(let i=0; i<n; i++){
//           if(count < 2){
//             if(check !== arr[n-i-2]){
//               check = arr[n-i-2]
//               console.log(check)
//               count++
//             }
//           }else
//           break;
//        }
// }
// let arr= [12, 34, 12, 35, 36, 23, 17, 78, 43, 56];
// let n = arr.length;
// secondLargestElem(arr, n)


//Approach - 3

// function secondLargestNum(arr, n) {
//     debugger
//       arr = [12, 34, 12, 35, 36, 23, 17, 78, 43, 56];
//       n= arr.length;
//   if(n < 2) {
//     return "Invalid array";
//   }
//   let count ={}
//   for(let i=0; i<n; i++){
//     if(arr[i] in count){
//       count[arr[i]] += 1
//     }else{
//       count[arr[i]] = 1;
//     }

//     if(count.length === 1){
//       console.log("No second largest element exist");
//       return 
//     }
//   }

//   let keys =Object.keys(count)
//   document.write(keys[keys.length - 2])
//   console.log(keys[keys.length - 2])
// }

// let arr = [12, 34, 12, 35, 36, 23, 17, 78, 43, 56];
// let n= arr.length;
// secondLargestNum(arr, n)


//Approach - 3

// function queueMethod(){
//   debugger
//       class PriorityQueue{
//         debugger
//         constructor() {
//           this.items = [];
//         }
// debugger
//         enqueue(element, priority){
//           let qElement = {element, priority};
//           let contain = false;
//           for(let i=0; i < this.items.length; i++){
//             if(this.items[i].priority > qElement.priority){
//               this.items.splice(i, 0, qElement);
//               contain = true;
//               break
//             }
//           }
//           if(!contain){
//             this.items.push(qElement);
//           }
//         }

//         dequeue() {
//           if(this.isEmpty()){
//             return "Underflow";
//           }
//           return this.items.shift();
//         }
//         front(){
//           if(this.isEmpty()){
//             return "No element in queue"
//           }
//           return this.items[0];
//         }
//         rear() {
//           if(this.isempty()) {
//             return "No elements in queue";
//           }
//           return this.items[this.items.length - 1]
//         }
//         isEmpty() {
//           return this.items.length === 0;
//         }
//         size() {
//           return this.items.length;
//         }

//         printQueue() {
//           let str = "";
//           for(let i = 0; i< this.items.length; i++){
//             str += this.items[i].element + " ";
//             return str;
//           }
//         }
//       }
//       let arr = [12, 35, 1, 19, 10, 34, 1];
//       let pq = new PriorityQueue();
//       for(let i=0; i< arr.length; i++){
//         pq.enqueue(arr[i], -arr[i]);
//       }

//       pq.dequeue();

// console.log("The second largest element in vector is >>> " , pq.front().element)
// }


/*** Count duplicates numbers  */

// function duplicatNum(arr, n) {

//   if(n<2){
//     return "Invalid array"
//   }
//   let repeateNum = {};
//   let i;
//   for( i=0; i<n; i++){
//     if(arr[i] in repeateNum){
//       repeateNum[arr[i]] += 1;
//     }else{
//       repeateNum[arr[i]] = 1;
//     }
//   }
//   for(const [key, value] of Object.entries(repeateNum)){
//       if(value === 1){
//         console.log(key)
//       }
//   }

// }

// //driver Code
//  let arr = [12, 13, 1, 12, 13, 25, 32, 34, 34, 64, 34, 34, 66, 76, 12, 14, 15];
//  let n = arr.length;
// duplicatNum(arr, n)

/**Move all zero at end of arrays */

// function moveZeroEnd(arr, n){
//   if(n < 2){
//     return "Invalid array";
//   }
//   arr.sort((a, b)=> a-b)
//   arr.reverse()
//   console.log(arr)

// }
// let arr = [0, 12, 23, 0, 0, 0, 4, 0, 1, 0, 6, 0, 9, 0];
// let n = arr.length
// moveZeroEnd(arr, n)


//Approach - 2

// function addZeroEnd(arr, n) {

//   if(n < 2) {
//     return "Invalid array";
//   }

//   for(let i=0; i<n; i++){
//     for(let j=i+1; j<n; j++){
//       if(arr[i] === 0){
//         let temp = arr[i]
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }else break
//     }
//   }
//   console.log(arr);
// }
// let arr = [0, 12, 23, 0, 0, 0, 4, 0, 1, 0, 6, 0, 9, 0];
// let n= arr.length;
// addZeroEnd(arr, n);

//Approach - 3

// function addZeroEnd(arr, n) {
//     if(n < 2){ return "Invalid array";}
//     let zeroArr = []
//     let numArr = []
//     for(let i=0; i< n; i++){
//       if(arr[i] ===0){
       
//         zeroArr.push(arr[i]);
//       }else{
//        numArr.push(arr[i])
//       }

//     }
//     let conCatArr = numArr.concat(zeroArr)
//     let zeroAr = zeroArr.concat(numArr)
//     console.log("zeroArr >>>", zeroAr)
//     console.log(conCatArr)
// }
// let arr = [0, 12, 23, 0, 0, 0, 4, 0, 1, 0, 6, 0, 9, 0];
// let n = arr.length;
// addZeroEnd(arr, n)

// function addZeroEnd(arr, n) {
//   if(n < 2){ return "Invalid array";}
//   let count = 0;
//   for(let i=0; i< n; i++){
//     if(arr[i] ===0){
     
//       // zeroArr.push(arr[i]);
//       count ++
//       arr.splice(i, 1);
//       i--
//     }
//   }
//   let j=0;
//   while(j < count){
//     arr.push(0)
//     j++;
//   }
//   console.log(arr)

// }
// let arr = [0, 12, 23, 0, 0, 0, 4, 0, 1, 0, 6, 0, 9, 0];
// let n = arr.length;
// addZeroEnd(arr, n)

/** Rearrange alternate small and greater numbers  in array */

// function arrangeGreaterNum(arr, n){
//     if(n < 2){
//       return "Invalid Array"
//     }
  
//     for(let i=0; i<n; i++){
//       if(i % 2 === 0){
//         if( arr[i] < arr[i-1]){
//           let temp = arr[i];
//           arr[i] = arr[i-1];
//           arr[i-1] = temp
//         }
//       }else{
//         if(arr[i] > arr[i-1]){
//         let temp = arr[i]
//         arr[i] = arr[i-1]
//         arr[i-1] = temp
//         }
//       }
//     }
//     console.log(arr)
// }
// // let arr= [1, 3, 2, 2, 5];
// let arr = [12, 4,5, 23, 4, 65, 90, 66, 78, 30, 76, 50];
// let n = arr.length;
// arrangeGreaterNum(arr, n);

//Approach - 2

// function arrangeGreaterNum(arr, n){
//   if(n < 2){
//     return "Invalid Array";
//   }
//   arr.sort((a, b)=> a-b)
//   let newarr = new Array();
//   let p=0, q=n-1;
//    for(let i=0; i<n; i++){
//     if((i + 1 )% 2 === 0){
//      newarr[i] = arr[q--]
//     }else{
//       newarr[i] = arr[p++]
//     }
//    }
//    console.log(arr)
//    console.log(newarr);
// }

// let arr= [12, 5, 23, 4, 65, 90, 66, 78, 30, 76, 50];
// let n= arr.length;
// arrangeGreaterNum(arr, n)

/** Rearrange an array in maximum minimum form using Two Pointer Technique */

// function arrangeGreaterNum(arr, n){
//   if(n < 2){
//     return "Invalid Array";
//   }
//   arr.sort((a, b)=> a-b)
//   let newarr = new Array();
//   let p=0, q=n-1;
//   let i=0;
//    while( i<n){
//     if(i % 2 === 0){
//      newarr[i] = arr[q--]
//     }else{
//       newarr[i] = arr[p++]
//     }
//     i++;
//    }
//    console.log(newarr);
// }

// let arr= [12, 5, 23, 4, 65, 90, 66, 78, 30, 76, 50];
// let n= arr.length;
// arrangeGreaterNum(arr, n)

//Approach - 2

// function arrangeGreaterNum(arr, n){
//   if(n < 2){
//     return "Invalid Array";
//   }
//   arr.sort((a, b)=> a-b)
//   let newarr = new Array();
//   let p=0, q=n-1;
//   let i=0;
//    for(i; i<n; i++){
//     if(i % 2 === 0){
//      newarr[i] = arr[q--]
//     }else{
//       newarr[i] = arr[p++]
//     }
//    }
//    console.log(newarr);
// }

// let arr= [12, 5, 23, 4, 65, 90, 66, 78, 30, 76, 50];
// let n= arr.length;
// arrangeGreaterNum(arr, n)

//Approach - 2

// function maxMinArrange(arr, n){
//   if(n<2){
//     return "Invalid Array"
//   }
//   let newArr = new Array(n);
//   let small = 0, large = n - 1;
//   arr.sort((a, b) => a-b)
//   let flag = true;
//   for(let i=0; i< n; i++){
//     if(flag)
//       newArr[i] = arr[large--]
//     else
//       newArr[i] = arr[small++]
     
//     flag = !flag
//   }
//   for(let i=0; i<n; i++){
//     arr[i] = newArr[i]
//   }

//   console.log(arr)
// }
// let arr= [12, 5, 23, 4, 65, 90, 66, 78, 30, 76, 50];
// let n = arr.length;
// maxMinArrange(arr, n)

//Approach - 3

// let a = [11, 12, 13, 14, 15, 16]
// let n = a.length;
// let last = new Array(n).fill(0);

// let min_val = 0;
// let max_val = n - 1;

// let count = 0;
// for(let i = 0; i < n; i++) {
//   if(count % 2 === 0) {
//     last[i] = a[max_val];
//     max_val--;
//   }else{
//     last[i] = a[min_val];
//     min_val++;
//   }
//   count++;
// }

// console.log(last.join(' '));

/** Reversal algorithm for Array rotation */

// function reversalNum(arr, n, d){
//     if(n < 2) {
//       return "Invalid array";
//     }
//     let newArr = new Array();

//     for(let i=0; i < n; i++){
//        newArr.unshift(arr[i])  
//     }
//     console.log(newArr)
// }
// let arr = [23, 34, 56, 7,8, 98, 6, 12, 32, 10]
// let n = arr.length;
// let d = 3;
// reversalNum(arr, n)

//Approach - 2
// function swapNum(arr, start, end){
//   debugger
//   while(start < end){
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] =temp;
//      start++;
//      end--;
//   }
 
// }

// function leftRotate(arr, d, n){
//   debugger
//     arr = [23, 34, 56, 7,8, 98, 6, 12, 32, 10];
//     n = arr.length
//     d = 3;
//   if(d === 0) return ;
//   d = d % n;
//   console.log(d)
//   swapNum(arr, 0, d - 1);
//   swapNum(arr, d, n - 1)
//   swapNum(arr, 0, n - 1)

//   for(let i=0; i<n; i++){
//     console.log(arr);
//     document.write(arr)
//    }
// }
// function printArr(arr, n){
//    for(let i=0; i<n; i++){
//     console.log(arr);
//     document.write(arr)
//    }
  
// }
// let arr = [23, 34, 56, 7,8, 98, 6, 12, 32, 10];
// let n = arr.length
// let d = 3;
// leftRotate(arr, d, n);
// printArr(arr, n)


//Approach - 3

// function rotateArr(arr, n , k){
//   k =k % n;

//   arr.reverse();

//   for(let i = 0; i < k /2; i++){
//     const temp = arr[i];
//     arr[i] = arr[k - i - 1];
//     arr[k - i - 1] = temp;
//   }

//   for(let i= k; i < (n + k) / 2; i++){
//     const temp = arr[i];
//     arr[i] = arr[ n + k - i - 1];
//     arr[n + k - i - 1] = temp;
//   }

//   console.log(arr)
// }

// let arr =  [23, 34, 56, 7,8, 98, 6, 12, 32, 10];
// let n = arr.length;
// let k = 4;

// rotateArr(arr, n, k)



//Approach - 4

// function leftRotate(arr, n, k){
//   let mod = k % n; 

//   for(let i = 0; i < n; i++){
//     console.log(arr[(mod + i) % n] + " ");
//   }
// }

// let arr = [1, 3, 5, 7, 9];
// let n = arr.length;
// let k = 2;
// leftRotate(arr, n, k);


//Approach - 5

// function leftRotate(arr, d, n){
//   for(let i = 0; i < d; i++){
//     leftRotatebyOne(arr, n)
//   }
// }
// function leftRotatebyOne(arr, n){
//   let i, temp = arr[0];
//   for(i = 0; i < n - 1; i++){
//   arr[i] = arr[i + 1];
//   }
// arr[n - 1] = temp;
// }

// function printArr(arr, n){
//   for(let i=0; i < n; i++){
//     console.log(arr)
//   }
// }

// let arr = [1, 3, 5, 7, 9];
// let n = arr.length;
// let k = 2;

// leftRotate(arr, k, n);
// printArr(arr, n)



//Approach - 6

// function leftRotate(arr, k){
//   k %= arr.length;

//   arr = reverseArray(arr, 0, k - 1);
//   arr = reverseArray(arr, k, arr.length - 1);
//   arr = reverseArray(arr, 0, arr.length - 1);

//   console.log(arr.join(" "));
// }

// function reverseArray(arr, start, end){
//   while(start < end){
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
//   return arr;
// }

// let arr = [1, 3, 5, 7, 9];
// let n = arr.length;
// let k = 2;
// leftRotate(arr, n, k)


/**Sort an array in wave form */

// function swap(arr, p, q){
//   let temp = arr[p];
//   arr[p] = arr[q];
//   arr[q] = temp;
// }
// function waveSort(arr, n){

//   if(n < 2){
//     return "Invalid Array"
//   }

//   arr.sort((a, b) => a-b )

//   for(let i= 0; i < n - 1; i+=2){
//      swap(arr, i, i+1)
//   }
//   console.log(arr.reverse())
// }
// let arr = [12, 45, 67, 89, 90, 21, 32, 15, 43];
// let n = arr.length;
// waveSort(arr, n)

//Approach - 2

// function swapArray(arr, p, q){
//      let temp = arr[p];
//      arr[p] = arr[q];
//      arr[q] = temp;
// }
// function waveFormSort(arr, n){
//   if(n < 2){
//     return "Invalid array"
//   }
//   // arr.sort((a, b)=> a-b)
//   // arr.reverse()
//   for(let i=0; i < n; i +=2){
//     if(i > 0 && arr[i-1] > arr[i])
//         swapArray(arr, i-1, i)

//     if(i < n-1 && arr[i+1]>arr[i])
//       swapArray(arr, i, i+1)
//   }
//   console.log(arr);
// }
// let arr = [12, 45, 67, 89, 90, 21, 32, 15, 43];
// let n = arr.length;
// waveFormSort(arr, n)


/** Sort an array which contain 1 to n values */

// function swapArray(arr, a, b){
//   let temp = a;
//    a=b;
//    b=temp;
// }

// function sortArray(arr, n){
//    if(n < 2){
//     return "Invalid Array"
//    }

//    for(let i=0; i < n; i++){
//     for(let j=i+1; j < n; j++){
//       if(arr[i] > arr[j]){
//        let temp = arr[i];
//        arr[i] = arr[j];
//        arr[j] = temp
//       }
//     }
//    }
//    console.log(arr)
// }
// let arr = [12, 45, 67, 89, 90, 21, 32, 15, 43];
// let n = arr.length;
// sortArray(arr, n)


/** Count the number of possible triangles */


// function countTriangle(arr, n) {
//   if (n < 3) {
//     return "Invalid Array";
//   }
//   let sum_i = 0,
//     sum_j = 0,
//     sum_k = 0,
//     count = 0;
//     let arrs =[];
//     let set = new Set();
//   let newArr = {};
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         sum_i = arr[i] + arr[j] > arr[k];
//         sum_j = arr[i] + arr[k] > arr[j];
//         sum_k = arr[j] + arr[k] > arr[i];

//         if (sum_i && sum_j && sum_k) {
//           count += 1;
//           arrs.push(arr[i]); arrs.push(arr[j]);arrs.push(arr[k]);
//           // set.add(arr[i]);set.add(arr[j]);set.add(arr[k]);
//           newArr[arr[i]] = count;
//           newArr[arr[j]] = count;
//           newArr[arr[k]] = count;
        
//         }
//       }
//     }
//   }
//   const splittedArray = new Array();
//   while (arrs.length > 0) {
//     splittedArray.push(arrs.splice(0, 3));  
//     splittedArray.map((a) => set.add(a))
//   }
//   console.log( set)
//   console.log("Set of array to form of triangle  >>> "  + splittedArray)
//   console.log("Counting of numbers to form triangle >>> " + JSON.stringify( newArr));
//   console.log("Total number of triangles are >>>  " + count)
// }

// let arr = [10, 21, 22, 100, 101, 200, 300];
// let n = arr.length;
// countTriangle(arr, n);

//Approach - 2

// function countTriangle(arr, n){

//   if(n < 3){
//     return "Invalid array";
//   }
//   let count = 0;
//   arr.sort((a, b) => a-b)
//   for(let i=0; i < n; i++){
//     for(let j=i+1; j < n; j++){
//       let sum = arr[i] + arr[j]
//         if(sum > arr[j+1]){
//           count += 1
//         }
//     }
//   }
//   console.log("Number of possible triangle >>> ",count)

// }
// let arr =  [10, 21, 22, 100, 101, 200, 300];
// let n = arr.length;
// countTriangle(arr, n);


//Approach - 3

// function countTriangle(arr, n){
// if(n < 3){
//   return "Invalid Array"
// }
// arr.sort((a, b) => a-b)
// let count = 0;
// for(let i=n-1; i > 0; i--){
//   let l = 0, r= i-1; 
//   while(l < r){
//    if(arr[l] + arr[r] > arr[i]){
//     count += r-l;
//     r--;
//    }else{
//     l++
//    }
//   }
// }
// console.log("Number of possible triagle >>>  " ,count)
// }

// let arr = [10, 21, 22, 100, 101, 200, 300];
// let n = arr.length;
// countTriangle(arr, n)


/** Print all Distinct ( Unique ) Elements in given Array */

// function uniqueElement(arr, n){
//   if(n < 2){
//     return "Invalid array"
//   }
//   let i=0;
//   let newArr= {};
//   let count = 0;
//   for(i; i < n ; i++){
//      if(arr[i] in newArr){
//       count += 1
//       newArr[arr[i]] = count;
//      }else{
//       count = 1
//       newArr[arr[i]] = count;
//      }
//   }
//   console.log(newArr)
// }
// let arr = [12, 13, 14, 17, 12, 13, 14, 15, 156, 16, 1, 16, 3, 2, 3];
// let n = arr.length;
// uniqueElement(arr, n)


//Approach - 2

// function uniqueElement(arr, n){

//   if(n < 2){
//     return "Invalid Array"
//   }
//   let newArr = [];
//   for(let i=0; i < n; i++){
//     let j;
//      for( j=0; j < i; j++)
//       if(arr[i] == arr[j])
//         break;
        
//         if(i == j)
//          newArr.push(arr[i])
   
//   }
//   console.log(newArr)
// }

// let arr = [12, 13, 14, 17, 12, 13, 14, 15, 156, 16, 1, 16, 3, 2, 3];
// let n = arr.length;
// uniqueElement(arr, n);

//Approch - 3;

// function uniqueElement(arr, n){
//    if(n < 2){
//     return "Invalid Array"
//    }
//    let set = new Set(arr);
//    console.log(set)
//   //  set.forEach((value) => {
//   //   console.log(value)
//   //  })
// }

// let arr = [12, 13, 14, 17, 12, 13, 14, 15, 156, 16, 1, 16, 3, 2, 3];
// let n= arr.length;
// uniqueElement(arr, n)


//Approach - 4 (Hash Method)

// function uniqueElement(arr, n){

//   if(n < 2){
//     return "Invalid Array"
//   }

//   let set = new Set();
//   for(let i = 0; i < n; i++){
//     if(!set.has(arr[i])){
//       set.add(arr[i]);
//     }
//   }
//   console.log( set)
// }

// let arr = [12, 13, 14, 17, 12, 13, 14, 15, 156, 16, 1, 16, 3, 2, 3];
// let n = arr.length;
// uniqueElement(arr,  n)

// function uniqueElement(arr, n){
   
//   if(n < 2){
//     return "Invalid Array"
//   }
//    let newArr = {}
//   for(let i = 0 ; i < n ; i++){
//     let count = 0;
//       for(let j = 0; j < n; j++){
//         if(arr[i] === arr[j]){
//           count += 1;
//           newArr[arr[i]] = count
//         }
//       }
//       if(count === 1){
//         console.log(arr[i]);
//        }
//   }
//   console.log(newArr)
// }
// let arr = [12, 13, 14, 17, 12, 13, 14, 15, 156, 16, 1, 16, 3, 2, 3];
// let n = arr.length;
// uniqueElement(arr,  n)


//Approach 

// function singleElement(arr, n){

//   if(n < 2){
//     return "Invalid array"
//   }

//   let low = 0, high = n - 1;
//   let mid;
//   while(low <= high ){
//     mid = (low + high) / 2;
//     if(arr[mid] == arr[mid^1]){
//       low = mid + 1;

//     }else{
//       high = mid - 1;
//     }
//   }
//   return arr[low];
// }
// let arr = [12, 13, 14, 17, 12, 13, 14, 15, 156, 16, 1, 16, 3, 2, 3];
// let n = arr.length;
// arr.sort((a, b) => a-b)
// console.log(singleElement(arr, n))

//Approach - Map Method 

// function singleElement(arr, n){

//   let mm = new Map();
//   for(let i = 0; i < n; i++){
//     if(mm.has(arr[i])){
//       mm.set(arr[i], mm.get(arr[i]) + 1);
//     }else{
//       mm.set(arr[i], 1)
//     }
//   }
//   for(let [key, value] of mm.entries()){
//     if(value === 1)
//     return key
//   }
// }

// let arr = [12, 13, 14, 17, 12, 13, 14, 15, 156, 16, 1, 16, 3, 2, 3];
// let n = arr.length;
// console.log(singleElement(arr, n))


/** Leaders in an array */

// function leadersNum(arr, n){
//     for(let i = 0; i<n; i++){
//       let j ; 
//       for( j= i+ 1; j < n; j++){
//         if(arr[i] < arr[j])
//         break;
//       }
//       if(j == n){
//         console.log(arr[i])
//       }
//     }
// }

// let arr = [16, 17, 4, 3, 5, 2];
// let n = arr.length;
// leadersNum(arr, n)

//Approach - 2

// function leadersNum(arr, n){

//    let right = arr[n-1];
//    console.log(right)
//   for(let i = n-2; i >=0; i--){
//     if(right < arr[i]){
//     right = arr[i];
//     console.log(right)
//     }
//   }
//   }
// let arr = [12, 13, 14, 17, 12, 13, 14, 15, 156, 16, 1, 16, 3, 2, 3];
// let n = arr.length;
// leadersNum(arr, n)

//Approach 

// function leadersNum(arr, n){
//     let stack = [];
//     stack.push(arr[n-1]);
//     for(let i =n-2; i >= 0; i--){
//       let temp = stack.pop()
//       stack.push(temp);
//       if(arr[i] >= temp){
//         stack.push(arr[i])
//       }
//     }
//     while(stack.length > 0){
//       console.log(stack.pop() + " ")
//     }
// }

// let arr = [12, 13, 14, 17, 12, 13, 14, 15, 156, 16, 1, 16, 3, 2, 3];
// let n= arr.length;
// leadersNum(arr, n)


/** Find Subarray with given sum | Set 1 (Non-negative Numbers) */

// function Subarray(arr, n, target){

//   let set= new Set()
//   let newArr = new Array();
//   for(let i=0; i < n; i++){
//     for(let j=i+1; j < n; j++){
//       for(let k=j+1; k<n; k++){
//           let sum = arr[i] + arr[j] + arr[k]
//           if(sum === target){
//             newArr.push(arr[i])
//             newArr.push(arr[j])
//             newArr.push(arr[k])
//             set.add(arr[i])
//             set.add(arr[j])
//             set.add[arr[k]]    
//            }
//       }
//     }
//   }
//   console.log(newArr)
//   console.log(set)
// }

// let arr = [12, 13, 14, 17, 12, 13, 14, 15, 156, 16, 1, 16, 3, 2, 3];
// let n = arr.length;
// let target = 170;
// Subarray(arr, n, target)


//Approach - 2

// function subArray(arr, n , sum){
 
//   for(let i =0; i < n; i++){
//     let currentSum = arr[i];
//     if(currentSum == sum){
//       console.log("Sum found ar index  " + i)
//       return ;
//     }else{
//       for(let j=i+ 1; j < n; j++){
//         currentSum +=arr[j]
//         if(currentSum === sum ){
//           console.log("sum found between indexes  " + i + "  and  " + j);
//           return;
//         }
//       }
//     }
//   }
//   console.log("No subarray found")
//   return;
// }

// let arr = [12, 13, 14, 17, 12, 13, 14, 15, 156, 16, 1, 16, 3, 2, 3];
// let n = arr.length;
// let sum = 170;
// subArray(arr, n, sum);

// function fixArray(arr){
//   let n = arr.length;
//   let vector = new Array(n).fill(-1);
//   for(let i =0; i<n; i++){
//     if(arr[i] != -1){
//       vector[arr[i]] = arr[i];
//     }
//   }
//   for(let i=0; i< n; i++){
//     arr[i] = vector[i];
//   }
//   console.log(arr);
// }

// let arr = [-1, 1, 2, 3, 4,5, 6, -1, 0, 9, 10];
// fixArray(arr);

function fixArray(arr){

}
let arr = [-1, 1, 2, 3, 4,5, 6, -1, 0, 9, 10];
fixArray(arr)