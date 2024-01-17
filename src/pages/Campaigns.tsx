import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/Table/Table';
import campaigns from '../data/campaigns';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'clicks', headerName: 'Clicks', width: 250 },
  { field: 'cost', headerName: 'Cost', width: 250 },
  { field: 'date', headerName: 'Date', width: 250 },
];

export default function Campaigns() {
  return (
    <DataTable
      dataRows={campaigns}
      dataColumns={columns}
    />
  );
}
