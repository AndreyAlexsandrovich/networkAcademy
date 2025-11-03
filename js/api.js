const token = "8186032912:AAG2KXx-h4JOILJUmxOyt-2TvSQNTDiLqmE";
const chatId = "7379813945";

const formStudents = document.querySelector("#contact-form");

if (document.querySelector('#contact-form')) { 
  initStudents();
}

function initStudents() { 
  formStudents.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    const data = {
      name: document.querySelector("#name").value,
      lastname: document.querySelector("#lastname").value,
      phone: document.querySelector("#phone").value
    };
  
    if (!data.name || !data.phone) {
      showMessage("❌ Заполните обязательные поля", "error", "responseMessage");
      return;
    }
  
    sendToTelegram(data, "student");
  });

}



const formVacancies = document.querySelector("#contact-form-vacancies");

formVacancies.addEventListener("submit", (evt) => {
  evt.preventDefault();
  evt.stopPropagation(); 
  
  const data = {
    name: document.querySelector("#name-vacancies").value,
    lastname: document.querySelector("#lastname-vacancies").value,
    direction: document.querySelector("#direction-vacancies").value,
    phone: document.querySelector("#phone-vacancies").value
  };
  
  console.log(data, 'Отправка формы');

  if (!data.name || !data.phone) {
    showMessage("❌ Заполните имя и телефон", "error", "responseMessage-vacancies");
    return;
  }

  sendToTelegram(data, "teacher");
});

function sendToTelegram(data, type) {
  let message = '';
  
  if (type === "student") {
    message = `
🎓 Новая заявка от студента:

👤 Имя: ${data.name}
👤 Отчество: ${data.lastname}
📞 Телефон: ${data.phone}
    `.trim();
  } else {
    message = `
🎯 Новая заявка на вакансию преподавателя:

👤 Имя: ${data.name}
👤 Отчество: ${data.lastname}
🎓 Направление: ${data.direction}
📞 Телефон: ${data.phone}
    `.trim();
  }

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.ok) {
        if (type === "student") {
          showMessage("✅ Заявка отправлена! Мы свяжемся с вами", "success", "responseMessage-student");
          formStudents.reset();
        } else {
          showMessage("✅ Заявка отправлена! Мы свяжемся с вами", "success", "responseMessage-vacancies");
          formVacancies.reset();
        }
      } else {
        const messageId = type === "student" ? "responseMessage-student" : "responseMessage-vacancies";
        showMessage(`❌ Ошибка отправки`, "error", messageId);
      }
    })
    .catch((error) => {
      const messageId = error === "student" ? "responseMessage-student" : "responseMessage-vacancies";
      showMessage("❌ Ошибка сети", "error", messageId);
    });
}

function showMessage(text, type, elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = text;
    el.className = `responseMessage ${type}`;
    setTimeout(() => (el.textContent = ""), 5000);
  }
}