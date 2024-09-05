import "./App.css";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

function App() {
  const dealDataLabels = [
    { dealNumber: "Deal Number" },
    { deliveryDate: "Delivery Date" },
    { businessManager: "Business Manager" },
    { customerName: "Customer Name" },
    { rateSpread: "Rate Spread" },
    { reserve: "Reserve" },
    { vsc: "VSC" },
    { gap: "Gap" },
    { tireWheel: "Tire & Wheel" },
    { key: "Key" },
    { appearenceProtection: "Appearance Protection" },
    { advancedProtection: "Advanced Protection" },
    { advancedProtectionPlus: "Advanced Protection Plus" },
    { windshield: "Windshield" },
    { totalGross: "Total Gross" },
  ];

  const mockData = [
    {
      dealNumber: 989898,
      deliveryDate: "9/1/2024",
      businessManager: "Tim Galen",
      customerName: "Bill Johnson",
      rateSpread: 1.5,
      reserve: 350,
      vsc: 500,
      gap: 300,
    },
    {
      dealNumber: 444444,
      deliveryDate: "9/2/2024",
      businessManager: "Tim Galen",
      customerName: "Betty Wilson",
      rateSpread: 0,
      reserve: 200,
    },
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 10,
    },
  }));

  return (
    <div className="App">
      Deal Log
      <TableContainer component={Paper}>
        <TableHead>
          <TableRow>
            {dealDataLabels.map((label) => (
              <StyledTableCell align="right">
                {Object.values(label)}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
      </TableContainer>
    </div>
  );
}

export default App;
