-- CreateTable
CREATE TABLE "Profession" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "accessLevel" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "professionId" INTEGER NOT NULL,
    CONSTRAINT "users_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "carts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" REAL NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "carts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "cartItems" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cartId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total" REAL NOT NULL,
    CONSTRAINT "cartItems_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "carts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
