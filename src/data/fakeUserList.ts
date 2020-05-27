import faker from "faker";
import _ from "lodash";

export function getUserList(count: number) {
  return _.times(count, () => {
    let avatar = faker.image.avatar();
    let login = faker.internet.userName();
    //Think, it could be better
    let role = faker.random.boolean() ? "Admin" : "User";
    let isOnline = faker.random.boolean();
    return {
      avatar,
      login,
      role,
      status: {
        info: isOnline ? "Online" : "Offline",
        isOnline,
      },
      profile: [
        {
          rus: "Биография",
          info:
            "Занимаюсь татуированием около двух лет. Участвую в фестивалях. Не работю в free-hand стилях.",
        },
        {
          rus: "Возраст",
          info: "22 года",
        },
        {
          rus: "Контакты",
          info: "8 912-222-22 getTattoo@gavrilov.ru",
        },
        {
          rus: "Опыт работы",
          info: "2 года",
        },
        {
          rus: "Стоимость работы в час",
          info: "От 2000₽",
        },
      ],
      portfolio: [
        process.env.PUBLIC_URL + "/image/tattoo/1.jpg",
        process.env.PUBLIC_URL + "/image/tattoo/2.jpg",
        process.env.PUBLIC_URL + "/image/tattoo/3.jpg",
        process.env.PUBLIC_URL + "/image/tattoo/4.jpg",
        process.env.PUBLIC_URL + "/image/tattoo/5.jpg",
        process.env.PUBLIC_URL + "/image/tattoo/6.jpeg",
        process.env.PUBLIC_URL + "/image/tattoo/7.jpeg",
        process.env.PUBLIC_URL + "/image/tattoo/8.jpg",
      ],
    };
  });
}
