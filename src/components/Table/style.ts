import styled from '@mui/material/styles/styled';
import { DataGrid } from '@mui/x-data-grid';

export const CustomDataGrid = styled(DataGrid)(() => ({
  cursor: 'pointer',

  '.selectedRow': {
    backgroundColor: 'yellow',
  },
}));


