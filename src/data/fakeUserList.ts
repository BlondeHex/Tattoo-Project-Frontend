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
    };
  });
}
