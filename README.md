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

## Write selenium code with Python

```sh
poetry new healenium-test-python
cd healenium-test-python
poetry add selenium
```

or 

```sh
cd healenium-test-python
pooetry install
```

run tests

```sh
poetry run python main.py
```

## Write selenium code with JavaScript

```sh
mkdir healenium-test-js
cd healenium-test-js
npm init -y
npm install selenium-webdriver
npm install --save-dev typescript @types/node
npm install --save-dev @types/selenium-webdriver
npx tsc --init
sh -c 'mkdir -p "$(dirname "$0")" && touch "$0"' src/index.ts
```

## Troubleshooting

### Selenium remote driver doesn't work

It might be resolved by the following action if you'll meet with `KeyError: 'sessionId'`:

- `Settings` > `General` > Check "Use Rosetta for x86/amd64 emulation on Apple Silicon"
