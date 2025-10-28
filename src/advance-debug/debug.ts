/// https://github.com/prisma/prisma/issues/5026

import { PrismaClient } from '../../generated/prisma/client.js'

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

async function main(){
    const res = await prisma.user.findMany({
        take: 2
    })

    console.log(res);
    
}

main()

prisma.$on("query", async (e) => {
    console.log(`${e.query} ${e.params}`)
});