// let sentence = "i am a student";
// words = sentence.split('');
// console.log(words);

// let str = 'tu meri me tera tu meri';
// let word = str.split('r');
// console.log(word)

// let count = word.length
// console.log(count)

// regular function

// callback function : we pass a function as an argument inside another function;


  function sample ( callback){
    console.log("sample")
    callback()

 }

 function demo (){
    console.log('demo')
 }
sample(demo)

// arrow function
 const demo2 = ()=> ('demo')
 console.log(demo2())
 // first classs function
 //1. we can trat a variable as a function
//  2. we can pass a function as an argument inside another function
//  3. we can return a function from function


function test (){
   return function test2(){
      console.log('test2')
      return function test3(){
         console.log('test3')
      }
   }
   
}
test()()()


// 4. higher order function
// map, filter, reduce

// ANONOMUS FUNCTION : THE FUNCTION WHICH DOES NOT HAVE ANY . NAME
setTimeout(() => {
   
}, 1000);

//7. self invoking function (iief):
 //to obtain data provacy abd to call a function imidately after function scope.
  let test5 = (function(){
   return 'sample5';
  })()
  console.log(test5) 