const buttonVacancies = document.querySelectorAll("#button-vacancies");
const unplushWrapper = document.querySelector(".unplush");
const buttonClose = document.querySelector('.popup__close');

buttonVacancies.forEach((button) => {
  button.addEventListener("click", () => {
    unplushWrapper.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

buttonClose.addEventListener("click", () => {
       unplushWrapper.style.display = "none";
       document.body.style.overflow = "";
});

unplushWrapper.addEventListener("click", (e) => {
   if (e.target === unplushWrapper) { 
       unplushWrapper.style.display = "none";
       document.body.style.overflow = "";
   }
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    unplushWrapper.style.display = "none";
    document.body.style.overflow = "";
  }
});
