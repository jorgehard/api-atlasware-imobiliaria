"use strict";

const Permission = use("Permission");
class PermissionSeeder {
  async run() {
    await Permission.createMany([
      {
        name: "Administrador",
        slug: "master",
        description: "Permite gerenciar todas funcionalidades do sistema",
      },
      {
        name: "Corretor",
        slug: "corretor_novos_imoveis",
        description:
          "Permite realizar ações referentes a cadastro de novos imoveis",
      },
    ]);
  }
}

module.exports = PermissionSeeder;
