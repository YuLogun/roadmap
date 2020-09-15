export const coursesTestData = [
  {
    employee_id: 0,
    roadmap: {
      roadmap_title: "Roadmap 1",
      roadmap_info: [
        {
          id: 0,
          technology: "Javascript",
          courses: [
            {
              name: "JavaScript. Уровень 1. Интерактивные веб-приложения",
              url: "https://www.udemy.com/",
              id: 1,
              completed: true,
            },
            {
              name: "Практический JavaScript (Продвинутый уровень)",
              url: "https://www.udemy.com/",
              id: 2,
              completed: false,
            },
            {
              name: "Асинхронная разработка на JS",
              url: "https://www.udemy.com/",
              id: 3,
              completed: false,
            },
          ],
        },
        {
          id: 1,
          technology: "CSS",
          courses: [
            {
              name: "CSS: Позиционирование",
              url: "https://www.udemy.com/",
              id: 4,
              completed: true,
            },
            {
              name: "CSS: Адаптивность",
              url: "https://www.udemy.com/",
              id: 5,
              completed: false,
            },
            {
              name: "HTML/CSS. Интерактивный курс",
              url: "https://www.udemy.com/",
              id: 6,
              completed: false,
            },
          ],
        },
      ],
    },
  },
  {
    employee_id: 1,
    roadmap: {
      roadmap_title: "Roadmap 2",
      roadmap_info: [
        {
          id: 0,
          technology: "PHP",
          courses: [
            {
              name: "Программист PHP от GeekBrains",
              url: "https://www.udemy.com/",
              id: 1,
              completed: false,
            }
          ],
        },
        {
          id: 1,
          technology: "PostgreSQL",
          courses: [
            {
              name: "Администрирование PostgreSQL 10. Базовый курс",
              url: "https://www.udemy.com/",
              id: 4,
              completed: false,
            },
            {
              name: "Администрирование PostgreSQL 10. Настройка и мониторинг",
              url: "https://www.udemy.com/",
              id: 5,
              completed: true,
            }
          ],
        },
      ],
    },
  },
  {
    employee_id: 2,
    roadmap: null
  }
];
