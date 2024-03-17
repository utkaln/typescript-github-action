import { APIGatewayEvent, Context } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent, context: Context) => {
  const message = event.body ? event.body : 'Hello from Lambda!';
  console.log(`Received message: ${message}`);
  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};
