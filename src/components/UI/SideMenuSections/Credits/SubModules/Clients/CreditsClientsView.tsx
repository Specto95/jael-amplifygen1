import styles from "../../../MainView.module.css";

import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";

import { CreditsList } from "./List/CreditsList";

//* HOOKS
import { useListClientsCreditsView } from "./api/useListClientsCreditsView";
import { fieldFiltersObjs } from "@/utils/globalObjs/Filters/fieldFIlters";

import { useSectionProvider } from "@/hooks/useSectionProvider";
import { CreditRequestStatus } from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";

export function CreditsClientsView() {
  const { setFilteredCheckedFields, filteredCheckedFields } =
    useSectionProvider();

  const { listClientsCreditsView, isLoading } = useListClientsCreditsView();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listClientsCreditsView,
    fieldFiltersObjs.CLIENTNAME as any
  );

  return (
    <>
      <UserView query={query} setQuery={setQuery} />
      <section className={styles.section__module}>
        <div className="flex__spacingCenter-MY">
          <div className="flex__spacing">
            <label htmlFor={CreditRequestStatus.APPROVED} className="bold">
              Créditos Aprobados
            </label>
            <input
              type="radio"
              name="creditRequestStatus"
              // checked={filteredCheckedFields.includes(
              //   CreditRequestStatus.APPROVED
              // )}
              // value={CreditRequestStatus.APPROVED}
              onChange={() => {
                // const isChecked = e.target.checked;

                setFilteredCheckedFields((prev: string[]) => {
                  // if (isChecked) {
                  // if (!prev.includes(CreditRequestStatus.APPROVED)) {
                  return [CreditRequestStatus.APPROVED];
                  // }
                  // } else {
                  //   return prev.filter(
                  //     (r: string) => r !== CreditRequestStatus.APPROVED
                  //   );
                  // }
                  // return prev;
                });
              }}
            />
          </div>
          <div className="flex__spacing">
            <label htmlFor={CreditRequestStatus.REJECTED} className="bold">
              Créditos Rechazados
            </label>
            <input
              type="radio"
              name="creditRequestStatus"
              // checked={filteredCheckedFields.includes(
              //   CreditRequestStatus.REJECTED
              // )}
              // value={CreditRequestStatus.REJECTED}
              onChange={() => {
                // const isChecked = e.target.checked;

                // setFilteredCheckedFields &&
                setFilteredCheckedFields((prev: string[]) => {
                  // if (isChecked) {
                  //   if (!prev.includes(CreditRequestStatus.REJECTED)) {
                  return [CreditRequestStatus.REJECTED];
                  //     }
                  //   } else {
                  //     return prev.filter(
                  //       (r: string) => r !== CreditRequestStatus.REJECTED
                  //     );
                  //   }
                  //   return prev;
                  // });
                });
              }}
            />
          </div>

          <div className="flex__spacing">
            <label htmlFor={CreditRequestStatus.PENDING} className="bold">
              Créditos Pendientes
            </label>
            <input
              type="radio"
              name="creditRequestStatus"
              // checked={filteredCheckedFields.includes(
              //   CreditRequestStatus.PENDING
              // )}
              // value={CreditRequestStatus.PENDING}
              onChange={() =>
                // e: React.ChangeEvent<HTMLInputElement>
                {
                  // const isChecked = e.target.checked;

                  // setFilteredCheckedFields &&
                  setFilteredCheckedFields((prev: string[]) => {
                    // if (isChecked) {
                    //   if (!prev.includes(CreditRequestStatus.PENDING)) {
                    return [CreditRequestStatus.PENDING];
                    //   }
                    // } else {
                    //   return prev.filter(
                    //     (r: string) => r !== CreditRequestStatus.PENDING
                    //   );
                    // }
                    // return prev;
                  });
                }
              }
            />
          </div>
        </div>

        <CreditsList ClientCredits={filteredItems} isLoading={isLoading} />
      </section>
    </>
  );
}
