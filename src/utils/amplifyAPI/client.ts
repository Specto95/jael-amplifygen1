interface Input {
  input?: object | { input: object };
}

interface ClientObj {
  query: string;
  variables?: {
    input?: object | Input["input"];
  };
}

export async function clientAPI<T>(
  API: string,
  input?: Input["input"],
  isMutation?: boolean
) {
  const { generateClient } = await import("aws-amplify/api");

  const client = generateClient();

  const clientObj: ClientObj = {
    query: API,
    variables: isMutation ? { input } : input,
  };

  const result = (await client.graphql(clientObj)) as T;

  return result;
}
