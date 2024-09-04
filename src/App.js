import "./App.css";

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

  return (
    <div className="App">
      Deal Log
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            {dealDataLabels.map((label) => (
              <th key={label}>{Object.values(label)}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
