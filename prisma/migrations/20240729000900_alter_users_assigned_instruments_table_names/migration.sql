/*
  Warnings:

  - The primary key for the `users_assignated_instruments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `instrumentId` on the `users_assignated_instruments` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `users_assignated_instruments` table. All the data in the column will be lost.
  - Added the required column `instrument_id` to the `users_assignated_instruments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `users_assignated_instruments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users_assignated_instruments" DROP CONSTRAINT "users_assignated_instruments_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "users_assignated_instruments" DROP CONSTRAINT "users_assignated_instruments_userId_fkey";

-- AlterTable
ALTER TABLE "users_assignated_instruments" DROP CONSTRAINT "users_assignated_instruments_pkey",
DROP COLUMN "instrumentId",
DROP COLUMN "userId",
ADD COLUMN     "instrument_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "users_assignated_instruments_pkey" PRIMARY KEY ("instrument_id", "user_id");

-- AddForeignKey
ALTER TABLE "users_assignated_instruments" ADD CONSTRAINT "users_assignated_instruments_instrument_id_fkey" FOREIGN KEY ("instrument_id") REFERENCES "instruments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_assignated_instruments" ADD CONSTRAINT "users_assignated_instruments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
