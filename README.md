https://github.com/100xDevs-hkirat/week-13-prisma - today's class notes/scripts to run for prisma

You can check the cal.com or dub.sh's github repo for their prisma schema and understand how they defined their schema for the project.

The commands I ran setting up:
https://www.prisma.io/docs/getting-started/quickstart-sqlite - docs for reference and details

```bash
npm init -y
npm install typescript tsx @types/node --save-dev
```

```bash
npx tsc --init
```

```bash
npm install prisma --save-dev
```

```bash
npx prisma init --datasource-provider sqlite --output ../generated/prisma
```

## define the schema

```bash
npx prisma migrate dev --name init
```

## Write what data to insert and then build the ts file `tsc -b` and then followed by `node dist/create-user.ts` and then

```bash
npx prisma studio
```

You will see the nice GUI provided by Prisma just like mongodb compass.


We can also add logs and query parameters to see what query it ran when executing the js file:

```ts
const prisma = new PrismaClient({log: ['info', 'query'],})
```

Instead of 
```ts
const prisma = new PrismaClient()
```