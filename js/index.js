//1,1,2,3,5,8,13,21,34...
// F(n) = F(n - 1) + F(n-2);
const userNum = parseInt(prompt('Enter number of Fibonacci', '0'));
document.getElementById('result').innerHTML = 'n-number of Fibonacci sequence in Loop is ' + fibLoop1(userNum);
document.getElementById('result1').innerHTML = 'n-number of Fibonacci sequence in Loop with saving values to an array is ' + fibLoop2(userNum);
document.getElementById('result2').innerHTML = 'n-number of Fibonacci sequence in Array is ' + fibArray(userNum);
document.getElementById('result3').innerHTML = 'n-number of Fibonacci sequence in Recursion is ' + fibRec(userNum);

// console.log('line 8 ' + userNum);

function fibLoop1(n) {
  let firstNum = 1, secondNum = 1;
//   console.log(`Line12 ${firstNum} ${secondNum} ${n}`);
  for(let i = 3; i <= n; i++) {
    let c = firstNum + secondNum;
    // console.log(`line 15 c value ${c}`); 
    firstNum = secondNum;
    // console.log(`Line16 ${firstNum} ${secondNum} ${n}`);
    secondNum = c;
  }
  return secondNum;
  
}
// console.log('fibLoop2 ' + fibLoop2);
function fibLoop2(n){
    // console.log('l 12 nValue ' + n);
    let fibArr = [0, 1, 1];
    // console.log('array fibArr ' + fibArr);
    for(let i = 3; i <= n; i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2]; //дія
        // console.log('array f Line17 ' + fibArr);
    }
    //   console.log('array f Line 20 ' + fibArr);
        return fibArr.pop();
}

function fibArray(n){
    let fibArr = [1, 1];
    for(let i = 2; i < n; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
return fibArr.pop()
}

// fibRec зависає при більших числах
function fibRec(n){
    if(n <= 2) return 1;
 return fibRec(n - 1) + fibRec(n - 2);
    }



