/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();


const TABLE_NAME = "pmOfficial";
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    if (event.path === "/test") {
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
            },
            body: JSON.stringify({ message: "Hello from /test!" }),
        };
    }

    if (event.path === "/qAndA" && event.httpMethod === "GET") {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                pk: "qanda",
                sk: "all"
            }
        };

        try {
            const result = await docClient.get(params).promise();
            const qandas = result.Item?.data || [];

            return {
                statusCode: 200,
                headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
            },
                body: JSON.stringify(qandas)
            };
        } catch (err) {
            console.error("DynamoDB get error", err);
            return {
                statusCode: 500,
                headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
            },
                body: JSON.stringify({ error: "Failed to fetch data", details: err.message })
            };
        }
    }

    if (event.path === "/about" && event.httpMethod === "GET") {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                pk: "about",
                sk: "all"
            }
        };

        try {
            const result = await docClient.get(params).promise();
            console.log('result:',result);
            const about = result.Item || [];

            return {
                statusCode: 200,
                headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
            },
                body: JSON.stringify(about)
            };
        } catch (err) {
            console.error("DynamoDB get error", err);
            return {
                statusCode: 500,
                headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
            },
                body: JSON.stringify({ error: "Failed to fetch data", details: err.message })
            };
        }
    }



    return {
        statusCode: 200,
        headers: {
            // "Access-Control-Allow-Origin": "https://www.pmbabystudio.com",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
        },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
