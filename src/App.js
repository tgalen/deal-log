import "./App.css";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";

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
    { other: "Other" },
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
      tireWheel: 0,
      key: 0,
      appearenceProtection: 0,
      advancedProtection: 0,
      advancedProtectionPlus: 0,
      windshield: 0,
      other: 0,
      totalgross: 1150,
    },
    {
      dealNumber: 444444,
      deliveryDate: "9/2/2024",
      businessManager: "Tim Galen",
      customerName: "Betty Wilson",
      rateSpread: 0,
      reserve: 200,
      vsc: 0,
      gap: 0,
      tireWheel: 0,
      key: 0,
      appearenceProtection: 0,
      advancedProtection: 0,
      advancedProtectionPlus: 0,
      windshield: 0,
      other: 0,
      totalgross: 200,
    },
    {
      dealNumber: 989898,
      deliveryDate: "9/1/2024",
      businessManager: "Tim Galen",
      customerName: "Bill Johnson",
      rateSpread: 1.5,
      reserve: 350,
      vsc: 500,
      gap: 300,
      tireWheel: 0,
      key: 0,
      appearenceProtection: 0,
      advancedProtection: 0,
      advancedProtectionPlus: 0,
      windshield: 0,
      other: 0,
      totalgross: 1150,
    },
    {
      dealNumber: 989898,
      deliveryDate: "9/1/2024",
      businessManager: "Tim Galen",
      customerName: "Bill Johnson",
      rateSpread: 1.5,
      reserve: 350,
      vsc: 500,
      gap: 300,
      tireWheel: 0,
      key: 0,
      appearenceProtection: 0,
      advancedProtection: 0,
      advancedProtectionPlus: 0,
      windshield: 0,
      other: 0,
      totalgross: 1150,
    },
    {
      dealNumber: 989898,
      deliveryDate: "9/1/2024",
      businessManager: "Tim Galen",
      customerName: "Bill Johnson",
      rateSpread: 1.5,
      reserve: 350,
      vsc: 500,
      gap: 300,
      tireWheel: 0,
      key: 0,
      appearenceProtection: 0,
      advancedProtection: 0,
      advancedProtectionPlus: 0,
      windshield: 0,
      other: 0,
      totalgross: 1150,
    },
  ];

  const formatDealDataToDisplayInTable = (dealData) => {
    const formattedDealData = [];
    Object.values(dealData).forEach((dataPoint) => {
      formattedDealData.push(dataPoint);
    });
    console.log(formattedDealData);
    return formattedDealData;
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      width: "6%",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div className="App">
      Deal Log
      <TableContainer component={Paper} align="center">
        <Table>
          <TableHead>
            <TableRow>
              {dealDataLabels.map((label) => (
                <StyledTableCell align="right">
                  {Object.values(label)}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((dealData) => {
              return (
                <StyledTableRow>
                  {formatDealDataToDisplayInTable(dealData).map((dataPoint) => (
                    <StyledTableCell align="right">{dataPoint}</StyledTableCell>
                  ))}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
