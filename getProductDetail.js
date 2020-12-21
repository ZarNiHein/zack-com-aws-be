const AWS =require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.main = async(event,context) => {
    
    let responseBody ="";
    let statusCode = 0;

    const params = {
        TableName: process.env.tableName,
        Key: {
            productId: event.pathParameters.p_id
        }
    }

    try{
        const data = await dynamoDb.scan(params).promise();
        responseBody = JSON.stringify(data.Items);
        statusCode = 200
    } catch(e) {
        responseBody = `Item not found: ${e}`;
        statusCode = 500
    }

    // if(!data.Item) {
    //     throw new Error("Item not found.")
    // }

    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        body: responseBody
    };
}