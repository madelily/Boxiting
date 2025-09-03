// 1~20 정수 출력
console.log("--- 1부터 20까지의 숫자 출력 ---");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 짝수만 출력, for 반복문과 if 조건문 사용
console.log("--- 1부터 20까지의 숫자 중 짝수만 출력하기 ---");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    //몫이 0일때,
    console.log(i); // i를 출력해라. (몫이 0이면 짝수로 나눠지는 짝수인숫자)
  }
}

//
console.log("\n --- 'fruits' 배열에서 '사'로 시작하는 과일만 출력하기 ---");
const fruits = [
  "사과",
  "바나나",
  "딸기",
  "수박",
  "오렌지",
  "사과는 아니지만 과일이라 치고 사",
];
for (const fruit of fruits) {
  if (fruit.startsWith("사")) {
    console.log(fruit);
  }
}
