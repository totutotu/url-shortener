# URL-shortener

This URL-shortner app consists of a simple Node + TS + express API that uses a Dockerized postgresql database for data storage and a React client fueled by create-react-app and Material-UI.

## Development

To run this app you need to have three separate terminals running and docker, docker-compose, node and npm installed. 

### Database


From the root of the project run:

```
docker-compose up
```

And now your database should be up and running.

### Server

Navigate to the `server` folder, install the depencies through `npm` and start the server dev environment with the command `npm start`.

The api runs by default in the port `3006`.

All configuration settings are defined in the .env -file.

Commands:

```
cd ./server
npm install
npm start
```

### Client

Navigate to the `client` folder, install the depencies through `npm` and start the client dev environment with the command `npm start`.

The client runs by default in the port `3000`.

The api url is set ready within the `.env` file. 

Commands:

```
cd ./server
npm install
npm start
```

After these the whole app should be running in http://localhost:3000 .
