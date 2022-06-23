# Google Cloud Serverless Template

## Requirements
* node: `16.13.0`
* serverless `3.18.2`
* mongoDB: `5.0`

## Prerequisites
### 1) MongoDB live sever: [Mongo Atlas](https://www.mongodb.com/atlas)
### 2) Create a new [GCloud Project](https://console.cloud.google.com/)
### 3) Install / Activate APIs and Services required for serverless deployments
  Go to the [APIs and Services](https://console.cloud.google.com/apis/dashboard) page in the GCloud dashboard, and on the left side menu look for `Library`
  Search and activate/install the following APIs:
  * Cloud Deployment Manager V2 API
  * Cloud Functions API
  * Cloud Build API
### 4) Create a service account for deployments
  A service account is like a regular account but for programmatic access only.
  Go to [IAM & Admin](https://console.cloud.google.com/iam-admin) and look for [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) on the left side menu
  Create a new service account. Name it however you want (eg: `sls-deployments`)

  Add the following permissions to the service account:
  * Cloud Functions Developer
  * Deployment Manager Editor
  * Storage Object Admin

### 5) Create a JSON credentials file for the service account
  Click on the newly created service account and go to the `KEYS` tab.

  Click on `ADD KEY` and select `JSON` then hit `CREATE`. The JSON file will be downloaded.
  
  Add this file into the ROOT of the project, inside a new folder called `.deployments`. Rename the file to `gcp_credentials.json`

### 6) Environment Variables (OPTIONAL)
  If you plan on having environment variables in your functions, copy `env_vars.example.yml` and rename it to `env_vars.yml`. Here you will put all the variblaes you will need in your project.

## Deployment

* `npm install` or `yarn install`
* `serverless deploy` or `sls deploy`
