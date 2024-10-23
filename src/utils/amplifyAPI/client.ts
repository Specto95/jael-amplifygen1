interface IInput {
  input?: object | { input: object };
}

interface IClientObj {
  query: string;
  variables?: {
    input?: object;
  };
}

export async function clientAPI(API: string, input?: IInput["input"]) {
  const { generateClient } = await import("aws-amplify/api");

  const client = generateClient();

  const clientObj: IClientObj = {
    query: API,
    variables: {},
  };

  if (input) {
    clientObj["variables"]! = input;
  }

  const result = await client.graphql(clientObj);

  return result;
}
