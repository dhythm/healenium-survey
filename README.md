# Survey Healenium

This repository aims to survey [Healenium](https://github.com/healenium/healenium).

## Execute Healenium

After installing Healenium by the installation in Doc,
move to `healenium` directory.

```sh
cd healenium
```

and run,

```sh
docker-compose up -d
```

## Create an app as testing target 

```sh
npx bun x create-vite app --template react-ts
cd app
npx bun install
npx bun dev
```

## Write tests with Python

```sh
poetry new healenium-test
cd healenium-test
poetry add selenium
```

or 

```sh
cd healenium-test
pooetry install
```

run tests

```sh
poetry run python main.py
```
