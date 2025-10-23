export default function box8() {
  const box = document.createElement("div");
  box.className = "box box-8";
  box.innerHTML = `
    <h2>참가자 8의 컴포넌트</h2>
    <p>이 영역은 <strong>참가자 8</strong>이 수정하는 구역입니다.</p>

    <!-- ✅ 수정 가능한 영역 -->
    <div class="editable-area">
      <!-- 여기 안쪽 코드만 자유롭게 수정하세요 -->
      <p>이 끝나가요</p>
      <button id="btn8">클릭</button>
      <p id="msg8" class="muted"></p>
    </div>
    <!-- ✅ 수정 가능한 영역 끝 -->
  `;

  const btn = box.querySelector("#btn8");
  const msg = box.querySelector("#msg8");

  btn.addEventListener("click", () => {
    msg.textContent = "참가자 8의 버튼이 클릭되었습니다! 🎉";
  });

  return box;
}
