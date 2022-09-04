/*
  Warnings:

  - The primary key for the `moveis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `moveis` DROP FOREIGN KEY `Moveis_usuarioId_fkey`;

-- AlterTable
ALTER TABLE `moveis` DROP PRIMARY KEY,
    MODIFY `movelId` VARCHAR(191) NOT NULL,
    MODIFY `usuarioId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`movelId`);

-- AlterTable
ALTER TABLE `usuarios` DROP PRIMARY KEY,
    MODIFY `usuarioId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`usuarioId`);

-- AddForeignKey
ALTER TABLE `Moveis` ADD CONSTRAINT `Moveis_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuarios`(`usuarioId`) ON DELETE RESTRICT ON UPDATE CASCADE;
