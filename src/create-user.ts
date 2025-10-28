import { PrismaClient } from '../generated/prisma/client.js'

const prisma = new PrismaClient({log: ['info', 'query'],})

async function main() {
  // ... you will write your Prisma Client queries here
    await prisma.user.create({
        data: {
            email: "dinesh@gmail.com",
            name: "Dinesh Aiya"
        }
    })
}

main()
  .then(async () => {
    console.log("Done with the query");
    
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    // process.exit(1)
  })