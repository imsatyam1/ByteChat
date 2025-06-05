import { Prisma, PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

async function connectDB() {
    try {
        await prismaClient.$connect();
        console.log("MongoDB connected using Prisma!");
    } catch (error) {
        console.error("Mongo connection failed!");
        process.exit(1);
    }
}


export { prismaClient,connectDB}