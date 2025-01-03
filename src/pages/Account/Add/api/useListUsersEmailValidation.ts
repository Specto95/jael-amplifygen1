import { clientAPI } from "@/utils/amplifyAPI/client";
import { listUsersEmailValidation } from "@/graphql/queries";
import { ListUsersQuery } from "@/API";

export async function useListUsersEmailValidation(email: string) {
  try {
    const result = (await clientAPI(listUsersEmailValidation, {
      email,
    })) as { data: ListUsersQuery };

    return result.data.listUsers?.items.length! > 0;
  } catch (er) {
    console.error("El correo ya existe");
  }
}
