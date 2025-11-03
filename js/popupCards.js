const dataCards = [
  {
    title: "Веб-дизайнер Figma",
    img: "../img/cards/figma.jpg",
    description:
      "Веб-дизайнер - это дизайнер который создает макеты для будущих ИТ продуктов и нони не только этим занимаются. Также создают карточки для товаров в ozon, wildberiess avito, вконтакте и другие площадки. Веб-дизайн это отдельная отрасль для создания макетов ИТ продуктов. В этом курсе 20 занятий. Поэтпно студент познакомится - что такое фигма, как с ней работать, как создать первый макет, что такое компоненты и в конце создаст один большой проект.",
      alt: "figma",
    },
    {
      title: "Roblox Studio",
      img: "../img/cards/robloxStudio.jpeg",
      description:
      "Roblox Studio - это 3D + Программирование на языке LUA. Студент научится создавать свои собственные игры для roblox и может на этом даже зарабатывать. Студент познакомится как создавать свои модели, как устанавливать плагины, что такое язык LUA, что такое переменные, циклы, условные операторы и в конце создаст один большой проект как итоговый для закрепления всех знаний полученных на курсе.",
      alt: "roblox studio",
    },
    {
      title: "scratch",
      img: "../img/cards/scratch.jpeg",
      description:
        "Что такое Scratch? Scratch - это платформа для создания алгоритмов в режиме пазла. При помощи кусочков пазлов можно создать целую игру. На данном курсе 12 уроков. В каждом из уроков в конце будет проект, который создаст студент и этим закрепит свои полученные знания. Между уроками будет контрольные вопросы для студентов чтобы не только закрепить практику, а еще и теорию. Наши преподаватели квалифицированные специалисты в области ИТ, умеют находить подход к нашим студентам и сложную теорию объясняют простым языком понятным для студентов. Данный курс подходит для студентов от 6 до 11 лет, но если хотите подростка отдать на этот курс, то мы тоже будем не против",
      alt: "scratch",
    },
  {
    title: "Молодой frontend-разработчик",
    img: "../img/cards/frontend.jpg",
    description:
      "Frotnend-разработка или как еще называют: создания пользовательского интерфейса для клиентов. Это уже создания именно продукта на таких языках как HTML, CSS, JavaScript. На курсе будут такие темы как: что такое HTML и в конце студент создаст свой первый проект в конце модуля. Что такое CSS и как при помощи этого языка делать страницы удобными и красочными. JavaScript зачем он нужен и как он взаимодействует с пользователям который находится на странице.",
    alt: "Frontend",
  },
];

const buttonsPopup = document.querySelectorAll(".cards__card-buy");


buttonsPopup.forEach((button, index) => {
  button.addEventListener("click", () => {
    const template = document.querySelector(".description-popup__template");
    const cloneTemplate = template.content.cloneNode(true);
    const buttonClose = cloneTemplate.querySelector('.popup__close')
    const cardData = dataCards[index];

    cloneTemplate.querySelector(".popup__description-title").textContent =
      cardData.title;
    cloneTemplate.querySelector(".popup__description-image").src = cardData.img;
    cloneTemplate.querySelector(".popup__description-text").textContent =
      cardData.description;
    cloneTemplate.querySelector(".popup__description-image").alt = cardData.alt;

    const popupElement = cloneTemplate.querySelector(".popup__description");
    
    popupElement.style.display = "block";
    closeButton(popupElement, buttonClose);
    document.body.appendChild(cloneTemplate);
  });
});

function closeButton(popupElement, buttonClose) { 
   buttonClose.addEventListener("click", () => {
         popupElement.style.display = "none";
         document.body.style.overflow = "";
  });
}

