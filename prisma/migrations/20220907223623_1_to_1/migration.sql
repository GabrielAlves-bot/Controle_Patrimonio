/*
  Warnings:

  - The primary key for the `enderecos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `enderecoId` on the `enderecos` table. All the data in the column will be lost.
  - The required column `Id` was added to the `Enderecos` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `enderecos` DROP PRIMARY KEY,
    DROP COLUMN `enderecoId`,
    ADD COLUMN `Id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`Id`);
