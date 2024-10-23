import { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";

//*COMPONENTS
import { BranchOfficesListColumns } from "../BranchOfficesListColumns/BranchOfficesListColumns";

//*INTERFACES
import {
  IBranchOfficesListProps,
  IEditingState,
} from "./interfaces/IBranchOfficesList";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";
import { IUpdateBranchOfficeCommissionInput } from "./interfaces/inputs/IBranchOfficeListAPIInputs";

export function BranchOfficesList({
  listBranchOffices,
  isLoading,
  setIsLoading,
}: IBranchOfficesListProps) {
  const [editingState, setEditingState] = useState<IEditingState>({
    id: "",
    customCommission: 1,
  });
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] =
    useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleRowClick = (rowId: string) => {
    if (editingState?.id === rowId) {
    } else {
      setEditingState({ id: rowId, customCommission: 1 });
    }
    setIsEditing(true);
  };

  const updateEditingState = (newState: any) => {
    setEditingState(newState);
  };

  const tableRef = useRef<HTMLTableElement>(null);

  const handleDocumentClick = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    if (
      tableRef.current &&
      !tableRef.current.contains(targetElement) &&
      targetElement.tagName !== "TR"
    ) {
      setEditingState({
        id: "",
        customCommission: 1,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          isSecondButton: false,
        }}
        onSubmit={async (values) => {
          if (isConfirmDialogOpen) {
            if (
              confirm(
                "¿Estás seguro que deseas cambiar la comisión de esta sucursal?"
              )
            ) {
              try {
                const { updateBranchOfficeCommissionAPI } = await import(
                  "@/graphql/mutations"
                );
                const { clientAPI } = await import("@/utils/amplifyAPI/client");

                const updateBranchOfficeCommissionInput: IUpdateBranchOfficeCommissionInput =
                  {
                    id: editingState.id,
                    branchOffice_commission: editingState.customCommission,
                  };

                const updateBranchOfficeCommissionResult = await clientAPI(
                  updateBranchOfficeCommissionAPI,
                  updateBranchOfficeCommissionInput
                );

                setIsLoading!(true);
                setEditingState({
                  id: "",
                  customCommission: 1,
                });
              } catch (error) {
                console.log(error);
              }
            }

            try {
            } catch (error) {
              console.log(error);
            }
          }
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <Form onSubmit={handleSubmit} autoComplete={"off"}>
            <ShowTableData
              Columns={BranchOfficesListColumns}
              Data={listBranchOffices}
              notFoundDataMessage="
        No hay Sucursales Disponibles
      "
              editingState={editingState}
              updateEditingState={updateEditingState}
              onRowClick={handleRowClick}
              hasBackground={true}
              hasPagination={true}
              isEditing={true}
              isLoading={isLoading}
              setFieldValue={setFieldValue}
              setIsConfirmDialogOpen={setIsConfirmDialogOpen}
              tableRef={tableRef}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
