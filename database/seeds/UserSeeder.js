"use strict";

const User = use("App/Models/User");
class UserSeeder {
  async run() {
    await User.createMany([
      {
        name: "Administrador",
        username: "admin",
        password: "123",
        codigo: "1",
        email: "admin@admin.com",
        type_user_id: 1,
        roles: [1],
        permissions: [1, 2],
      },
    ]);
  }
}

module.exports = UserSeeder;
