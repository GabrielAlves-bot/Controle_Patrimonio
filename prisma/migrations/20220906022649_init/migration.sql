/*
  Warnings:

  - Added the required column `valor` to the `Moveis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `moveis` ADD COLUMN `valor` FLOAT NOT NULL;
