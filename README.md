# cronify

### .env file
```
NODE_ENV=
```


### Install dependencies
```
npm i
```


### Start Schedular in development
```
npm run dev
```


### Build typescript project
```
npm run build
```


### Start Schedular from build
```
npm start
```


### Clean build files
```
npm run clean
```


### Check lint issues
```
npm run lint
```


### Fix autofixable lint issues
```
npm run lint:fix
```


### Run test
```
npm run test
```


### Build docker image
```
docker build -t cronify:0.0.1 .
```


### Run docker image
```
docker run -d docker.io/library/cronify:0.0.1
```


### Run docker image using docker-compose
```
docker-compose up -d
```
*or*
```
docker-compose up -d --force --remove-orphans
```