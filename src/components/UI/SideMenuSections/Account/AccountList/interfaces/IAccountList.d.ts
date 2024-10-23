import { IIsLoading } from '@/interfaces/SideMenuSections/general';
import { IUseListAccountsViewAPI } from '../../api/interfaces/IUseListAccountViews';

export interface IAccountListProps extends IIsLoading {
    listAccounts: IUseListAccountsViewAPI[];
  }