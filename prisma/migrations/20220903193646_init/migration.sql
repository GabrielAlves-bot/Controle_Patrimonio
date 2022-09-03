-- CreateTable
CREATE TABLE `Usuarios` (
    `usuarioId` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeCompleto` VARCHAR(255) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `matricula` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Usuarios_matricula_key`(`matricula`),
    PRIMARY KEY (`usuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Moveis` (
    `movelId` INTEGER NOT NULL AUTO_INCREMENT,
    `nomePatrimonio` VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(600) NOT NULL,
    `marca` VARCHAR(255) NOT NULL,
    `modelo` VARCHAR(255) NOT NULL,
    `origemTombamento` VARCHAR(255) NOT NULL,
    `numeroTombamento` VARCHAR(255) NOT NULL,
    `estadoConservacao` VARCHAR(255) NOT NULL,
    `localizacao` VARCHAR(255) NOT NULL,
    `usuarioId` INTEGER NOT NULL,

    PRIMARY KEY (`movelId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Moveis` ADD CONSTRAINT `Moveis_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuarios`(`usuarioId`) ON DELETE RESTRICT ON UPDATE CASCADE;
