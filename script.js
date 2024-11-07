const modal = document.getElementById("terms-modal");
const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".close-button");
const clickFormItem = document.querySelectorAll('input');

openModal.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = this.getAttribute("data-target");
    modal.style.display = "flex";
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  });
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


clickFormItem.forEach(input => {
  input.addEventListener("blur", function() {
      if (input.value.trim() !== "") {
          input.classList.add("form-shadow");
      } else {
          input.classList.remove("form-shadow");
      }
  });
  input.addEventListener("focus", function() {
    input.classList.remove("form-shadow");
});
});