export default function box2() {
  const box = document.createElement("div");
  box.className = "box box-2";
  box.innerHTML = `
    <h2>강동휘 발냄새 취두부 냄새</h2>
    <p>이 영역은 <strong>유사 강동휘님</strong>이 수정하는 구역입니다.</p>

    <!-- ✅ 수정 가능한 영역 -->
    <div class="editable-area">
      <!-- 여기 안쪽 코드만 자유롭게 수정하세요 -->
      <p>이 문장은 유사 강동휘님이 직접 바꾸거나, 기능을 추가할 수 있는 공간입니다.</p>
      <button id="btn2">클릭</button>
      <p id="msg2" class="muted"></p>
    </div>
    <!-- ✅ 수정 가능한 영역 끝 -->
  `;

  const btn = box.querySelector("#btn2");
  const msg = box.querySelector("#msg2");

  btn.addEventListener("click", () => {
    msg.textContent = "유사 강동휘의 발작 버튼이 클릭되었습니다! 🎉";
  });



  return box;
}
