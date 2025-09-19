import React from "react";

export default function Form({ handleSubmit, value, handleChange }) { // ✅ handleChange를 props로 받도록 수정
  
  // 이제 App.jsx에서 넘어온 handleChange 함수를 그대로 사용합니다.
  // 이 파일에서 따로 정의할 필요가 없습니다.

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="value"
        style={{ flex: 10, padding: "5px" }}
        placeholder="해야 할 일을 입력하세요."
        value={value}
        onChange={handleChange} // ✅ App.jsx가 넘겨준 함수를 호출
      />
      <input type="submit" value="입력" className="btn" style={{ flex: 1 }} />
    </form>
  );
}