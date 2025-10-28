import { PrismaClient } from "../../generated/prisma/client.js"

const prisma = new PrismaClient({
    log: ['info', 'query']
});

async function main(){
    const res = await prisma.user.findMany({
        where: {
            email: {
                endsWith: "@google.com"
            },
            posts: {
                some: {
                    published: true
                }
            }
        }
    })
    console.log(res);
    
}

main()