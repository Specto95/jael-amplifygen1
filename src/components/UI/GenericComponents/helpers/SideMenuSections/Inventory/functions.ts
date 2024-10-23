export const handleProductsChecked = (
  selectedOutcomeData: any[] | undefined
) => {
  if (selectedOutcomeData!.length === 0) {
    return alert("No hay productos seleccionados");
  }
};
