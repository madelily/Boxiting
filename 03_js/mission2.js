//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("초기배열:", numbers);

//
numbers.push(11);
console.log("push(11) 후 배열:", numbers);

// pop()으로 마지막 값 제거 후 배열
const lastNumber = numbers.pop();
console.log("pop()으로 제거된 값:", lastNumber);
console.log("pop() 후 배열", numbers);

// 배열의 특정 부분을 잘라내어 새로운 배열을 반환.  원본은 반환 없음.
// 인덱스 2부터 5전까지. 결과는 3, 4, 5가 나옴.
const slicedArray = numbers.slice(2, 5);
console.log("slice(2,5)로 잘라낸 새 배열:", slicedArray);

//문자열 제어
const myString = "Hello JavaScript";
console.log("원본 문자열:", myString);

// 모든 문자를 대문자로
const upperCaseString = myString.toUpperCase();
console.log("toUpperCase() 결과", upperCaseString);

// 문자열 특정 부분을 잘라낸다
const subStringResult = myString.substring(6, 10);
console.log("substring(6,10)의 결과:", subStringResult);
