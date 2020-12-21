const AWS =require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.main = async(event,context) => {
    
    let responseBody ="";
    let statusCode = 0;

    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableName,
        Key: {
            productId: event.pathParameters.p_id,
            sizeNo: data.sizeNo
        },
        UpdateExpression: "SET imgUrl = :imgUrl, countInstock = :countInstock, price = :price, review = :review, description = :description",
        ExpressionAttributeValues: {
            ":imgUrl": data.imgUrl || null,
            ":countInstock": data.countInstock || null,
            ":price": data.price || null,
            ":review": data.review || null,
            ":description": data.description || null,
        },
        ReturnValues: "UPDATED_NEW"
    }

    try{
        const data = await dynamoDb.update(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 204
    } catch(e) {
        responseBody = `Unable to update products: ${e}`;
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