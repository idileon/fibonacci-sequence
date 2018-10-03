//1,1,2,3,5,8,13,21,34...
// F(n) = F(n - 1) + F(n-2);
const userNum = parseInt(prompt('Enter number of Fibonacci', '0'));
document.getElementById('result').innerHTML = 'n-number of Fibonacci sequence in Loop is ' + fibLoop1(userNum);
document.getElementById('result1').innerHTML = 'n-number of Fibonacci sequence in Loop with saving values to an array is ' + fibLoop2(userNum);
document.getElementById('result2').innerHTML = 'n-number of Fibonacci sequence in Array is ' + fibArray(userNum);
document.getElementById('result3').innerHTML = 'n-number of Fibonacci sequence in Recursion is ' + fibRec(userNum);

function fibLoop1(n) {
  let firstNum = 1, secondNum = 1;
  for(let i = 3; i <= n; i++) {
    let c = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = c;
  }
  return secondNum;
  
}
function fibLoop2(n){
    let fibArr = [0, 1, 1];
    for(let i = 3; i <= n; i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2]; //дія
    }
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



