# Organization Viewer

React Project for logged in users to upload an excel sheet with organizationnumbers and view the follwing content in a table.
If organizationnumbers are missing this will be logged in Sentry.io.
Sentry will also log missing fields.

Content:

- Org. nr.
- Org. name
- Council
- homepage
- Sector code
- Numbers of employed

## Installation

Use the npm to install

```
npm install
```

## The Project is using:

- Auth 0
- Sentry.io
- Github
- react-excel-render

## Setup - step by step

- download/clone the repositor
- run: npm install
- add .env file
- add env variables for:

- PORT=(SERVER_PORT)
- NODE_ENV=(DEVELOPMENT)
- AUTH_DOMAIN=(AUTH_DOMAIN)
- AUTH_CLIENT_ID=(AUTH_CLIENT_ID)

## React and Excel integration

### Excel to react

this app uses parts of the react-excel-render npm pack from Ashish Deshpande - [link](https://github.com/ashishd751/react-excel-renderer)

### Object to excel

- For more info about exporting data to excel with react - [link](https://blog.bitsrc.io/exporting-data-to-excel-with-react-6943d7775a92#:~:text=Here%20is%20a%20simple%20app,downloaded%20in%20an%20excel%20sheet.&text=You%20can%20import%20the%20project%20from%20here%20and%20run%20it%20directly)

## License

[MIT](https://choosealicense.com/licenses/mit/)

```

```
