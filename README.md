# Game School JS Rewrite

## Repository for migrating Crescent School of Gaming & Bartending's Access Database & Forms to MySQL & Javascript

### How to contribute

1. Clone this directory. Open a terminal from the root of the project and run the command:

```bash
npm install && cd client && npm install && cd ..
```

This will install the node modules you will need for the project for both Node and React.

2. Duplicate the env files found in the project's root directory & client directory and name the new ones ".env". Fill out the environment variables in your new .env files. If you add any environment variables while developing, try to add them to the env files, but with an empty string, so that it is clear what environment variables must be filled out to host the project. Also remember to make the API Keys the same in your node and react .env files so that you can create and test APIs.

3. From the project root directory, run the command:

```bash
npm run build
```

in order to build the javascript files needed from your typescript.

3. Open a terminal from the root directory of the project and run the command:

```bash
npm run start-dev
```

4. The webpage that opens from npm start is the webpage that will update as you write your code.


### How to prepare for production

- Open the client/package.json file and remove the line that begins with "proxy:" at the end of the file. Now you can host the project by just running "node index.js"
