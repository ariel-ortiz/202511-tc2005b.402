# Quotations Web API

## Assumptions

These are the assumptions required to run the code conained in this folder (`QuotationsExpressAPI/`):

- An AWS RDS MySQL instance is running with a database named `web_database`. This database contains a table, `quotations`, populated with data from the `quotations.sql` script.
- The following environment variables are defined with their expected values:
    - `C9_HOSTNAME`: Static IP address of the EC2 instance running the application.
    - `PORT`: Application listening port (default: 8080).
    - `MYSQL_HOST`: Endpoint of the RDS MySQL instance.
    - `MYSQL_USER`: Master username for the RDS instance.
    - `MYSQL_PASSWORD`: Master password for the RDS instance.

## Install Dependencies

The web application requires the following Node modules: `express` and `mysql2`. In the current folder (`QuotationsExpressAPI/`), type at the terminal:

    npm install express mysql2

## Run Web Application

Also in the current folder (`QuotationsExpressAPI/`), type at the terminal:

    nodemon app.mjs

The application displays the Web API URL. Press Ctrl-C at the terminal to terminate the server.

## Endpoint Documentation

You can use [postman](https://www.postman.com/) to test individually the behaviour of each of the following endpoints:

- `GET /quotations` \
Request the complete collection of quotations. \
Returns a JSON list with objects containing the keys `id`, `author`, `prelude` (the first three words of `excerpt`), and `url` (the URL to get the specific resource).

- `GET /quotations/{ID}` \
Requests a resource from the quotations collection with the given ID. \
Returns a JSON object containing the keys `id`, `author`, and `excerpt`.

- `POST /quotations` \
Create a new resource in the quotations collection. The data of the resource being created must be provided in the body of the request through a JSON object that contains the names (keys) `"author"` and `"excerpt"` associated with the desired string values.

- `PUT /quotations/{ID}` \
Updates the quotations collection resource with the given ID. The data of the resource being updated must be provided in the body of the request through a JSON object that contains the names (keys) `"author"` and `"excerpt"` associated with the desired string values.

- `DELETE /quotations` \
Deletes the entire collection of quotations.

- `DELETE /quotations/{ID}` \
Deletes the resource from the quotations collection with the given ID.
