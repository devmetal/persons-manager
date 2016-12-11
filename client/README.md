# persons-manager
Simple react based manager app

[The running version of this app](http://metaladam.net:8080/)

## Stack
On the backend i use nodejs with express and flow types.
On frontend i use react via create-react-app, redux, and flow.

## Structure
This is the main folder of application. This holds the backend.
The backend provide one api endpoint to download the json file.
Also use a static folder for html and javascripts.

The client directory holds the code of react application.
The center of the app is the reducers and actions. They hold the main logic.
Also i use reselect library to maintain the components data.

# Installation 
This project based on yarn package manager, but also all npm command working.

## Install deps

The main folder and the client folder holds own package.json file,
so we need to install deps in two place.

In the root of repo:

```bash
npm install
cd client
npm install
```

After this, all dependency is ready to use.

## Development mod
For developing, we need to call npm start in the project root folder:
This will start the backend and the client in development mode.

```bash
npm start
```

After this, you have to navigate to http://localhost:3000 and see the app.

## Production
For production use, we need to call npm run build command in the project root folder:
This will transpile the backend and the frontend.

```bash
npm run build
```

After this, if we want to start the app, the main entry point of app is the build/index.js.
So here we can start the app with any runner or just simple nodejs.

For example
```bash
NODE_ENV=production pm2 start build/index.js
```

After this, you have to navigate to http://localhost:8000 and see the app.

## Simpliest way
Just for the kickstart production, we can use the deploy command.
This command will build, and start the solution in production mode on 8080 port.

```bash
npm run deploy
```

After this, you have to navigate to http://localhost:8080 and see the app.

## Env vars

### NODE_ENV

On production we have to set this to production. If not, the app won't work.

### PORT

If we don't want to use 8000 port on production, we have to set this to something else.
