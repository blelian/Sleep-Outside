document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".signup-form");
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  const closeBtn = document.getElementById("close-modal");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!username || !email || !password) {
      showModal("Please fill in all fields.");
      return;
    }

    // Simulate success
    showModal(`Welcome, ${username}! Your account has been created.`);
    form.reset();
  });

  function showModal(message) {
    modalMessage.textContent = message;
    modal.classList.add("show");
  }

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.classList.remove("show");
    }
  });

  // Info Modal Logic
  const infoModal = document.getElementById("info-modal");
  const closeInfoModal = document.getElementById("close-info-modal");

  setTimeout(() => {
    infoModal.classList.add("show");
  }, 700); // Appear shortly after load

  closeInfoModal.addEventListener("click", () => {
    infoModal.classList.remove("show");
  });
});
