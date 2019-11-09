# ts-node-starter

Typescript CLI project based on ts-node.


Table of Contents
-----------------
1. [Step 1: Create an empty Readers project](#step1-create-an-empty-typescript-project)



# Step 1: Create an empty typesript project

Create an empty npm project,

    npm init

Fill in some information then we get a `package.json` file:


```json
{
  "name": "ts-node-starter",
  "version": "1.0.0",
  "description": "Typescript CLI project based on ts-node",
  "main": "index.ts",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/soulmachine/ts-node-starter.git"
  },
  "keywords": [
    "ts-node",
    "typescript",
    "starter"
  ],
  "author": "soulmachine",
  "license": "Apache-2.0",
}
```

Install `ts-node` and `typescript`,

    npm install -D typescript ts-node

and add a script to your `package.json` like this:

```json
{
  "scripts": {
    "start": "ts-node ./src/cli/cli.ts"
  }
}
```

Finally we get a complete `package.json` file:

```json
{
  "name": "ts-node-starter",
  "version": "1.0.0",
  "description": "Typescript CLI project based on ts-node",
  "main": "index.ts",
  "dependencies": {},
  "devDependencies": {
    "ts-node": "^8.4.1",
    "typescript": "^3.7.2"
  },
  "scripts": {
  	"start": "ts-node ./src/cli/cli.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/soulmachine/ts-node-starter.git"
  },
  "keywords": [
    "ts-node",
    "typescript",
    "starter"
  ],
  "author": "soulmachine",
  "license": "Apache-2.0",
}
```

Create a file `./src/cli/cli.ts`:

```typescript
// define the class with constructor
class Author {
    constructor (public Name: string) { }
}
// create the instance of the class
let author = new Author("Kunal Chowdhury");
// print the information in the console
console.log("\nHello Readers,");
console.log("Thanks for visiting my blog");
console.log(`\t~ ${author.Name}`);
```

Run this project by `npm start`, you'll see some greeting messages.
