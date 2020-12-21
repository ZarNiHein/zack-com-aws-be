const AWS =require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.main = async(event,context) => {
    
    let responseBody ="";
    let statusCode = 0;

    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableName,
        Key: {
            productId: event.pathParameters.p_id || data.productId,
            sizeNo: data.sizeNo
        }
    }

    try{
        const data = await dynamoDb.delete(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 204
    } catch(e) {
        responseBody = `Unable to delete the product: ${e}`;
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