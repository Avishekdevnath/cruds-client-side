import './App.css';
import { Container, Typography } from '@mui/material';
import DataTable from './Component/DataTable/DataTable';

function App() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 5 }}>Data Table</Typography>
      <DataTable></DataTable>
    </Container>
  );
}

export default App;
