// 배열과 연산 응용 실습

const users = [
  { name: "김철수", age: 25 },
  { name: "철수김", age: 52 },
  { name: "이유리", age: 43 },
  { name: "유리이", age: 21 },
];

console.log("--- 사용자 정보 출력 ---");

// ✅ 반복문에서는 users 배열을 순회하고 개별 요소를 user에 할당합니다.
for (const user of users) {
  console.log(`이름: ${user.name}, 나이: ${user.age}`);
}

//
let totalAge = 0;

for (const user of users) {
  totalAge += user.age;
}

const averageAge = totalAge / users.length;

console.log("\n--- 나이 평균 계산 ---");
console.log(`총 나이 합계: ${totalAge}`);
console.log(`사용자 수: ${users.length}`);
console.log(`평균 나이: ${averageAge.toFixed(1)}`);
