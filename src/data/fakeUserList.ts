import faker from "faker";

export function getUserList(count: number) {
  let userList = [];
  for (let i = 0; i < count; i++) {
    let avatar = faker.image.avatar();
    let login = faker.internet.userName();
    //Think, it could be better
    let role = faker.random.boolean() ? "Admin" : "User";
    let bool = faker.random.boolean();
    userList.push({
      avatar,
      login,
      role,
      status: {
        info: bool ? "Offline" : "Online",
        bool,
      },
    });
  }
  return userList;
}
