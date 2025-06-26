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
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PUT"
};
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
    } // --- 處理 PUT 方法 (更新資料) ---
    else if (event.path === "/qAndA" && event.httpMethod === "PUT") {
        console.log('Handling PUT request for /qAndA');
        try {
            // 1. 解析請求主體 (Request Body)
            const requestBody = JSON.parse(event.body);
            console.log('Request body:', requestBody);

            // 2. 檢查請求主體中是否有 'data' 欄位，並且確保它是陣列
            if (!requestBody || !Array.isArray(requestBody.data)) {
                console.warn("Invalid request body. 'data' array is missing or malformed.");
                return {
                    statusCode: 400, // Bad Request
                    headers: headers,
                    body: JSON.stringify({ error: "Invalid request body. Expected a JSON object with a 'data' array." })
                };
            }

            // 3. 設定要更新的 DynamoDB 參數
            const params = {
                TableName: TABLE_NAME,
                Key: {
                    pk: "qanda",
                    sk: "all"
                },
                // 使用 SET 來更新 data 屬性，並加上更新時間
                // UpdateExpression: "SET #data = :data, #updatedAt = :updatedAt",
                UpdateExpression: "SET #data = :data",
                ExpressionAttributeNames: {
                    "#data": "data",
                    // "#updatedAt": "updatedAt"
                },
                ExpressionAttributeValues: {
                    ":data": requestBody.data,
                    // ":updatedAt": new Date().toISOString()
                },
                // 回傳更新後的新值
                ReturnValues: "UPDATED_NEW"
            };

            // 4. 執行 UpdateCommand
            // const command = new UpdateCommand(params);
            // await docClient.send(command);
            await docClient.update(params).promise();
            console.log('Successfully updated Q&A data in DynamoDB.');

            // 5. 回傳成功回應
            return {
                statusCode: 200,
                headers: headers,
                body: JSON.stringify({ message: "Successfully updated Q&A data" })
            };
        } catch (err) {
            console.error("DynamoDB PUT error:", err);
            return {
                statusCode: 500,
                headers: headers,
                body: JSON.stringify({ error: "Failed to save Q&A data", details: err.message })
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
            console.log('result:', result);
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
    }else if (event.path === "/about" && event.httpMethod === "PUT") {
        console.log('Handling PUT request for /about');
        try {
            // 1. 解析請求主體 (Request Body)
            const requestBody = JSON.parse(event.body);
            console.log('Request body:', requestBody);

            // 2. 檢查請求主體中是否有 'data' 欄位，並且確保它是陣列
            if (!requestBody) {
                console.warn("Invalid request body. 'brandStory' or 'exp' array is missing or malformed.");
                return {
                    statusCode: 400, // Bad Request
                    headers: headers,
                    body: JSON.stringify({ error: "Invalid request body. Expected a JSON object with a 'brandStory/exp' array." })
                };
            }

            // 3. 設定要更新的 DynamoDB 參數
            const params = {
                TableName: TABLE_NAME,
                Key: {
                    pk: "about",
                    sk: "all"
                },
                // 使用 SET 來更新 data 屬性，並加上更新時間
                // UpdateExpression: "SET #data = :data, #updatedAt = :updatedAt",
                UpdateExpression: "SET #brandStory = :brandStory, #exp = :exp",
                ExpressionAttributeNames: {
                    "#brandStory": "brandStory",
                    "#exp": "exp",
                    // "#updatedAt": "updatedAt"
                },
                ExpressionAttributeValues: {
                    ":brandStory": requestBody.brandStory,
                    ":exp": requestBody.exp,
                    // ":updatedAt": new Date().toISOString()
                },
                // 回傳更新後的新值
                ReturnValues: "UPDATED_NEW"
            };

            // 4. 執行 UpdateCommand
            // const command = new UpdateCommand(params);
            // await docClient.send(command);
            await docClient.update(params).promise();
            console.log('Successfully updated about about in DynamoDB.');

            // 5. 回傳成功回應
            return {
                statusCode: 200,
                headers: headers,
                body: JSON.stringify({ message: "Successfully updated about data" })
            };
        } catch (err) {
            console.error("DynamoDB PUT error:", err);
            return {
                statusCode: 500,
                headers: headers,
                body: JSON.stringify({ error: "Failed to save about data", details: err.message })
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
