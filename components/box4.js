export default function box4() {
  const box = document.createElement("div");
  box.className = "box box-4";
  box.innerHTML = `
    <h2>참가자 4의 컴포넌트</h2>
    <p>이 영역은 <strong>참가자 4</strong>이 수정하는 구역입니다.</p>

    <!-- ✅ 수정 가능한 영역 -->
    <div class="editable-area">
      <!-- 여기 안쪽 코드만 자유롭게 수정하세요 -->
      <p>이 문장은 참가자 4이 직접 바꾸거나, 기능을 추가할 수 있는 공간입니다.</p>
      <button id="btn4">클릭</button>
      <p id="msg4" class="muted"></p>
    </div>
    <!-- ✅ 수정 가능한 영역 끝 -->
  `;

  const btn = box.querySelector("#btn4");
  const msg = box.querySelector("#msg4");

  btn.addEventListener("click", () => {
    msg.textContent = "참가자 4의 버튼이 클릭되었습니다! 🎉";
  });

  return box;
}
