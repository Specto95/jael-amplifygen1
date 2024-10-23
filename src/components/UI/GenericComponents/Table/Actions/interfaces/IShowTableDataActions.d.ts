export interface IShowTableDataActionsProps {
    Data: any[];
    setData: React.Dispatch<React.SetStateAction<any[]>>;
    cell: any;
    sectionName: string;
}