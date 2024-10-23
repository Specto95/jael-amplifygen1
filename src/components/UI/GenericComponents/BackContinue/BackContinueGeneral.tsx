import { IBackContinueGeneralProps } from "@/interfaces/SideMenuSections/genericComponents";

export default function BackContinueGeneral({
  handleBackStep,
  handleNextStep,
  disabled,
}: IBackContinueGeneralProps) {
  return (
    <div className="generalForm__form-buttons">
      <button
        type="button"
        className="button__primary-submit"
        onClick={handleBackStep}
      >
        Atras
      </button>
      <button
        type="submit"
        className="button__primary-blue"
        disabled={disabled}
      >
        Continuar
      </button>
    </div>
  );
}
