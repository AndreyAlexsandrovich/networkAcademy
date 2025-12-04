const dataVacancies = [
    {   name: 'Преподаватель Frontend',
        description: 'На данную вакансию нужны преподаватели frontend. Ты нам подходишь если знаешь: HTML/CSS/JAVASCRIPT/GIT, можешь найти общий язык с детьми, комуникабельный, стрессоустойчивый, имеешь опыт в этой сфере. Мы тебя ждем в нашей дружной команде',
        buttonText: 'Подать заявку'
    },
    {   name: 'Преподаватель Figma',
        description: 'На данную вакансию требуются преподаватели со знаниями в области веб-дизайна. Если ты знаешь веб-дизайн, умеешь ладить с детьми, приподнести материал простым языком, то тебе точно к нам',
        buttonText: 'Подать заявку'
    },
    {   name: 'Преподаватель Roblox Studio',
        description: 'Преподаватель по roblox studio. Ты нам подходишь если: Есть какой-то опыт в разработке игр, есть свои проекты, находишь общий язык с детьми, объясняешь сложный материал простым языком или имеешь опыт с языком phyton',
        buttonText: 'Подать заявку'
    },
    {   name: 'Преподаватель Scratch',
        description: 'Преподаватель по направлению scratch. Ты нам подходишь если ты знаком с данным инструментом, имеешь логическое мышление(алгоритмическое), готов работать с детьми, объясняешь сложный материал простым языком или знаком с любым языком программирования.',
        buttonText: 'Подать заявку'
    },
]

const containerVacancie = document.querySelector('.vacancies__container');
const template = document.querySelector('.vacanices__template');

dataVacancies.forEach(vacancy => { 
    const vacancyElement = template.content.cloneNode(true);

    vacancyElement.querySelector('.vacancie__title').textContent = vacancy.name;
    vacancyElement.querySelector('.vacancie__description').textContent = vacancy.description;
    vacancyElement.querySelector('.vacancie__button').textContent = vacancy.buttonText;
    
    containerVacancie.appendChild(vacancyElement);
})