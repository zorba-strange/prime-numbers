console.log("running");
function isPrime(highNum){
  var testRun = 1;
  var p = highNum - 1;
  while(testRun != 50){
    var a = Math.floor(Math.random() * (p-1)+1);
    var pCheck = Math.pow(a, p) - a;
    if(a % p == 0){
      p--;
      testRun = 1;
    } else {
      testRun++;
  } var largePrime = p;
  }
  return largePrime;
}
console.log(isPrime(2000) + " Is a large prime number");
