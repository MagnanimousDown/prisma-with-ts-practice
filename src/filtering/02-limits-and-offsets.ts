import { PrismaClient } from "../../generated/prisma/client.js"

const prisma = new PrismaClient({
    log: ['info', 'query']
});

async function main(){
    const res = await prisma.post.findMany({
        take: 3,
        skip: 3
    })

    console.log(res);
    
}

main()

// here in the query we can see that $1 and $2 aren't logged here in the query parameter part in the log, for some reason (security reasons) to hide the sensitive data that's being inserted into the db, it is not shown in query by prisma, if we want to see it we can do it using a code snippet, let's try it in debug file.