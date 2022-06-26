"use strict";

const Permission = use("Permission");
class PermissionSeeder {
  async run() {
    await Permission.createMany([
      {
        id: 1,
        name: "Administrador",
        slug: "master",
        description: "Permite gerenciar todas funcionalidades do sistema",
      },
      {
        id: 2,
        name: "Corretor",
        slug: "corretor_novos_imoveis",
        description:
          "Permite realizar ações referentes a cadastro de novos imoveis",
      },
    ]);
  }
}

module.exports = PermissionSeeder;
