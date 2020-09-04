# Organisation Viewer

React Project for logged in users to upload an excel sheet with organizationnumbers and view the follwing content in a table.
If organisation numbers are missing this should be logged in Sentry.io.
Sentry will also log missing fields, with the organisation number.

Content (Add screen pictureg)

- Org. nr.
- Org. name
- Council
- homepage
- Sector code
- Numbers of employed

## The Project is using:

- Auth 0
- Sentry.io

## Setup - step by step

```bash
git clone https://github.com/hiruthstautland/organization_viewer.git

cd organization_viewer

npm install
```

- Add .env file to root

### [Auth0](https://auth0.com/)

Create account and/or project.
Follow instructions: [link](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22button%22%7D)
Add the following from Auth0 to you .env file:

- AUTH_DOMAIN="your_domain"
- AUTH_CLIENT_ID="your_client_id"

### [Sentry](https://sentry.io/welcome/)

Create account and/or create projects.
One for logging errors on client side - React.js
And on for error loggin on server side - Node.js
For instructions: [link](https://sentry.io/signup/)

Add the following from Sentry to your .env file:

- SENTRY_DSN_FRONT="your_dsn_react"
- SENTRY_DSN_BACK="your_dsn_node"

### Server

The project uses node (express) server-side, with the nodemon package.
Nodemon restarts the server once changes has been made and saved.
The server is presenting data from API_URL_EXTERNAL_SERVER.
You will need to add the following to your .env file:

- PORT="your_port"
- API_URL_EXTERNAL_SERVER="your_external_server_api"

The express server is presenting data to the client side via API_URL:
You will need to add the following to your .env file:

- API_URL="your_api_url"

### Webpag

Webpack is doing the bundling.
For development mode add the following to your .env file:

- NODE_ENV="DEVELOPMENT"

# START

- Start express server

```
npm run nodemon
```

- Start webpack

```
npm start
```

## React and Excel integration

### Excel to react

The ExcelRenderer comp is used from the react-excel-render npm pack from Ashish Deshpande - [link](https://github.com/ashishd751/react-excel-renderer)

### Object to excel

The ExportCSV comp is used.

- For more info about exporting data to excel with react - [link](https://blog.bitsrc.io/exporting-data-to-excel-with-react-6943d7775a92#:~:text=Here%20is%20a%20simple%20app,downloaded%20in%20an%20excel%20sheet.&text=You%20can%20import%20the%20project%20from%20here%20and%20run%20it%20directly)

## License

[MIT](https://choosealicense.com/licenses/mit/)
