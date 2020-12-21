const AWS =require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.main = async(event,context) => {
    
    let responseBody ="";
    let statusCode = 0;

    const params = {
        TableName: process.env.tableName
    }

    try{
        const data = await dynamoDb.scan(params).promise();
        responseBody = JSON.stringify(data.Items);
        statusCode = 200
    } catch(e) {
        responseBody = `Unable to get products: ${e}`;
        statusCode = 500
    }
    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        body: responseBody
    };
}