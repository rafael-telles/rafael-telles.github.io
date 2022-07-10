import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    let counter = await prisma.counter.findFirst()
    counter = await prisma.counter.upsert({
        create: {
            count: 0,
        },
        update: {
            count: { increment: 1 }
        },
        where: {
            id: counter.id
        }
    })
    
    return {
        count: counter.count
    }
})
