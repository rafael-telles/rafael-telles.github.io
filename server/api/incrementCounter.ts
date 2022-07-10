import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    let counter = await prisma.counter.findFirst()
    counter = await prisma.counter.update({
        where: {
            id: counter.id
        },
        data: {
            count: counter.count + 1
        }
    })
    
    return {
        count: counter.count
    }
})
