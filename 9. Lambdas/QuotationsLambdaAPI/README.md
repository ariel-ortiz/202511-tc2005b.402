# AWS Lambda Function Quotations Web API

## Assumptions

To run the code in the `QuotationsLambdaAPI/` folder as an AWS Lambda Function, the following must be true:

- The contents of this folder are accessible within an AWS Cloud9 environment.
- An AWS RDS MySQL instance is running with a database named `web_database`. This database contains a `quotations` table populated with data from the `quotations.sql` script.

## Create the Lambda Function

Create the `QuotationsLambdaAPI` Lambda function using the AWS Lambda console as explained somewhere else.

## Define the Required Environment Variables

Define the following environment variables with their corresponding values in the **ENVIRONMENT VARIABLES** section of the `QuotationsLambdaAPI` function within the AWS Lambda console:

- `MYSQL_HOST`: Endpoint of the RDS MySQL instance.
- `MYSQL_USER`: Master username for the RDS instance.
- `MYSQL_PASSWORD`: Master password for the RDS instance.

## Install Dependencies

The Lambda functions requires the following Node modules: `cors`, `express`, `mysql2`, and `@codegenie/serverless-express`. In the current folder (`QuotationsLambdaAPI/`), type at the terminal:

    npm install cors express mysql2 @codegenie/serverless-express

## Deploy the Lambda Function

Upload the `QuotationsLambdaAPI` function, following the instructions provided elsewhere. The funtion’s URL is available from the Lambda console.

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
Updates the quotations collection resource with the given ID. The request body accepts a JSON object containing only the keys you wish to update (`"author"` and/or `"excerpt"`) with their desired string values. If a key is not present, its current value will be preserved.

- `DELETE /quotations` \
Deletes the entire collection of quotations.

- `DELETE /quotations/{ID}` \
Deletes the resource from the quotations collection with the given ID.
