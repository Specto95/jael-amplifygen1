import { clientAPI } from "@/utils/amplifyAPI/client";
import {
  listUsersEmailValidation,
  listValidateClientEmail,
} from "@/graphql/queries";
import { ListClientsQuery, ListUsersQuery } from "@/API";

export async function useValidateClientEmail(
  email: string
): Promise<string | null> {
  try {
    const resultUsers = (await clientAPI(listUsersEmailValidation, {
      email,
    })) as { data: ListUsersQuery };

    if (resultUsers?.data?.listUsers?.items[0]?.email) {
      return "El correo ya existe";
    }

    const resultClients = (await clientAPI(listValidateClientEmail, {
      email,
    })) as { data: ListClientsQuery };

    if (resultClients?.data?.listClients?.items[0]?.email) {
      return "El correo ya existe";
    }

    return null;
  } catch (error) {
    console.error("Validation error:", error);
    return "Error al validar el correo electrónico";
  }
}
