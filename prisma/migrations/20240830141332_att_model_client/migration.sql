/*
  Warnings:

  - Added the required column `address` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "salesman" TEXT NOT NULL,
    "serviceDay" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_clients" ("city", "id", "name", "phone", "salesman", "serviceDay", "status") SELECT "city", "id", "name", "phone", "salesman", "serviceDay", "status" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
