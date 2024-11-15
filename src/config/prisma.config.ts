// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      },
    },
    // Add some basic optimization settings
    log: ['error', 'warn'],
    // connectionTimeout: 20000,
  });
};

type PrismaGlobal = {
  prisma: ReturnType<typeof prismaClientSingleton> | undefined;
};

const globalForPrisma = globalThis as unknown as PrismaGlobal;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

globalForPrisma.prisma = prisma;

export default prisma;