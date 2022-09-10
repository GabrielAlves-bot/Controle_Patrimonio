-- DropForeignKey
ALTER TABLE `enderecos` DROP FOREIGN KEY `Enderecos_imovelId_fkey`;

-- AddForeignKey
ALTER TABLE `Imoveis` ADD CONSTRAINT `Imoveis_imovelId_fkey` FOREIGN KEY (`imovelId`) REFERENCES `Enderecos`(`imovelId`) ON DELETE RESTRICT ON UPDATE CASCADE;
