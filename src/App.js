import "./App.css";

function App() {
  const dealDataLabels = [
    "Deal Number",
    "Name",
    "Rate Spread",
    "Reserve",
    "VSC",
    "Gap",
    "Tire & Wheel",
    "Key",
    "Appearance Protection",
    "Advanced Protection",
    "Advsnced Protection Plus",
    "Windshield",
  ];

  return (
    <div className="App">
      Deal Log
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            {dealDataLabels.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
