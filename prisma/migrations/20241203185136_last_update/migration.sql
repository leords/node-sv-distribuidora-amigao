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
CREATE TABLE "clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "salesman" TEXT NOT NULL,
    "serviceDay" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL DEFAULT 0.0,
    "segment" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,
    "weight" DECIMAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "PaymentMethod" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "carts" (
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

-- CreateTable
CREATE TABLE "cartItems" (
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

-- CreateTable
CREATE TABLE "payments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" DECIMAL NOT NULL DEFAULT 0.0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    "paymentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "payments_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "payments_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "PaymentMethod" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "payments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "model" TEXT NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "loads" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vehiclesId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'aberta',
    "quantity" INTEGER NOT NULL,
    "total" DECIMAL NOT NULL DEFAULT 0.0,
    "weight" INTEGER NOT NULL,
    CONSTRAINT "loads_vehiclesId_fkey" FOREIGN KEY ("vehiclesId") REFERENCES "vehicles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "loads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_licensePlate_key" ON "vehicles"("licensePlate");
