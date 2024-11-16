-- CreateTable
CREATE TABLE "GumroadPurchases" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION,
    "status" TEXT NOT NULL DEFAULT 'completed',

    CONSTRAINT "GumroadPurchases_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GumroadPurchases_email_idx" ON "GumroadPurchases"("email");
