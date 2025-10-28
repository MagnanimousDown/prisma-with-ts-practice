import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient({log: ['info', 'query']});

async function main() {
    // select * from user
    // if we hover over users variable we can see that it is an array of user so we can iterate over it using loops
    // const users = await prisma.user.findMany({});
    // console.log(users);

    // Find One instance using where condition / clause
    // const users = await prisma.user.findFirst({
    //     where: {
    //         email: "omkar@google.com"
    //     }
    // });
    // console.log(users);

    // getting combined data - users table data as well as post table data is so simple with prisma:
    const users = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: true
        }
    });
    console.log(users);
    
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