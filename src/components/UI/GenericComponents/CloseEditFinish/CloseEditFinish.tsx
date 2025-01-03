import { Back } from "../Back/Back";
import { ICloseEditFinishProps } from "./interfaces/ICloseEditFinish";

export function CloseEditFinish({
  isEditing,
  setIsEditing,
  setFieldValue,
  customFinishText = "Finalizar Pago",
  isMutable = false,
}: ICloseEditFinishProps) {
  return (
    <div className="flex__spacing-betweenMY">
      <Back customText="Cerrar" />

      {isMutable ? (
        <div className="flex__spacing">
          {/* <button
            type="button"
            className="button__secondaryFit"
            onClick={() => setIsEditing!(!isEditing)}
          >
            {isEditing ? "Confirmar" : "Editar Pago"}
          </button> */}

          <button
            type="submit"
            className="button__primary-blue"
            onClick={() => {
              if (confirm("¿Estas seguro de finalizar el pago?")) {
                setFieldValue!("isSecondButton", true);
              }
            }}
            disabled={isEditing}
          >
            {customFinishText}
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
