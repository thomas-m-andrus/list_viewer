# list_viewer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
###in a separate terminal; navigate to fake_db and run the following command:
```
json-server employees.js
```
###This will start the employees server

###then go back to the current terminal and run the following command:
```
npm run serve
```
###This will start the 

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###Dockerize

### Build the Docker Container
```
cd </your/project/path>
docker build -t dockerized-vue .
```
### Run the Docker Container
```
docker run -it -p 8082:8080 --rm --name dockerized-vue-app1 dockerized-vue
```
