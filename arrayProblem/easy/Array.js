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

function find3largestElem(arr, n){
  debugger
   arr= [12, 34, 12, 35, 36, 23, 17, 78, 78, 43, 56];
   n= arr.length;
  arr.sort((a, b)=> a-b);
  let check=0, count = 1;

  for(let i=0; i<= n-1; i++) {
    console.log("count >>" + count )
    document.write("count " + count )
    if(count < 4){
      if(check !== arr[n-i-1] ){
        document.write(arr[n-i-1] + " ")
        console.log(arr[n-i-1] + "  ")
        check = arr[n-i-1]
        count++;
      }
    }else{
      break
    }
  }
}

// let arr= [12, 34, 12, 35, 36, 23, 17, 78, 43, 56];
// let n= arr.length;
// find3largestElem(arr, n)