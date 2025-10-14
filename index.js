const buttonVacancies = document.querySelectorAll("#button-vacancies");
const unplushWrapper = document.querySelector(".unplush");

buttonVacancies.forEach((button) => {
  button.addEventListener("click", () => {
    unplushWrapper.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

unplushWrapper.addEventListener("click", (e) => {
   if (e.target === unplushWrapper) { 
       unplushWrapper.style.display = "none";
       document.body.style.overflow = "hidden";
   }
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    unplushWrapper.style.display = "none";
    document.body.style.overflow = "";
  }
});
