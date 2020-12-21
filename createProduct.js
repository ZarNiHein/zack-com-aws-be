const uuid= require("uuid");
const AWS= require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.main = async(event,context) => {
    
    let responseBody ="";
    let statusCode = 0;

    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableName,
        Item: {
            productId: data.productId,
            title: data.title,
            category:data.category,
            brand: data.brand,
            imgUrl: data.imgUrl,
            sizeNo: data.sizeNo,
            countInstock: data.countInstock,
            price: data.price,
            review: data.review,
            description: data.description,
            createdAt: Date.now()
        }
    };

    try{
        await dynamoDb.put(params).promise();
        responseBody= params.Item
        statusCode = 201
    } catch(e) {
        responseBody = `Unable to create products: ${e}`;
        statusCode = 403
    }

    return {
        statusCode:statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        body: responseBody
    };
}