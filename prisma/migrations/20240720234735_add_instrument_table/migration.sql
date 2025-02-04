-- CreateTable
CREATE TABLE "instruments" (
    "id" SERIAL NOT NULL,
    "instrument" VARCHAR(80) NOT NULL,
    "type" VARCHAR(80) NOT NULL,
    "description" VARCHAR(80) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "instruments_pkey" PRIMARY KEY ("id")
);
