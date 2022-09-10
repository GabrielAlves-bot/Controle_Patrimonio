/*
  Warnings:

  - Added the required column `bairro` to the `Enderecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Enderecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Enderecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complemento` to the `Enderecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Enderecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logradouro` to the `Enderecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `Enderecos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `imoveis` DROP FOREIGN KEY `Imoveis_imovelId_fkey`;

-- AlterTable
ALTER TABLE `enderecos` ADD COLUMN `bairro` VARCHAR(255) NOT NULL,
    ADD COLUMN `cep` VARCHAR(8) NOT NULL,
    ADD COLUMN `cidade` VARCHAR(255) NOT NULL,
    ADD COLUMN `complemento` VARCHAR(255) NOT NULL,
    ADD COLUMN `estado` VARCHAR(255) NOT NULL,
    ADD COLUMN `logradouro` VARCHAR(255) NOT NULL,
    ADD COLUMN `numero` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `Enderecos` ADD CONSTRAINT `Enderecos_imovelId_fkey` FOREIGN KEY (`imovelId`) REFERENCES `Imoveis`(`imovelId`) ON DELETE RESTRICT ON UPDATE CASCADE;
