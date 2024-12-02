/*
  Warnings:

  - You are about to drop the column `UserId` on the `loads` table. All the data in the column will be lost.
  - You are about to drop the column `cartId` on the `loads` table. All the data in the column will be lost.
  - Added the required column `loadId` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `loads` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_carts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DECIMAL NOT NULL DEFAULT 0.0,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "clientId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "paymentId" INTEGER NOT NULL,
    "loadId" INTEGER NOT NULL,
    "statusDelivery" TEXT NOT NULL DEFAULT 'pendente',
    CONSTRAINT "carts_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "carts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "carts_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "PaymentMethod" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "carts_loadId_fkey" FOREIGN KEY ("loadId") REFERENCES "loads" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_carts" ("clientId", "createdAt", "id", "paymentId", "quantity", "statusDelivery", "total", "userId") SELECT "clientId", "createdAt", "id", "paymentId", "quantity", "statusDelivery", "total", "userId" FROM "carts";
DROP TABLE "carts";
ALTER TABLE "new_carts" RENAME TO "carts";
CREATE TABLE "new_loads" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vehiclesId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'aberta',
    CONSTRAINT "loads_vehiclesId_fkey" FOREIGN KEY ("vehiclesId") REFERENCES "vehicles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "loads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_loads" ("createdAt", "id", "name", "status", "vehiclesId") SELECT "createdAt", "id", "name", "status", "vehiclesId" FROM "loads";
DROP TABLE "loads";
ALTER TABLE "new_loads" RENAME TO "loads";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
