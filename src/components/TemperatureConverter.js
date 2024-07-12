import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const inputCelsius = (e) => {
    const { value } = e.target;
    setCelsius(value);
    const fahrenheitValue = value * (9 / 5) + 32;
    setFahrenheit(fahrenheitValue.toFixed(1));
  };

  const inputFahrenheit = (e) => {
    const { value } = e.target;
    setFahrenheit(value);
    const celsiusValue = (value - 32) * (5 / 9);
    setCelsius(celsiusValue.toFixed(1));
  };

  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="Celsius"
          label="Celsius"
          variant="outlined"
          value={celsius}
          onChange={inputCelsius}
        />
        <TextField
          id="Fahrenheit"
          label="Fahrenheit"
          variant="outlined"
          value={fahrenheit}
          onChange={inputFahrenheit}
        />
      </Box>
    </>
  );
}

export default TemperatureConverter;
