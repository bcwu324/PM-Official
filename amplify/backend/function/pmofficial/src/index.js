

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
    return {
        statusCode: 200,
     headers: {
         "Access-Control-Allow-Origin": "https://www.pmbabystudio.com",
         "Access-Control-Allow-Headers": "*",
         "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
     },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
