import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/Table/Table';
import accounts from '../data/accounts';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'authToken', headerName: 'AuthToken', width: 250 },
  { field: 'creationDate', headerName: 'CreationDate', width: 250 },
];

export default function Accounts() {
  return (
    <DataTable
      dataRows={accounts}
      dataColumns={columns}
      path='profiles'
    />
  );
}
