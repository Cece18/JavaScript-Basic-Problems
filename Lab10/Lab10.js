//Pre: s is an array
// Post: The reverse of the array is outputted 
function reverseRecursively()
{
    var s = prompt("Enter an array: ", "");
    //Checking function
    alert(reverse(s));
}

function reverse(s)
{
    //Checking length
    //Base Case
    if(s.length < 2)
    {
        return s;
    }
   
    //Recursive Case
    return reverse(s.substr(1)) + s[0];
}



//Pre: n is a real number 
//Post: How many 7's are outputted
function problem7()
{
    var n = prompt("Enter numbers: ", "");
    //Checking function
    alert(howMany(n));
}


function howMany(n) {
       if(n >= 0 && n <= 9){
              if(n == 7){
       return 1 ;
       }
       else{
       return 0 ;
       }
 }
       var rem = n % 10;
       var val = Math.floor(n / 10) ;
       if(rem == 7){
              return 1 + howMany(val);
 }
       else{
              return howMany(val);
       }
 }




//Pre: n and m are real numbers
//Post: The multiplication of these numbers is outputted 
var calls = 0;
function multiply(m,n){
    calls += 1;
    var lc = calls;
    console.log("Call no"+lc);
        console.log(m + " " + n);
    if(n==0) {
        console.log("Return val for Call no"+lc + "0");
        return 0;
    }
    if(n==1) {
        console.log("Return val for Call no"+lc + m);
        return m;
    }
    var ans = multiply(m,n-1) + m;
    console.log("Call no." + lc + "Return Value: " + ans+"\n");
    return ans;
   }
   
function problem3()
   {
      // var m = prompt("Enter first number: ", "");
    //   var n = prompt("Enter second number: ", "");
       //Checking function
       alert(multiply(5,6));
   }


   //Pre: x is a real number && legth of array >=0
   //Post: True is outputted if x is in the array otherwise false is outputted

   var calls = 0;
  function find(x,A,i,j) {
        calls += 1;
    var lc = calls;
    if(i>j) return false;
    console.log("Call no"+lc);
    var mid = Math.floor((i+j)/2);
    console.log(i+" "+j+" "+ mid + " " + A[mid]);
    var ans;
    if(A[mid]==x) ans = true;
    else if(A[mid]>x)   ans = find(x,A,i,mid-1);
    else ans = find(x,A,mid+1,j);
    console.log("Call no." + lc + "Return Value: " + ans+"\n");
    return ans;
}

function problem4 (){
    var x = prompt("Enter a number","");
    alert(find(x,[8,9,9,12,13,13,13,15,20,100,100,101,123,129,300,1000,1001,20000,20000,34511],0,19));
}