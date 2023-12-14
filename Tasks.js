// 8kuy Even or Odd 
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// Create a function that takes an integer as an argument and returns 
// "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if(number % 2 !== 0 ) return 'Odd'
  return 'Even'
}

function evenOrOdd1(number) {
  return number % 2 !== 0 
  ? 'Odd' 
  : 'Even'
}
console.log('🚀 ~ file: ElenaZadachi.js:7 ~ evenOrOdd ~ evenOrOdd:', evenOrOdd(3))


// 7 kyu Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount1(str) {
 return str.split('').filter(c => 'aeiouAEIOU'.includes(c)).length;
}

function getCount2(str) {
  var vowelsCount = 0;
  str.split('').forEach(function(x){
    if(x == 'a' | x == 'e' | x == 'i' | x == 'o' | x == 'u'){
      vowelsCount += 1;
    }
  });  
  return vowelsCount;
}

function getCount3(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for(var i = 0; i < str.length; i += 1){
    if(vowels.includes(str[i])){
      vowelsCount++;
    }
  }
  
  return vowelsCount;
}
console.log(getCount3('abracadabra'))



// 7 kyu Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  return str.split('').filter((letter) => !vowels.includes(letter)).join('')
}

function disemvowel1(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = ''
  for (let i = 0; i < str.length; i += 1) {
    if (!vowels.includes(str[i])) {
      result += str[i]
    }
  }
  return result
}

console.log(disemvowel('This website is for losers LOL!'))


//*** */
var a = {};
(function b(a) {
  a.a = 10;
  a = null;
})(a);
console.log(a)

/* *** */
const obj = {
  x: 10,
  y: 20
}
const prop = Object
  .keys(obj) // [ 'x', 'y' ]
  .reverse() // [ 'y', 'x' ]
  .join('') // yx

  obj.xy = 30
  obj.yx = 40
  obj.x10y20 = 50
  obj.y20x10 = 60

  const result = obj[prop]
  console.log(result) // 40



