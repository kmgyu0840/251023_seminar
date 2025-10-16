// 간단한 DOM 인터랙션 및 폼 검증 로직
document.addEventListener("DOMContentLoaded", () => {
  const magicBtn = document.getElementById("magicBtn");
  const magicMsg = document.getElementById("magicMsg");

  magicBtn.addEventListener("click", () => {
    // 클릭 카운트를 data-attribute로 보관(브랜치로 기능 확장하기 쉬움)
    const prev = Number(magicBtn.dataset.count || 0);
    const next = prev + 1;
    magicBtn.dataset.count = next;
    magicMsg.textContent = `버튼이 ${next}번 클릭되었습니다. 🎉`;
  });

  // 폼 로직
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const result = document.getElementById("formResult");
  const clearBtn = document.getElementById("clearBtn");

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    result.textContent = "";
    // 간단한 검증
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      result.textContent = "모든 필드를 채워주세요.";
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
      result.textContent = "올바른 이메일 형식이 아닙니다.";
      return;
    }

    // 여기선 실제 전송 대신 시뮬레이션 메시지만 보여줌
    result.textContent = "메시지를 성공적으로 전송했습니다! (샘플 동작)";
    form.reset();
  });

  clearBtn.addEventListener("click", () => {
    form.reset();
    result.textContent = "";
  });
});
