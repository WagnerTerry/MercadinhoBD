# Mercadinho BD

## Dependencias

--------------------Frontend

- npm install react-router-dom --save
- npm install --save @types/react-router-dom

--------------------Backend
- npm install --save express
- npm install --save-dev nodemon
- npm install --save morgan
- npm install --save mysql
- npm install --save multer
- npm install --save bcrypt
- npm install jsonwebtoken --save
- npm install cors
- npm i --save-dev @types/express
- npm i --save-dev @types/cors
- npm i typescript @types/node ts-node-dev -D
- npx tsc --init {
    npx tsc --init dentro de tsconfig: { target: es2020, "rootDir": "./src", "outDir": "./dist", "include": ["src"] }
}
- npx tsc {
    dentro de package-json { "scripts": { "test": "jest", "build": "tsc", "start": "node dist/server.js", "dev": "ts-node-dev src/server.ts" }, }
}
- npm install nodemailer
- npm i --save-dev @types/nodemailer { se inscrever no site mailtrap, para prosseguir com o envio de email}
- npm install jest -D
- npx jest --init
- npm install ts-node -D
- npm i -D jest @swc/jest {
    // A map from regular expressions to paths to transformers
   transform: {
     "^.+\\.(t|j)sx?$": ["@swc/jest"]
   },

}

-------------------- banco de dados - //Prisma-ORM

- npm i prisma -D
- npm i @prisma/client
- npx prisma init -- criar uma tabela { npx prisma migrate dev name new migration: create feedbacks }
- npx prisma studio // visualizar o banco - prisma studio localhost:5555








