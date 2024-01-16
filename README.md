# Next Auth v5

### Prerequisites

**Node version 18.7.x**

### Install packages

```shell
npm i
```

### Setup .env.template file
    
    ```shell    
    cp .env.template .env
    ```


### Setup Prisma
```shell
npx prisma generate
npx prisma db push
```

### Iniciar Aplicacion

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
