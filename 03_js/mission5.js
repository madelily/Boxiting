// DOM 요소 선택
const titleElement = document.getElementById("title");
const descElement = document.getElementById("description");
const buttonElement = document.getElementById("color-button");
const introContainer = document.getElementById("intro-container");

// 텍스트 내용 변경
titleElement.innerText = "반갑습니다!";
descElement.innerText = "JavaScript로 내용이 바뀌었습니다.";

// 스타일 초기 설정
introContainer.style.border = "2px solid black";
introContainer.style.padding = "20px";
introContainer.style.backgroundColor = "#f0f0f0"; // 초기 배경색 설정

// 버튼 클릭 이벤트 추가
buttonElement.addEventListener("click", function () {
  // 현재 문장의 색상을 확인
  if (descElement.style.color === "red") {
    // 현재 색상이 빨간색이면 파란색으로 변경하고
    descElement.style.color = "blue";
    // 배경색을 노란색으로 변경
    introContainer.style.backgroundColor = "yellow";
  } else {
    // 현재 색상이 빨간색이 아니면(초기 상태) 빨간색으로 변경하고
    descElement.style.color = "red";
    // 배경색을 연한 회색으로 변경
    introContainer.style.backgroundColor = "#aaaaaa";
  }
});
