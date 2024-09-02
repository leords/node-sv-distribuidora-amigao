/*
  Warnings:

  - You are about to alter the column `price` on the `cartItems` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Decimal`.
  - You are about to alter the column `total` on the `cartItems` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cartItems" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cartId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "price" DECIMAL NOT NULL DEFAULT 0.0,
    "quantity" INTEGER NOT NULL,
    "total" DECIMAL NOT NULL DEFAULT 0.0,
    CONSTRAINT "cartItems_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "carts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "cartItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cartItems" ("cartId", "id", "price", "productId", "productName", "quantity", "total") SELECT "cartId", "id", "price", "productId", "productName", "quantity", "total" FROM "cartItems";
DROP TABLE "cartItems";
ALTER TABLE "new_cartItems" RENAME TO "cartItems";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
