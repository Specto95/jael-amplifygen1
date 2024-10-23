import { IListProvidersInventoryByNameAPI } from "../../Three/IncomeInventoryGeneralData/api/interfaces/IUseListProvidersInventoryByName";

export function isArrayEmpty(array: any[]) {
  return array.every((element) => {
    // Assuming an empty object has no properties
    return Object.keys(element).length === 0;
  });
}

export function reshapeData(data: any[]) {
  const reshapedData: any = [];

  data.forEach((item) => {
    item.responsible?.forEach((res: IListProvidersInventoryByNameAPI) => {
      reshapedData.push({
        responsible: {
          fullname: res.fullname,
          id: res.id,
        },
      });
    });
  });

  return reshapedData;
}
