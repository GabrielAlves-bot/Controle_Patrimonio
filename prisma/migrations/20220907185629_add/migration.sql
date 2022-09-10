/*
  Warnings:

  - Added the required column `imovelId` to the `Moveis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `moveis` ADD COLUMN `imovelId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Imoveis` (
    `imovelId` VARCHAR(191) NOT NULL,
    `nomeImovel` VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(600) NOT NULL,

    PRIMARY KEY (`imovelId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enderecos` (
    `enderecoId` VARCHAR(191) NOT NULL,
    `imovelId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Enderecos_imovelId_key`(`imovelId`),
    PRIMARY KEY (`enderecoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Moveis` ADD CONSTRAINT `Moveis_imovelId_fkey` FOREIGN KEY (`imovelId`) REFERENCES `Imoveis`(`imovelId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enderecos` ADD CONSTRAINT `Enderecos_imovelId_fkey` FOREIGN KEY (`imovelId`) REFERENCES `Imoveis`(`imovelId`) ON DELETE RESTRICT ON UPDATE CASCADE;
