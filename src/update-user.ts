import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

async function main(){

    await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: "Omiiii"
        }
    })
}

main()
.then(async () => {
    console.log("Done with the query");
    await prisma.$disconnect();
    
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    
})