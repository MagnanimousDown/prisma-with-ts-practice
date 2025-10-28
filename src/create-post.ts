import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

async function main() {
    await prisma.post.create({
        data: {
            title: "PostgreSQL vs MySQL",
            content: "Comparing two popular relational databases.",
            // authorId: 1     // OR
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
}

// Or we can directly write authorId: 1

main()
.then(async () => {
    console.log("Done with the query");
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();    
})