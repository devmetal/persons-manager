# persons-manager
Simple react based manager app

[The running version of this app](http://metaladam.net:8080/)

## Stack
On the backend i use nodejs with express and flow types.
On frontend i use react via create-react-app, redux, and flow.

## Structure
This is the main folder of application. This holds the backend.
The backend provide one api endpoint for download the json file.
Also use a static folder for html and javascripts.

The client directory holds the code of react application.
The center of app is the reducers and actions. They are holds the main logic.
Also i use reselect library for maintain the components data.

# Installation 
This project based on yarn package manager, but also the all npm command working well.

## Install deps

The main folder and the client folder holds own package.json file,
so we need install deps in two place.

In the root of repo:

```bash
npm install
cd client
npm install
```

After this, the all dependency is ready to use.

## Development mod
For developing, we need just call npm start in root of project folder:
This will be start the backend, and the client in development mode.

```bash
npm start
```

After this, you have to navigate the http://localhost:3000 and see the app.

## Production
For production use, we need call npm run build command in the project root folder:
This will transplie the backend, and the frontend.

```bash
npm run build
```

After this, if we want to start the app, the main entry point of app is the build/index.js
This is the main file after build the solution.

So here we can start the app with any runner or just simple nodejs.

For example
```bash
NODE_ENV=production pm2 start build/index.js
```

After this, you have to navigate the http://localhost:8000 and see the app.

## Simpliest way
Just for the kickstart in production, we can use the deploy command.
This command will be build, and start the solution in production mode on 8080 port.

```bash
npm run deploy
```

After this, you have to navigate the http://localhost:8080 and see the app.

## Env vars

### NODE_ENV

On production we have to set this to production. If not, the app will not working.

### PORT

If we do not want to use 8000 port on production, we have to set this some other.
