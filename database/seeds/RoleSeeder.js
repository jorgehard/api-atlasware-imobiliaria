"use strict";
const Role = use("Role");
class RoleSeeder {
  async run() {
    await Role.createMany([
      {
        id: 1,
        slug: "manager",
        name: "Master",
        description: "Realiza qualquer ação dentro do sistema",
      },
    ]);
  }
}

module.exports = RoleSeeder;
