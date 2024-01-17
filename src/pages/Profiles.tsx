import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/Table/Table';
import profiles from '../data/profiles';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 330 },
  { field: 'country', headerName: 'Country', width: 330 },
  { field: 'marketplace', headerName: 'Marketplace', width: 330 },
];

export default function Profiles() {
  return (
    <DataTable
      dataRows={profiles}
      dataColumns={columns}
      path='campaigns'
    />
  );
}
