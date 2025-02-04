-- CreateTable
CREATE TABLE "users_assignated_instruments" (
    "instrumentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_assignated_instruments_pkey" PRIMARY KEY ("instrumentId","userId")
);

-- AddForeignKey
ALTER TABLE "users_assignated_instruments" ADD CONSTRAINT "users_assignated_instruments_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "instruments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_assignated_instruments" ADD CONSTRAINT "users_assignated_instruments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
