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