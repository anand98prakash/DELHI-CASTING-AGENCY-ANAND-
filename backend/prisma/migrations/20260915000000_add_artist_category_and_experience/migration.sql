-- AlterTable
ALTER TABLE "ArtistProfile" ADD COLUMN IF NOT EXISTS "primaryCategory" TEXT DEFAULT 'Actor',
ADD COLUMN IF NOT EXISTS "experience" TEXT;
