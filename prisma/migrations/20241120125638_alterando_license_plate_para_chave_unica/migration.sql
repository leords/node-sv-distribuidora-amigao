/*
  Warnings:

  - A unique constraint covering the columns `[licensePlate]` on the table `vehicles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "vehicles_licensePlate_key" ON "vehicles"("licensePlate");
