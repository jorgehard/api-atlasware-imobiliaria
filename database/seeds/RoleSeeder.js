"use strict";
const Role = use("Role");
class RoleSeeder {
  async run() {
    await Role.createMany([
      {
        slug: "manager",
        name: "Master",
        description: "Realiza qualquer ação dentro do sistema",
      },
    ]);
  }
}

module.exports = RoleSeeder;
