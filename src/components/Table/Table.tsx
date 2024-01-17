import { GridColDef } from '@mui/x-data-grid';
import { useNavigate, useParams } from "react-router-dom";
import { CustomDataGrid } from './style'

interface GridValidRowModel {
  id: number;
}

type DataTableProps<T> = {
  dataRows: T[];
  dataColumns: GridColDef[];
  path?: string;
};

export default function DataTable<T extends GridValidRowModel>({
  dataRows,
  dataColumns,
  path
}: DataTableProps<T>) {
  const navigate = useNavigate();
  const { id: selectedId } = useParams();

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <CustomDataGrid
        rows={dataRows}
        columns={dataColumns}
        onRowClick={path ? (params) => navigate(`/${path}/${params.id}`) : undefined}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        getRowClassName={(params) => `${params.id.toString() === selectedId ? 'selectedRow' : ''}`}
      />
    </div>
  );
}
