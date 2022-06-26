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
        type_user_id: 1
      },
    ]);
    await 
  }
}

module.exports = UserSeeder;
